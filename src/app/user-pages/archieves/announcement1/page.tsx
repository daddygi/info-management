import React from 'react';
import Header from '../../../components/Header';
import NavBarUser from '../../../components/NavBarUser';
import Link from 'next/link';

export default function Announcement1(){

    return(
        <main>
            <nav><Header /> <NavBarUser /></nav>
            <div className = "flex mt-3 mb-2">
                <button className = "ml-2 font-sans bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"><Link href = "/user-pages/UserArchieve">Back</Link></button>
            </div>
            <p className = "text-black font-sans text-4xl ml-8 mb-2">Announcement</p>
            <p className = "font-sans text-lg ml-8">Date Posted: April 14, 2023 at 3:45 PM</p>
            <div className = "w-full h-1 border-none mr-auto ml-auto mt-2 mb-24 bg-black"></div>

            <div className = "flex justify-start items-start ml-5 mt-10 mb-4 mr-6">
                <p className = "text-start pr-80">---Text---</p>

                <div className = "bg-white border-black border-t-2 border-l-2 border-b-2 border-r-2 pr-20 pl-20 ml-10 mr-12 p-8 content-center justify-center items-center absolute right-0">
                    <p className = "border-b-2 border-black font-sans font-black text-xl text-start">More News</p>
                    <button className = "text-blue-500 text-start font-sans text-xl"><Link href = "/user-pages/UserArchieve">See Archieve</Link></button>   
                </div>
            </div>
        </main>
    );
}