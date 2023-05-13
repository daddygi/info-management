import React from 'react';
import Header from '../../components/Header';
import Link from 'next/link';

export default function Benefits(){

    return(
        <main>
            <nav><Header /></nav>
            <div className = "flex mt-5">
                <button className = "font-sans ml-2"><Link href = "/admin-home">Back</Link></button>
            </div>
        </main>
    );
}