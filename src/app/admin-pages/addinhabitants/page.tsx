import React from 'react';
import Header from '../../components/Header';
import Link from 'next/link';

export default function AddInhabitants(){

    return(
        <main>
            <nav><Header /></nav>
            <div className = "flex mt-5">
                <button className = "ml-2 font-sans"><Link href = "/admin-home">Back</Link></button>
            </div>
            <div>
                <button className = "flex mt-5 ml-5 font-sans font-semibold text-lg">
                    Add Inhabitants
                    <svg className = "h-6 w-6 ml-2 mt-0.5 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                        <circle cx="12" cy="12" r="10" />  
                        <line x1="12" y1="8" x2="12" y2="16" />  
                        <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
                </button>
            </div>
        </main>
    );
}