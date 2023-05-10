"use client";
import React, {useState, useEffect } from "react";
import Header from "../components/Header";
import Button from "../components/LogoutButton";
import Link from "next/link";

export default function Admin() {

  const [currentTimeDate, setTimeDate] = useState(new Date());
  const [Mounted, setMounted] = useState(false);

  useEffect(() =>{
    setMounted(true);
    const IntervalID = setInterval(() => { setTimeDate(new Date());
    }, 1000);

    return () => clearInterval(IntervalID);
  })

  const CurrentDate = currentTimeDate.toLocaleDateString();
  const CurrentTime = currentTimeDate.toLocaleTimeString();

  return (
    <main>
      <nav>
        <Header />
      </nav>
      <div className="mt-4 ml-3 mb-3 flex">
        <Button />
        <div className = "mb-4 font-sans absolute right-0 mr-4 text-center">
          {Mounted && (<p>Time: {CurrentTime} Date: {CurrentDate}</p>)}
          <p>Administrator</p>
        </div>
      </div>
      {/* dashboard */}
      <div className="flex items-center justify-between pt-20">
        <div className = "justify-center flex-col flex items-center top-0 ml-10">
          <svg className="h-16 w-16 text-blue-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
          </svg>

          <Link href = "/admin-pages/addinhabitants">
            <button
              className="border-2 border-blue-500 text-blue-500 rounded-full px-12 py-2 inline-flex font semibold hover:bg-blue-500 hover:text-white"
            >
              Add Inhabitants
            </button>
          </Link>
        </div>

        <div className = "flex justify-center flex-col items-center top-0">
          <svg className="h-16 w-16 text-blue-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>

          <Link href = "/admin-pages/inhabitants">
          <button
            className="border-2 border-blue-500 text-blue-500 rounded-full px-12 py-2 inline-block font semibold hover:bg-blue-500 hover:text-white"
          >
            Inhabitants
          </button>
          </Link>
        </div>
        
        <div className = "flex justify-center flex-col items-center top-0 mr-10">
        <svg className="h-16 w-16 text-blue-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="21 8 21 21 3 21 3 8" />  
          <rect x="1" y="3" width="22" height="5" />  
          <line x1="10" y1="12" x2="14" y2="12" />
        </svg>

          <button
            className="border-2 border-blue-500 text-blue-500 rounded-full px-12 py-2 inline-block font semibold hover:bg-blue-500 hover:text-white"
          >
            <Link href = "/admin-pages/benefits">Benefits</Link>
          </button>
        </div>
      </div>

      <div className = "flex items-center justify-between pt-36 pb-10">
        <div className = "flex justify-center flex-col items-center top-24 left-20 pl-80">
            <svg className="h-16 w-16 text-blue-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>
            </svg>

            <button
              className="border-2 border-blue-500 text-blue-500 rounded-full px-12 py-2 inline-block font semibold hover:bg-blue-500 hover:text-white"
            >
              <Link href = "/admin-pages/announcements">Announcements</Link>
            </button>
        </div>

        <div className = "flex justify-center flex-col items-center top-24 right-24 pr-64">
          <svg className="h-16 w-16 text-blue-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>

          <button
            className="border-2 border-blue-500 text-blue-500 rounded-full px-12 py-2 inline-block font semibold hover:bg-blue-500 hover:text-white"
          >
            <Link href = "/admin-pages/contactdevs">Contact Developers</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
