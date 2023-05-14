import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';

export default function Announcements(){

    return(
        <main>
            <nav><Header /></nav>
            <div className = "flex mt-5">
                <button className = "font-sans ml-2"><Link href = "/admin-home">Back</Link></button>
            </div>
        </main>
    );
}