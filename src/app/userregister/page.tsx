"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import SuccessModal from '../components/SuccessModal';

interface RegisterData {
    firstname: string;
    middleinitial: string;
    lastname: string;
    suffix?: string;
    gender: string;
    age: number;
    birthdate: string;
    civilstatus: string;
    residenttype: string;
    emailaddress?: string;
    contactnumber?: string;
    occupation: string;
    residentid: number;
    addressline1: string;
    addressline2?: string;
    photo?: Blob;
    password: string;
}


function UserRegister(){

    const [registerData, setRegisterData] = useState<RegisterData>({
        firstname: "",
        middleinitial: "",
        lastname: "",
        gender: "",
        age: 0,
        birthdate: "",
        civilstatus: "",
        residenttype: "",
        emailaddress: "",
        contactnumber: "",
        occupation: "",
        residentid: 0,
        addressline1: "",
        addressline2: "",
        password: "",
        photo: undefined,
    });

    const [errorMessage, setErrorMessage] = useState('');

    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
        const { name, value } = e.target;

        setRegisterData((prevState) => ({ ...prevState, [name]: value}));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(registerData);

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

        if(!passwordRegex.test(registerData.password)){
            setErrorMessage('Password must be at least: 8 characters long, 1 uppercase letter, 1 lowercase letter, 1 number');
            return;
        }

        setShowSuccessModal(true);
    };

    const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if(file){
            const reader = new FileReader()
            reader.onloadend = () =>{
                setRegisterData((prevState) => ({ ...prevState, photo: new Blob([reader.result as ArrayBuffer]) }));
            }
            reader.readAsArrayBuffer(file)
        }
    };

    const handlePhotoDelete = () => {
        setRegisterData((prevState) => ({ ...prevState, photo: undefined}));
    };

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <div className = "mt-4 flex">
                    <button className = "ml-4 font-sans"><Link href = "/">Back</Link></button>
                    <img className = "mb-2 ml-auto" src = "/images/tempB.png" width = {100} height = {100}></img>
                </div>
                <div className = "mt-5 mb-6 ml-9 flex">
                    <p className = "mt-2 ml-3">
                        <label className = "block text-gray-700 text-sm font-bold mb-2">
                            First Name:
                        </label>
                        <input className = "shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="firstname" 
                        name = "firstname"
                        type="text"
                        value = {registerData.firstname}
                        onChange = {handleChange}
                        required></input>
                    </p>
                    <p className = "mt-2 ml-7">
                        <label className = "ml-4 block text-gray-700 text-sm font-bold mb-2">
                            Middle Initial:
                        </label>
                        <input className = "shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="middleinitial" 
                        name = "middleinitial"
                        type="text"
                        value = {registerData.middleinitial}
                        onChange = {handleChange}
                        required></input>
                    </p>
                    <p className = "mt-2 ml-7">
                        <label className = "ml-4 block text-gray-700 text-sm font-bold mb-2">
                            Last Name:
                        </label>
                        <input className = "shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="lastname" 
                        name = "lastname"
                        type="text"
                        value = {registerData.lastname}
                        onChange = {handleChange}
                        required></input>
                    </p>
                    <p className = "mt-2 ml-7">
                        <label className = "ml-4 block text-gray-700 text-sm font-bold mb-2">
                            Suffix:
                        </label>
                        <input className = "shadow appearance-none border rounded py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="suffix" 
                        name = "suffix"
                        type="text"
                        value = {registerData.suffix}
                        onChange = {handleChange}
                        ></input>
                    </p>
                </div>
                <div className = "mt-5 mb-6 ml-9 flex">
                    <p className = "mt-5 ml-3">Gender: </p>
                    <p className = "mt-5 ml-7 mr-5">
                        <input className = "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        type = "radio"
                        id = "male"
                        name = "gender"
                        value = "male"
                        checked = {registerData.gender === "male"}
                        onChange = {handleChange}></input>
                        <label htmlFor = "male" className = "mt-px inline-block pl-[0.15rem] hover:cursor-pointer">
                            Male
                        </label>
                    </p>
                    <p className = "mt-5 ml-7 mr-5">
                        <input className = "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        type = "radio"
                        id = "female"
                        name = "gender"
                        value = "female"
                        checked = {registerData.gender === "female"}
                        onChange = {handleChange}></input>
                        <label htmlFor = "female" className = "mt-px inline-block pl-[0.15rem] hover:cursor-pointer">
                            Female
                        </label>
                    </p>
                    <p className = "mt-5 ml-7 mr-1">Insert Photo: </p>
                    <div className = "mt-2 ml-7 mr-4">
                        <label htmlFor = "photo" className = "cursor-pointer mr-4">
                            {registerData.photo ? (
                                <img src = {URL.createObjectURL(registerData.photo)} alt = "Profile" className = "inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100"/>
                            ) : (
                            <svg className = "h-12 w-12 rounded-full text-gray-300" fill = "currentColor" viewBox = "0 0 24 24">
                                <path d = "M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            )}
                            <input type = "file" id = "photo" className = "hidden" onChange = {handlePhotoUpload}/>
                        </label>
                        {registerData.photo && (
                            <button type = "button" className = "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            onClick = {handlePhotoDelete}>Delete Photo</button>
                        )}
                    </div>

                    <p className = "mt-2 ml-7 mr-4">
                        <label className = "ml-4 block text-gray-700 text-sm font-bold mb-2">
                            Age:
                        </label>
                        <input className = "shadow appearance-none border rounded py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="age" 
                        type="number"
                        name = "age"
                        value = {registerData.age}
                        onChange = {handleChange}
                        required></input>
                    </p>
                </div>

                <div className = "mt-10 mb-6 ml-9 flex">
                    <p className = "mr-18 ml-4">
                        <label>Birthdate: </label>
                        <input type = "date" id = "birthdate" name = "birthdate" value = {registerData.birthdate} onChange={handleChange}>
                        </input>
                    </p>
                    <p className = "ml-12 mt-3 flex">Civil Status: </p>
                    <div className = "mr-2 ml-15 content-start grid grid-flow-rows-2"> 
                        <p className = "ml-2 mr-2 mb-2 mt-3 pl-3 flex">
                            <input className = "mt-2 mb-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                id = "single"
                                type = "radio"
                                name = "civilstatus"
                                value = "single"
                                checked = {registerData.civilstatus === "single"}
                                onChange = {handleChange}></input>
                            <label htmlFor = "single" className = "mt-px inline-block pl-[0.15rem] hover:cursor-pointer">
                                Single
                            </label>
                        </p>

                        <p className = "ml-2 mr-2 mb-2 pl-3 flex">
                            <input className = "mt-2 mb-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                id = "married"
                                type = "radio"
                                name = "civilstatus"
                                value = "married"
                                checked = {registerData.civilstatus === "married"}
                                onChange = {handleChange}></input>
                            <label htmlFor = "married" className = "mt-px inline-block pl-[0.15rem] hover:cursor-pointer">
                                Married
                            </label>
                        </p>

                        <p className = "ml-2 mr-2 mb-2 pl-3 flex">
                            <input className = "mt-2 mb-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                id = "widowed"
                                type = "radio"
                                name = "civilstatus"
                                value = "widowed"
                                checked = {registerData.civilstatus === "widowed"}
                                onChange = {handleChange}></input>
                            <label htmlFor = "widowed" className = "mt-px inline-block pl-[0.15rem] hover:cursor-pointer">
                                Widowed
                            </label>
                        </p>

                        <p className = "ml-2 mr-2 mb-2 pl-3 flex">
                            <input className = "mt-2 mb-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                id = "divorced"
                                type = "radio"
                                name = "civilstatus"
                                value = "divorced"
                                checked = {registerData.civilstatus === "divorced"}
                                onChange = {handleChange}></input>
                            <label htmlFor = "divorced" className = "mt-px inline-block pl-[0.15rem] hover:cursor-pointer">
                                Divorced
                            </label>
                        </p>

                        <p className = "ml-2 mr-2 mb-2 pl-3 flex">
                            <input className = "mt-2 mb-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                id = "separated"
                                type = "radio"
                                name = "civilstatus"
                                value = "separated"
                                checked = {registerData.civilstatus === "separated"}
                                onChange = {handleChange}></input>
                            <label htmlFor = "separated" className = "mt-px inline-block pl-[0.15rem] hover:cursor-pointer">
                                Separated
                            </label>
                        </p>
                    </div>

                    <p className = "ml-12 flex">Resident Type:  </p>
                    <div className = "mr-4 ml-15 content-start grid grid-flow-rows-2"> 
                        <p className = "ml-2 mr-2 mb-2 pl-3 flex">
                            <input className = "mt-2 mb-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                id = "temporary"
                                type = "radio"
                                name = "residenttype"
                                value = "temporary resident"
                                checked = {registerData.residenttype === "temporary resident"}
                                onChange = {handleChange}></input>
                            <label htmlFor = "temporary" className = "mt-px inline-block pl-[0.15rem] hover:cursor-pointer">
                                Temporary Resident
                            </label>
                        </p>

                        <p className = "ml-2 mr-2 mb-2 pl-3 flex">
                            <input className = "mt-2 mb-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                id = "permanent"
                                type = "radio"
                                name = "residenttype"
                                value = "permanent resident"
                                checked = {registerData.residenttype === "permanent resident"}
                                onChange = {handleChange}></input>
                            <label htmlFor = "permanent" className = "mt-px inline-block pl-[0.15rem] hover:cursor-pointer">
                                Permanent Resident
                            </label>
                        </p>
                    </div>
                </div>

                <div className = "mt-10 mb-6 ml-9 flex">
                    <p className = "mt-2 ml-3 mr-10">
                        <label className = "block text-gray-700 text-sm font-bold mb-2">
                            Email Address:
                        </label>
                        <input className = "shadow appearance-none border rounded py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        name = "emailaddress"
                        id="email" 
                        type="email" 
                        placeholder = "example@email.com"
                        value = {registerData.emailaddress}
                        onChange = {handleChange}></input>
                    </p>

                    <p className = "mt-2 ml-10">
                        <label className = "block text-gray-700 text-sm font-bold mb-2">
                            Contact Number:
                        </label>
                        <input className = "shadow appearance-none border rounded py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        name = "contactnumber"
                        id="contactnumber" 
                        type="tel"
                        value = {registerData.contactnumber}
                        onChange = {handleChange}></input>
                    </p>
                </div>

                <div className = "mt-10 mb-6 ml-9 flex">
                    <p className = "mt-2 ml-3 mr-10">
                        <label className = "block text-gray-700 text-sm font-bold mb-2">
                            Occupation:
                        </label>
                        <input className = "shadow appearance-none border rounded py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="occupation" 
                        name = "occupation"
                        type="text"
                        value = {registerData.occupation}
                        onChange = {handleChange}></input>
                    </p>

                    <p className = "mt-2 ml-10">
                        <label className = "block text-gray-700 text-sm font-bold mb-2">
                            Resident ID #:
                        </label>
                        <input className = "shadow appearance-none border rounded py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="residentid" 
                        name = "residentid"
                        type="text"
                        value = {registerData.residentid}
                        onChange = {handleChange}
                        required></input>
                    </p>
                </div>

                <div className = "mt-10 mb-6 ml-9 flex">
                    <p className = "mt-2 ml-3 mr-10">
                        <label className = "block text-gray-700 text-sm font-bold mb-2">
                            Address Line 1:
                        </label>
                        <input className = "shadow appearance-none border rounded py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="addressline1" 
                        name = "addressline1"
                        type="text"
                        value = {registerData.addressline1}
                        onChange = {handleChange}
                        required></input>
                    </p>

                    <p className = "mt-2 ml-10">
                        <label className = "block text-gray-700 text-sm font-bold mb-2">
                            Address Line 2 (optional):
                        </label>
                        <input className = "shadow appearance-none border rounded py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="addressline2" 
                        name = "addressline2"
                        type="text"
                        value = {registerData.addressline2}
                        onChange = {handleChange}></input>
                    </p>
                </div>

                <div className = "mt-10 mb-6 ml-9 flex">
                    <p className = "mt-2 ml-3 mr-10">
                        <label className = "block text-gray-700 text-sm font-bold mb-2">
                            Password:
                        </label>
                        <input className = "shadow appearance-none border rounded py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        name = "password"
                        id="password" 
                        type="password"
                        pattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                        value = {registerData.password}
                        onChange = {handleChange}
                        required></input>
                        <span className = "ml-5">Password must contain: a minimum of 8 characters, at least one uppercase, at least one lowercase, at least one number
                        </span>
                    </p>
                </div>

                <div className = "mt-10 mb-6 ml-9 flex">
                    <button 
                    type = "submit" 
                    className = "mt-5 bg-blue-500 hover:bg-blue-700 border-none text-white text-center flex items-center px-4 py-2 rounded mb-2"
                    >
                        Submit
                    </button>
                </div>
            </form>
            {showSuccessModal && (
                <SuccessModal message1 = "Thank you for Registering!" message2 = "You may now access your account"/>
            )}
        </div>
    );
}
export default UserRegister;