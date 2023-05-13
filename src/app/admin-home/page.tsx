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
      <div className="mt-4 ml-3 mb-3 flex">
        <Button />
        <div className = "mb-4 font-sans absolute right-0 mr-4 text-center">
          {Mounted && (<p>{CurrentDate} - {CurrentTime}</p>)}
          <p>Administrator</p>
        </div>
      </div>
    </main>
  );
}
