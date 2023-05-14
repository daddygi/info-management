"use client";
import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Button from "../components/LogoutButton";
import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import "../Styles/main.css";
import "../Styles/userhome.css";


function app(){
  return (
    <main>
      <nav> <Header /> </nav>
          <nav className="bg-blue-300 border-200 bg-opacity-50  px-4 lg:px-6 py-2.5 shadow-2xl ">
            < a href = "/#"> HOME</a>
            < a href = "/#"> ANNOUNCEMENTS</a>
            < a href = "/#"> VIEW PROFILE</a>
            < a href = "/#"> EDIT PROFILE</a>
            </nav>
            <button className = "button "><Link href = "/">LOGOUT</Link></button>
        <body></body>
            <label className="block text-black text-5xl py-6 font-bold ml-10 mt-16">
                Announcements</label>
              
              <div className="bluerect"></div>
              
              
    </main>
  );
}


export default app;