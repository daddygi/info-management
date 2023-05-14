import React from "react";
import Header from "../components/Header";
import Link from 'next/link';
import "../Styles/main.css";
import "../Styles/shapes.css";



function app (){
    return(
        <main>
          <nav> <Header /> </nav>
          <nav className="bg-blue-300 border-200 bg-opacity-50  px-4 lg:px-6 py-2.5 shadow-2xl ">
            < a href = "/#"> HOME</a>
            < a href = "/#"> ANNOUNCEMENTS</a>
            < a href = "/#"> VIEW PROFILE</a>
            < a href = "/#"> EDIT PROFILE</a>
            </nav>
            <div className = "mt-4 flex">
                    <button className = "ml-4 font-sans bg-blue-600  text-white text-center flex items-center px-8 py-2 rounded font-bold mb-2 "><Link href = "/">BACK</Link></button>
                    </div>
                    <label className="block text-black text-6xl py-6 font-bold ml-10 mb-2">
                Archives</label>

                <div className="line">
            </div>
            <div className="rectangle ">
            <div className="anntitle">
                <a href="#">Announcement Title</a>
            </div>
           <div className="date">
            <h1>Date</h1>
           </div>
          </div>

          <div className="rectangle2 ">
            <div className="anntitle2">
                <a href="#">Announcement Title</a>
            </div>
           <div className="date">
            <h1>Date</h1>
           </div>
          </div>

          <div className="rectangle3 ">
            <div className="anntitle">
                <a href="#">Announcement Title</a>
            </div>
           <div className="date">
            <h1>Date</h1>
           </div>
          </div>

          <div className="rectangle4 ">
            <div className="anntitle2">
                <a href="#">Announcement Title</a>
            </div>
           <div className="date">
            <h1>Date</h1>
           </div>
          </div>

          <div className="square">
           <div className="archives"> 
           <h1>Archives</h1>
           </div>
          </div>

          <div className="line2">

          </div>

          <div className="datetext">
        <h1> ARCHIVES</h1>
          
          
          </div>
    
            
          
          </main>
    )
}
export default app;