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
                <h2 className = "font-sans font-bold mr-2">Announcements</h2>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Compose</button>
            </div>
        </main>
    );
}