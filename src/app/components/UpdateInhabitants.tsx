import React, { useState, useEffect } from 'react';

interface UpdateInhabitantsProps{
    onUpdateInhabitant: (updateInhabitant: Partial<Inhabitant>) => void;
    residentid: string;
}

interface Inhabitant{
    firstname: string;
    middlename: string;
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
    citizenship: string;
    residentid: number;
    addressline1: string;
    addressline2?: string;
    photo?: Blob;
    password: string;
    dateregistered: string;
}

const UpdateInhabitant: React.FC<UpdateInhabitantsProps> = ({ onUpdateInhabitant, residentid }) =>{
    const [inhabitantData, setInhabitantData] = useState<Partial<Inhabitant>>({});

    const fetchInhabitantData = (residentid: string) => {
        const data: Partial<Inhabitant> = {};
        setInhabitantData(data);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = event.target;
        setInhabitantData((prevData) => ({
            ...prevData, [name]: value,
        }));
    };

    const handleUpdateInhabitant = (event: React.FormEvent) =>{
        event.preventDefault();
        onUpdateInhabitant(inhabitantData);
        window.location.href = '/admin-pages/inhabitantstable';
    };

    useEffect(() =>{
        if(residentid){
            fetchInhabitantData(residentid);
        }
    }, [residentid]);

    return(
        <form onSubmit = {handleUpdateInhabitant}>
            <input type = "text" id = "firstname" name = "firstname" value = {inhabitantData.firstname || ''} onChange ={handleChange} />
            <button type = "submit">Update</button>
        </form>
    );
}

export default UpdateInhabitant;