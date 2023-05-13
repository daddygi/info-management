"use client";
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function EditProfile(){

    const [CurrentTimeDate, setCurrentTimeDate] = useState(new Date());
    const [Mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const interval = setInterval(() => { setCurrentTimeDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const CurrentDate = CurrentTimeDate.toLocaleDateString();
    const CurrentTime = CurrentTimeDate.toLocaleTimeString();


    return(
        <main>
            <nav><Header /></nav>
            <div className = "flex mt-3 mb-2">
                <button className = "ml-2 font-sans"><Link href = "/userviewprof">Back</Link></button>
                {Mounted && (<p className = "absolute right-0 mr-2">Time: {CurrentTime}, {CurrentDate}</p>)}
            </div>
            <figure className = "md:flex w-auto mt-5 ml-2">
                <img className = "h-auto max-w-full rounded-full" src = "/images/temp id.jpg" alt = "temp"
                width = {150} height = {150}></img>
                <div className = "mt-18 text-base pl-10 gap-1 content-start">
                    <button className = "mt-5 bg-blue-500 hover:bg-blue-700 border-none text-white text-center flex items-center px-4 py-2 rounded mb-2">Upload Photo</button>
                    <button className = "mt-5 bg-blue-500 hover:bg-blue-700 border-none text-white text-center flex items-center px-4 py-2 rounded">Delete Photo</button>
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
                </div>
                <div className = "flex bottom-0 right-0">
                    <button className = "mt-5 bg-blue-500 hover:bg-blue-700 border-none text-white flex items-center px-2 py-2 rounded">Save</button>
                </div>
            </div>
        </main>
    );
}