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
                        {formValues.photo && formValues.photo instanceof Blob ? (
                            <div className = ""></div>
                        )}
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