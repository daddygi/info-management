"use client";
import React, {useState, useEffect } from "react";
import Header from "../components/Header";
import NavBarAdmin from "../components/NavBarAdmin";
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
        <NavBarAdmin />
      </nav>
      <div className="mt-4 ml-3 mb-3 flex border-b-4 border-black">
        <Button />
        <div className = "mb-4 font-sans absolute right-0 mr-4 text-center">
          {Mounted && (<p>{CurrentDate} - {CurrentTime}</p>)}
          <p>Administrator</p>
        </div>
      </div>
      <h1 className = "mt-6 ml-3 mb-3 font-sans font-bold text-2xl">DASHBOARD</h1>
      <div className = "flex mt-44 space-x-11 justify-center items-center">
        <div className = "mr-20 box-content border-transparent px-4 rounded-md absolute bg-violet-300 flex" style ={{left: '2rem'}}>
          <svg className = "mt-48 mb-6 h-12 w-12 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          <p className = "mt-52">Total Population</p>
          <div className = "items-center text-center mt-6 ml-10 font-sans font-bold text-2xl">
            <p>POPULATION: </p>
            <p>Count</p>
          </div>
        </div>

        <div className = "mr-20 box-content border-transparent px-4 rounded-md absolute bg-blue-300 flex" style = {{left: '27rem'}}>
          <svg className = "mt-48 mb-6 h-12 w-12 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          <p className = "mt-52">Total Male</p>
          <div className = "items-center text-center mt-6 ml-44 font-sans font-bold text-2xl">
            <p>MALE: </p>
            <p>Count</p>
          </div>
        </div>

        <div className = "mr-20 box-content border-transparent px-4 rounded-md absolute bg-red-300 flex" style = {{left: '55rem'}}>
          <svg className = "mt-48 mb-6 h-12 w-12 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          <p className = "mt-52">Total Female</p>
          <div className = "items-center text-center mt-6 ml-32 font-sans font-bold text-2xl">
            <p>FEMALE: </p>
            <p>Count</p>
          </div>
        </div>
      </div>
      <div className = "flex mt-72 space-x-15 justify-center items-center">
        <div className = "mr-20 box-content border-transparent px-4 rounded-md absolute bg-green-300 flex" style = {{left: '4rem' ,top: '45rem'}}>
            <svg className = "mt-48 mb-6 h-12 w-12 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            <p className = "mt-52">Total Temporary Resident</p>
            <div className = "items-center text-center mt-6 ml-0 font-sans font-bold text-2xl">
              <p>TEMPORARY RESIDENT: </p>
              <p>Count</p>
            </div>
          </div>

          <div className = "mr-20 box-content border-transparent px-4 rounded-md absolute bg-yellow-400 bg-opacity-70 flex" style = {{left: '47rem', top:'45rem'}}>
            <svg className = "mt-48 mb-6 h-12 w-12 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            <p className = "mt-52">Total Permanent Resident</p>
            <div className = "items-center text-center mt-6 ml-0 font-sans font-bold text-2xl">
              <p>PERMANENT RESIDENT: </p>
              <p>Count</p>
            </div>
          </div>

      </div>
    </main>
  );
}
