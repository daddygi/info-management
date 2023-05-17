import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import NavBarAdmin from '@/app/components/NavBarAdmin';

export default function Announcements(){

    return(
        <main>
            <nav><Header /> <NavBarAdmin /></nav>
            <div className = "flex mt-5 mb-4">
                <button className = "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link href = "/admin-home">Back</Link></button>
            </div>
            <div className = "flex mt-5">
                <h2 className = "font-sans font-bold mr-2 text-2xl">Announcements</h2>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link href = "/admin-pages/adminanncompose">Compose</Link></button>
            </div>

            <div className = "w-full h-1 border-none mr-auto ml-auto mt-2 mb-24 bg-black"></div>
            
            <div className = "flex justify-start mb-7">
                <div className = "bg-white border-l-8 border-blue-600 border-t-2 border-b-2 border-r-2 p-4 ml-32 pr-80">
                    <div>
                        <p className = "text-xl font-sans font-semibold text-left mt-7 mb-1">
                            Announcement 1
                            <button className = "">
                                <svg className="h-10 w-10 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
                            </button>
                        </p>
                        <p className = "text-lg font-sans text-left mt-2 mb-5">April 14, 2023</p>
                    </div>
                </div>
                <div className = "bg-white border-gray-600 border-t-2 border-l-2 border-b-2 border-r-2 pr-20 pl-20 ml-32 p-8 content-center justify-center items-center">
                    <div className = "font-sans text-xl font-black pr-10 pl-10 border-gray-400 border-b-2 text-center items-center justify-center mb-8">Archives</div>
                    <button className = "text-white bg-blue-500 hover:bg-blue-700 font-sans px-4 py-2 rounded-md ml-10 mr-10"><Link href = "/admin-pages/adminarchieve">Proceed</Link></button>
                </div>
            </div>

            <div className = "flex justify-start mb-7">
                <div className = "bg-white border-l-8 border-red-600 border-t-2 border-b-2 border-r-2 p-4 ml-32 pr-80">
                    <div>
                        <p className = "text-xl font-sans font-semibold text-left mt-7 mb-1">
                            Announcement 2
                            <button className = "">
                                <svg className="h-10 w-10 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
                            </button>
                        </p>
                        <p className = "text-lg font-sans text-left mt-2 mb-5">April 14, 2023</p>
                    </div>
                </div>
            </div>

            <div className = "flex justify-start mb-7">
                <div className = "bg-white border-l-8 border-blue-600 border-t-2 border-b-2 border-r-2 p-4 ml-32 pr-80">
                    <div>
                        <p className = "text-xl font-sans font-semibold text-left mt-7 mb-1">
                            Announcement 3
                            <button className = "">
                                <svg className="h-10 w-10 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
                            </button>
                        </p>
                        <p className = "text-lg font-sans text-left mt-2 mb-5">April 14, 2023</p>
                    </div>
                </div>
            </div>

            <div className = "flex justify-start mb-7">
                <div className = "bg-white border-l-8 border-red-600 border-t-2 border-b-2 border-r-2 p-4 ml-32 pr-80">
                    <div>
                        <p className = "text-xl font-sans font-semibold text-left mt-7 mb-1">
                            Announcement 4
                            <button className = "">
                                <svg className="h-10 w-10 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
                            </button>
                        </p>
                        <p className = "text-lg font-sans text-left mt-2 mb-5">April 14, 2023</p>
                    </div>
                </div>
            </div>

            <div className = "flex justify-start mb-7">
                <div className = "bg-white border-l-8 border-blue-600 border-t-2 border-b-2 border-r-2 p-4 ml-32 pr-80">
                    <div>
                        <p className = "text-xl font-sans font-semibold text-left mt-7 mb-1">
                            Announcement 5
                            <button className = "">
                                <svg className="h-10 w-10 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
                            </button>
                        </p>
                        <p className = "text-lg font-sans text-left mt-2 mb-5">April 14, 2023</p>
                    </div>
                </div>
            </div>
        </main>
    );
}