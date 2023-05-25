"use client";
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import NavBarUser from '@/app/components/NavBarUser';
import Image from 'next/image';
import Link from 'next/link';

interface Inhabitant {
    firstName: string;
    middleName: string;
    lastName: string;
    residentId: string;
    age: number;
    oldAddress: string;
    newAddress?: string;
    email: string;
    contactNumber: number;
    birthdate: string;
    gender: string;
    occupation: string;
    civilStatus: string;
    citizenship: string;
}

export default function EditProfile(){

    const [CurrentTimeDate, setCurrentTimeDate] = useState(new Date());
    const [Mounted, setMounted] = useState(false);
    const [photoURL, setPhotoURL] = useState('');

    useEffect(() => {
        setMounted(true);
        const interval = setInterval(() => { setCurrentTimeDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatDate = (date: Date): string => {
        return date.toLocaleDateString('en-us', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
    };

    const CurrentDate = formatDate(CurrentTimeDate);
    const CurrentTime = CurrentTimeDate.toLocaleTimeString();

    const handleUploadPhoto = (): void => {
        //
    };

    const handleDeletePhoto = (): void => {
        //
    };


    return(
        <main>
            <nav><Header /> <NavBarUser /></nav>
            <div className = "flex mt-3 mb-2">
                <button className = "ml-2 font-sans bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"><Link href = "user-pages/userviewprof">Back</Link></button>
                {Mounted && (<p className = "absolute right-0 mr-2">Time: {CurrentTime}, {CurrentDate}</p>)}
            </div>
            <figure className = "md:flex w-auto mt-5 ml-2">
                {photoURL ? (
                    <img className = "h-auto max-w-full rounded-full" src = {photoURL} alt = "Profile Photo" width = {150} height = {150} />
                ) : (
                    <svg className = "h-24 w-24 text-black" fill = "none" viewBox = "0 0 24 24" stroke = "currentColor" >
                        <path strokeLinecap = "round" strokeLinejoin = "round" strokeWidth = {2} d = "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )}
                <div className = "mt-18 text-base pl-10 gap-1 content-start">
                    <button className = "mt-5 bg-blue-500 hover:bg-blue-700 border-none text-white text-center flex items-center px-4 py-2 rounded mb-2" onClick = {handleUploadPhoto}>Upload Photo</button>
                    <button className = "mt-5 bg-blue-500 hover:bg-blue-700 border-none text-white text-center flex items-center px-4 py-2 rounded" onClick = {handleDeletePhoto}>Delete Photo</button>
                </div>
            </figure>
            <div className = "font-sans ml-4 mt-4 mb-5 tracking-wide">
                <p className = "font-semibold text-xl">OVERVIEW: </p>
                <div className = "font-sans text-lg tracking-wider ml-5 mt-3">
                    <p>Name: </p>
                    <p>Resident ID #: </p>
                    <p>Age: </p>
                    <p>Old Address: </p>
                    <p>New Address: </p>
                </div>
                <p className = "font-semibold text-xl">CONTACT INFORMATION: </p>
                <div className = "font-sans text-lg tracking-wider ml-5 mt-3">
                    <p>Email Address: </p>
                    <p>Contact Number: </p>
                </div>
                <p className = "font-semibold text-xl">OTHER INFORMATION: </p>
                <div className = "font-sans text-lg tracking-wider ml-5 mt-3">
                    <p>Birthdate: </p>
                    <p>Gender: </p>
                    <p>Occupation: </p>
                    <p>Civil Status: </p>
                    <p>Citizenship: </p>
                </div>
                <div className = "flex bottom-0 right-0">
                    <button className = "mt-5 bg-blue-500 hover:bg-blue-700 border-none text-white flex items-center px-2 py-2 rounded">Save</button>
                </div>
            </div>
        </main>
    );
}