import React from 'react';
import Header from '../../components/Header';
import NavBarAdmin from '@/app/components/NavBarAdmin';
import Link from 'next/link';

export default function AdminCompose(){
    return(
        <main>
            <nav><Header /> <NavBarAdmin /></nav>
            <div className = "flex mt-3 mb-2">
                <button className = "ml-2 font-sans bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"><Link href = "/admin-pages/announcements">Back</Link></button>
            </div>
            <div className = "flex justify-start ml-4 mt-5">
                <svg className="h-10 w-10 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />  <rect x="9" y="3" width="6" height="4" rx="2" />  <line x1="9" y1="12" x2="9.01" y2="12" />  <line x1="13" y1="12" x2="15" y2="12" />  <line x1="9" y1="16" x2="9.01" y2="16" />  <line x1="13" y1="16" x2="15" y2="16" /></svg>
                <p className = "font-sans text-2xl font-semibold text-start">New Announcement</p>
            </div>
            <div className = "border-black border-b-2 w-full"></div>

            <div className = "border-black border-b-2 border-t-2 py-3 bg-gray-200 flex">
                <p className = "font-sans text-lg ml-3">Subject to: </p>
                <div className = "absolute right-0 mr-4 flex">
                    <p className = "flex mr-3">
                        <label>
                            <input type = "radio" name = "inhabitants" value = "allinhabitant"></input>
                            All Inhabitants
                        </label>
                    </p>

                    <p className = "flex mr-3">
                        <label>
                            <input type = "radio" name = "inhabitants" value = "permanentinhabitant"></input>
                            Permanent Inhabitants
                        </label>
                    </p>

                    <p className = "flex mr-3">
                        <label>
                            <input type = "radio" name = "inhabitants" value = "temporaryinhabitant"></input>
                            Temporary Inhabitants
                        </label>
                    </p>
                </div>
            </div>

            <div className = "border-black border-b-2 w-full"></div>
            <div className = "flex">
                <div className = "bg-gray-200 font-sans text-lg border-b-2 border-t-2 border-r-2 border-l-2 p-3 px-20">
                    Subject:
                </div>
                <input type = "text" className = "mt-1 h-12 w-full"></input>
            </div>

            <div className = "border-black border-b-2 w-full"></div>
            
            <div className = "bg-gray-200 font-sans text-lg border-b-2 border-t-2 border-r-2 border-l-2">
                <p className = "pt-10 pb-5 px-20 font-sans text-lg ">Message:</p>
                <div className = "pt-5 pb-10 px-20 flex">
                    
                    <button id = "bold" className = "pr-5">
                        <svg className="h-6 w-6 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6z" />  <path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7" /></svg>
                    </button>

                    <button id = "italic" className = "pr-5">
                        <svg className="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="19" y1="4" x2="10" y2="4" />  <line x1="14" y1="20" x2="5" y2="20" />  <line x1="15" y1="4" x2="9" y2="20" /></svg>
                    </button>

                    <button id = "underline" className = "pr-5">
                        <svg className="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />  <line x1="4" y1="21" x2="20" y2="21" /></svg>
                    </button>

                    <button id = "bullet" className = "pr-5">
                        <svg className="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="8" y1="6" x2="21" y2="6" />  <line x1="8" y1="12" x2="21" y2="12" />  <line x1="8" y1="18" x2="21" y2="18" />  <line x1="3" y1="6" x2="3.01" y2="6" />  <line x1="3" y1="12" x2="3.01" y2="12" />  <line x1="3" y1="18" x2="3.01" y2="18" /></svg>
                    </button>

                    <button id = "number" className = "pr-5">
                        <svg className="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="8" y1="6" x2="21" y2="6" />  <line x1="8" y1="12" x2="21" y2="12" />  <line x1="8" y1="18" x2="21" y2="18" />  <line x1="3" y1="6" x2="3.01" y2="6" />  <line x1="3" y1="12" x2="3.01" y2="12" />  <line x1="3" y1="18" x2="3.01" y2="18" /></svg>
                    </button>

                    <button id = "start" className = "pr-5">
                        <svg className="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="17" y1="10" x2="3" y2="10" />  <line x1="21" y1="6" x2="3" y2="6" />  <line x1="21" y1="14" x2="3" y2="14" />  <line x1="17" y1="18" x2="3" y2="18" /></svg>
                    </button>

                    <button id = "center" className = "pr-5">
                        <svg className="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="18" y1="10" x2="6" y2="10" />  <line x1="21" y1="6" x2="3" y2="6" />  <line x1="21" y1="14" x2="3" y2="14" />  <line x1="18" y1="18" x2="6" y2="18" /></svg>
                    </button>

                    <button id = "end" className = "pr-5">
                        <svg className="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="21" y1="10" x2="7" y2="10" />  <line x1="21" y1="6" x2="3" y2="6" />  <line x1="21" y1="14" x2="3" y2="14" />  <line x1="21" y1="18" x2="7" y2="18" /></svg>
                    </button>

                    <button id = "file" className = "pr-5">
                        <svg className="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                    </button>

                </div>
            </div>

            <div className = "border-black border-b-2 w-full"></div>
            <div className = "mb-36">
                <div contentEditable = "true" className = "w-full h-64 border border-gray-300 p-2 text-lg">New Announcement...</div>
            </div>
            
            <div className = "border-black border-b-2 w-full"></div>
            <div className = "relative">
                <button className = "mb-4 mr-4 absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-700 text-white px-4 py-3 rounded-md">Announce</button>
            </div>
        </main>
    );
}