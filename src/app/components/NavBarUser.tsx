import React from 'react';
import Link from 'next/link';
import Button from './LogoutButton';

const NavBarUser = () => {

    return(
        <nav className = "bg-blue-400 bg-opacity-70 border-t-2 border-b-2 border-black">
            <div className = "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-center">
                <div className = "relative flex items-center justify-between h-16">
                    <div className = "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className = "hidden sm:block sm:ml-6">

                            <Link href = "/admin-login">
                                <button className = "text-black hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-lg font-sans font-semibold">ADMIN</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBarUser;