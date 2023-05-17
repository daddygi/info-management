import React from 'react';
import Link from 'next/link';
import Button from './LogoutButton';

function NavBarUser(){

    return(
        <nav className = "bg-blue-400 bg-opacity-70 border-t-2 border-b-2 border-black">
            <div className = "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-center">
                <div className = "relative flex items-center justify-between h-16">
                    <div className = "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className = "hidden sm:block sm:ml-6">

                            <Link href = "/user-home">
                                <button className = "text-black hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-lg font-sans font-semibold">HOME</button>
                            </Link>

                            <Link href = "/user-pages/UserAnnouncement">
                                <button className = "text-black hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-lg font-sans font-semibold">ANNOUNCEMENTS</button>
                            </Link>

                            <Link href = "/user-pages/userviewprof">
                                <button className = "text-black hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-lg font-sans font-semibold">VIEW PROFILE</button>
                            </Link>

                            <Link href = "/user-pages/usereditprofile">
                                <button className = "text-black hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-lg font-sans font-semibold">EDIT PROFILE</button>
                            </Link>

                            <Link href = "/">
                                <button className = "text-black hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-lg font-sans font-semibold ml-24">LOGOUT</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBarUser;