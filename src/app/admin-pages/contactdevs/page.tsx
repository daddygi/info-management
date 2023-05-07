"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from "../../components/Header";

export default function ContactDev(){

    const [currentTimeDate, setTimeDate] = useState(new Date());
    const [Mounted, setMounted] = useState(false);

    useEffect(() =>{
        setMounted(true);
        const intervalID = setInterval(() => { setTimeDate(new Date());
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    const CurrentDate = currentTimeDate.toLocaleDateString();
    const CurrentTime = currentTimeDate.toLocaleTimeString();

    return(
        <main>
            <nav><Header /></nav>
            <div className = "flex mt-5">
                <button className = "font-sans ml-2"><Link href = "/admin-home">Back</Link></button>
                { Mounted && (<p className = "absolute right-0 mr-2">Time: {CurrentTime} Date: {CurrentDate}</p>)}
            </div>
            <div className = "flex flex-col items-center justify-center w-full px-20 pt-20 pb-10">
                <img className = "h-auto max-w-full rounded full" src = "/images/adu logo.png" alt = "adu"
                width = {400} height = {400}></img>
            </div>
            <div className = "font-sans mt-6 mb-4 text-xl grid grid-cols-2 gap-10 content-center items-center justify-center text-center">
                <div>
                    <p>Gian Vince Limbaga</p>
                    <p>-email address-</p>
                    <p>-contact number-</p>
                    <p>Team Leader & Programmer</p>
                </div>
                <div>
                    <p>Jay Abaleta</p>
                    <p>-email address-</p>
                    <p>-contact number-</p>
                    <p>Instructor</p>
                </div>
            </div>

            <div className = "mt-5 border-y-2 space-y-5 border-blue-500">
                <p className = "mt-5 mb-5 text-center text-3xl font-bold font-sans">DEVELOPERS TEAM</p>
            </div>

            <div className = "bg-blue-500 bg-opacity-95 font-sans text-xl text-center content-center items-center justify-center">
                <div className = "font-sans text-xl grid grid-cols-2 gap-10">
                    <div className = "mt-10 mb-5">
                        <p>Tatiana Chiapco</p>
                        <p>Programmer</p>
                    </div>

                    <div className = "mt-10 mb-5">
                        <p>Jazleen Razote</p>
                        <p>System Designer</p>
                    </div>

                    <div className = "mb-5">
                        <p>Sunshine Chuyat</p>
                        <p>System Analyst</p>
                    </div>

                    <div className = "mb-5">
                        <p>Paul Basaen</p>
                        <p>Database Admin</p>
                    </div>
                </div>
                <div>
                    <p>Jerome Beron</p>
                    <p>Database Admin & System Designer</p>
                </div>
            </div>
        </main>
    );
}