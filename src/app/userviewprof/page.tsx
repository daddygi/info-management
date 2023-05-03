"use client";
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function ViewProfile(){

    const [currentTimeDate, setCurrentTimeDate] = useState(new Date());
    const [Mounted, setMounted] = useState(false);

    useEffect(() =>{
        setMounted(true);
        const intervalID = setInterval(() => { setCurrentTimeDate(new Date());
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    const CurrentDate = currentTimeDate.toLocaleDateString();
    const CurrentTime = currentTimeDate.toLocaleTimeString();

    return(
        <main>
            <nav><Header /></nav>
            <div className = "flex mt-3">
                <button className = "font-sans ml-2"><Link href = "/user-home">Back</Link></button>
                {Mounted && (<p className = "absolute right-0 mr-2">Current Time: {CurrentTime}, {CurrentDate}</p>)}
            </div>
            <div className ="flex flex-col items-center justify-center w-full px-20 pt-10">
                <img className = "h-auto max-w-full rounded-full" src = "/images/temp id.jpg" alt="temp"
                width = {300} height = {300}></img>
            </div>
            <div className = "font-sans ml-4 mt-4 tracking-wide">

                <p className = "font-semibold text-xl">OVERVIEW:</p>
                <div className = "font-sans text-lg tracking-wider ml-5 mt-3">
                    <p>Name: </p>
                    <p>Resident ID #: </p>
                    <p>Age: </p>
                    <p>Address: </p>
                </div>

                <p className = "font-semibold text-xl">Contact Information:</p>
                <div className = "font-sans text-lg tracking-wider ml-5 mt-3">
                    <p>Email Address: </p>
                    <p>Contact Number: </p>
                </div>

                <p className = "font-semibold text-xl">Other Information:</p>
                <div className = "font-sans text-lg tracking-wider ml-5 mt-3">
                    <p>Birthdate: </p>
                    <p>Gender: </p>
                    <p>Occupation: </p>
                    <p>Civil Status: </p>
                </div>

                <p className = "font-semibold text-xl">Date of Registration:</p>
                <div className = "font-sans text-lg tracking-wider ml-5 mt-3 mb-3">
                    <p>---Date---</p>
                </div>
                <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded text-center mt-2 right-0 bottom-0">
                    <Link href = "/usereditprofile">Edit Profile</Link>
                </button>
            </div>
        </main>
    );
}