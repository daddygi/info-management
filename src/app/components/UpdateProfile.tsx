import React, { useState } from 'react';

interface Inhabitant{
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
    photo?: Blob;
}

interface Props{
    inhabitant: Inhabitant;
    onUpdate: (data: Partial<Inhabitant>) => void;
    onCancel: () => void;
}

const UpdateProfile: React.FC<Props> = ({ inhabitant, onUpdate ,onCancel}) => {
    const [formValues, setFormValues] = useState<Inhabitant>({
        firstname: inhabitant.firstname,
        middleinitial: inhabitant.middleinitial,
        lastname: inhabitant.lastname,
        suffix: inhabitant.suffix,
        gender: inhabitant.gender,
        age: inhabitant.age,
        birthdate: inhabitant.birthdate,
        civilstatus: inhabitant.civilstatus,
        residenttype: inhabitant.residenttype,
        emailaddress: inhabitant.emailaddress,
        contactnumber: inhabitant.contactnumber,
        occupation: inhabitant.occupation,
        residentid: inhabitant.residentid,
        photo: inhabitant.photo,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues, [name]: value
        }));
    };

    const handleUpdatePhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if(file){
            setFormValues((prevValues) => ({ ...prevValues, photo: file }));
        };
    };

    const handleDeletePhoto = () =>{
        setFormValues((prevValues) => ({ ...prevValues, photo: undefined}))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onUpdate(formValues);
    }

    return(
        <div className = "fixed inset-0 z-10 flex items-center justify-center">
            <div className = "bg-white shadow-lg rounded-lg p-6">
                <form onSubmit = {handleSubmit}>
                    <div className = "flex flex-col mb-4">
                        <label className = "mb-2 font-bold text-sm text-gray-900" htmlFor = "photo">
                            Update Photo
                        </label>
                        <div className = "flex mb-4">
                            {formValues.photo && formValues.photo instanceof Blob && (
                                <div className = "w-16 h-16 mr-4">
                                    <img className = "w-full h-full object-cover" src = {URL.createObjectURL(formValues.photo)} alt = "Inhabitant" />
                                </div>
                            )}
                                <div className = "w-16 h-16 bg-gray-200 mr-4 rounded-full"></div>
                            <div className = "flex flex-col">
                                <input className = "mb-2" type = "file" name = "photo" onChange = {handleUpdatePhoto} />
                                <div className = "flex">
                                    {formValues.photo && (
                                        <button className = "bg-blue-500 text-white px-4 py-2 rounded mr-2" type = "button" onClick = {handleDeletePhoto}>Delete Photo</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button type = "button" onClick = {onCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateProfile;