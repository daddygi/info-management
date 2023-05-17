import React from 'react';
import Header from '../../components/Header';
import NavBarUser from '@/app/components/NavBarUser';
import Link from 'next/link';

export default function UserAnnouncement(){

    return(
        <main>
            <nav><Header /> <NavBarUser /></nav>
            <div className = "flex mt-3 mb-2">
                <button className = "ml-2 font-sans bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"><Link href = "/user-home">Back</Link></button>
            </div>
            <p className = "text-black font-sans text-4xl ml-10 mb-2">Announcements</p>
            <div className = "absolute right-0 mr-28 -m-12 flex w-96 flex-wrap">
                <input type = "search" className = "relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder = "Search..."
                aria-label = "Search"></input>
            </div>
            <div className = "w-full h-1 border-none mr-auto ml-auto mt-2 mb-24 bg-black"></div>
            
            <div className = "flex justify-start mb-7">
                <div className = "bg-white border-l-8 border-blue-600 border-t-2 border-b-2 border-r-2 p-4 ml-32 pr-80">
                    <p className = "text-xl font-sans font-semibold text-left mt-7 mb-1">Announcement 1</p>
                    <p className = "text-lg font-sans text-left mt-2 mb-5">April 14, 2023</p>
                </div>
                <div className = "bg-white border-gray-600 border-t-2 border-l-2 border-b-2 border-r-2 pr-20 pl-20 ml-32 p-8 content-center justify-center items-center">
                    <div className = "font-sans text-xl font-black pr-10 pl-10 border-gray-400 border-b-2 text-center items-center justify-center mb-8">Archives</div>
                    <button className = "text-white bg-blue-500 hover:bg-blue-700 font-sans px-4 py-2 rounded-md ml-10 mr-10"><Link href = "/user-pages/UserArchieve">Proceed</Link></button>
                </div>
            </div>

            <div className = "flex justify-start mb-7">
                <div className = "bg-white border-l-8 border-red-600 border-t-2 border-b-2 border-r-2 p-4 ml-32 pr-80">
                    <p className = "text-xl font-sans font-semibold text-left mt-7 mb-1">Announcement 2</p>
                    <p className = "text-lg font-sans text-left mt-2 mb-5">April 14, 2023</p>
                </div>
            </div>

            <div className = "flex justify-start mb-7">
                <div className = "bg-white border-l-8 border-blue-600 border-t-2 border-b-2 border-r-2 p-4 ml-32 pr-80">
                    <p className = "text-xl font-sans font-semibold text-left mt-7 mb-1">Announcement 3</p>
                    <p className = "text-lg font-sans text-left mt-2 mb-5">April 14, 2023</p>
                </div>
            </div>

            <div className = "flex justify-start mb-7">
                <div className = "bg-white border-l-8 border-red-600 border-t-2 border-b-2 border-r-2 p-4 ml-32 pr-80">
                    <p className = "text-xl font-sans font-semibold text-left mt-7 mb-1">Announcement 4</p>
                    <p className = "text-lg font-sans text-left mt-2 mb-5">April 14, 2023</p>
                </div>
            </div>

            <div className = "flex justify-start mb-7">
                <div className = "bg-white border-l-8 border-blue-600 border-t-2 border-b-2 border-r-2 p-4 ml-32 pr-80">
                    <p className = "text-xl font-sans font-semibold text-left mt-7 mb-1">Announcement 5</p>
                    <p className = "text-lg font-sans text-left mt-2 mb-5">April 14, 2023</p>
                </div>
            </div>
        </main>
    );
}