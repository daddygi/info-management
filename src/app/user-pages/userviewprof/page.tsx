"use client";
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import NavBarUser from '@/app/components/NavBarUser';
import Image from 'next/image';
import Link from 'next/link';

interface Resident {
    firstName: string;
    middleName: string;
    lastname: string;
    age: number;
    residentId: number;
    address: string;
    email: string;
    contactnumber: string;
    birthdate: string;
    gender: string;
    occupation: string;
    civilStatus: string;
    photo?: string | Blob;
    citizenship: string;
    registerdate: string;
}

interface ViewProfileProps{
    resident?: Resident;
    imageSrc?: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
}

export default function ViewProfile({ resident, imageSrc = '/images/temp id.jpg', imageAlt = 'temp', imageWidth = 300, imageHeight = 300 }: ViewProfileProps): JSX.Element{
    const [currentTimeDate, setCurrentTimeDate] = useState(new Date());
    const [Mounted, setMounted] = useState(false);

    useEffect(() =>{
        setMounted(true);
        const intervalID = setInterval(() => { setCurrentTimeDate(new Date());
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    const CurrentDate = formatDateString(currentTimeDate.toISOString());
    const CurrentTime = currentTimeDate.toLocaleTimeString();

    function formatDateString(dateString: string): string {
        try{
            const date = new Date(dateString);
            if (isNaN(date.getTime())){
                throw new Error('Invalid Date');
            }
            return date.toLocaleDateString('en-us', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            });
        } catch (error){
            console.error('Error formatting date: ', error);
            return 'Invaid date';
        }
    };

    const isBlob = (value: any): value is Blob => {
        return value instanceof Blob;
    };

    const emptyPhoto = (
        <svg className="h-64 w-64 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
    );

    const formatbirthday = resident?.birthdate
    ? formatDateString(resident.birthdate)
    : 'Invalid Date';

    const formatregisdate = resident?.registerdate
    ? formatDateString(resident.registerdate)
    : 'Invalid date';

    return(
        <main>
            <nav><Header /> <NavBarUser /></nav>
            <div className = "flex mt-3">
                <button className = "font-sans ml-2"><Link href = "/user-home">Back</Link></button>
                {Mounted && (<p className = "absolute right-0 mr-2">{CurrentTime} - {CurrentDate}</p>)}
            </div>
            <div className ="flex flex-col items-center justify-center w-full px-20 pt-10">
                {resident?.photo ?(
                    isBlob(resident.photo) ? (
                        <img className = "h-auto max-w-full rounded-full" src = {URL.createObjectURL(resident.photo)} alt = "Profile Photo" width = {300} height = {300} />
                    ) : (
                        <Image className = "h-auto max-w-full rounded-full" src = {resident.photo} alt = "Profile Photo" width = {300} height = {300} />
                    )
                ) : (
                    <div className = "h-64 w-64 text-gray-400">
                        {emptyPhoto}
                    </div>
                )}
            </div>
            <div className = "font-sans mx-8 my-8 tracking-wide border-2 border-gray-400">

                { resident ? (
                <>
                    <p className = "font-semibold text-xl">OVERVIEW:</p>
                    <div className = "font-sans text-lg tracking-wider ml-20 mt-10">
                        <p>Name: {resident.firstName} {resident.middleName} {resident.lastname}</p>
                        <p>Resident ID #: {resident.residentId}</p>
                        <p>Age: {resident.age}</p>
                        <p>Address: {resident.address}</p>
                    </div>

                    <p className = "font-semibold text-xl">Contact Information:</p>
                    <div className = "font-sans text-lg tracking-wider ml-20 mt-10">
                        <p>Email Address: {resident.email}</p>
                        <p>Contact Number: {resident.contactnumber}</p>
                    </div>

                    <p className = "font-semibold text-xl">Other Information:</p>
                    <div className = "font-sans text-lg tracking-wider ml-20 mt-10">
                        <p>Birthdate: {formatbirthday}</p>
                        <p>Gender: {resident.gender}</p>
                        <p>Occupation: {resident.occupation}</p>
                        <p>Civil Status: {resident.civilStatus}</p>
                        <p>Citizenship: {resident.citizenship}</p>
                    </div>

                    <p className = "font-semibold text-xl">Date of Registration:</p>
                    <div className = "font-sans text-lg tracking-wider ml-5 mt-3 mb-3">
                        <p>{formatregisdate}</p>
                    </div>
                </>
                ) : (
                    <p className = "text-center my-6">No resident data available.</p>
                )}
                    <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded text-center my-6 mx-10">
                        <Link href = "/user-pages/usereditprofile">Edit Profile</Link>
                    </button>
            </div>
        </main>
    );
}