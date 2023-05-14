import React from "react";
import Header from "./Header";
import Link from 'next/link';
import "../Styles/shapes.css";
import { Router } from "next/router";



function announcement (){
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
                Announcements</label>

                 
                    
            
            <div className="line">
            </div>
            <div className="rectangle ">
            <div className="anntitle">
                <a href="#">Announcement Title</a>
            </div>
           <div className="date">
          <h1>Date</h1>

               <button type="button" className="text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-60 absolute bottom-8">
              <svg className="h-8 w-8 text-red-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
               </svg>
              <span className="sr-only">Icon description</span>
               </button>

           </div>

           
          </div>

          <div className="rectangle2 ">
            <div className="anntitle2">
                <a href="#">Announcement Title</a>
            </div>
           <div className="date">
            <h1>Date</h1>

            <div className="btn icon">
              <button type="button" className="text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-60 absolute bottom-8">
              <svg className="h-8 w-8 text-red-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
               </svg>
              <span className="sr-only">Icon description</span>
            </button>
            </div>
           </div>
          </div>

          <div className="rectangle3 ">
            <div className="anntitle">
                <a href="#">Announcement Title</a>
            </div>
           <div className="date">
            <h1>Date</h1>
           
              <div className="btn icon">
              <button type="button" className="text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-60 absolute bottom-8">
              <svg className="h-8 w-8 text-red-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
               </svg>
              <span className="sr-only">Icon description</span>
            </button>

           </div>
          </div>
          </div>

          <div className="rectangle4 ">
            <div className="anntitle2">
                <a href="#">Announcement Title</a>
            </div>
           <div className="date">
            <h1>Date</h1>
           <div className="Line"></div>

            <div className="btn icon">
              <button type="button" className="text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-60 absolute bottom-8">
              <svg className="h-8 w-8 text-red-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
               </svg>
              <span className="sr-only">Icon description</span>
            </button>
           </div>
          </div>
        </div>
          <div className="square  mb-60   border-200   px-4 lg:px-6 py-2.5 shadow-2xl ">
           <div className=" archives  mr - 40 "> 
          
           <h1> <u> Archives </u> </h1>
          <div className="button">
        <button className = "absolute right-640 absolute top-20  font-sans bg-blue-500  text-white text-center flex items-center px-3  rounded font-bold   ">
            <Link href = "/">Proceed</Link></button>
                    
          
          
          </div>

           </div>
          </div>

          

          
    

        
        </main>
    )
}

export default announcement;