import React from 'react';
import Link from 'next/link';

function NavBarAdmin(){
    return (
      <nav className="bg-blue-400 bg-opacity-70 border-t-4 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:block sm:ml-6">

                <Link href="/admin-home">
                  <button className="text-black hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-lg font-sans font-semibold">
                    DASHBOARD
                  </button>
                </Link>

                <Link href="/admin-pages/announcements">
                  <button className="text-black hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-lg font-sans font-semibold">
                    ANNOUNCEMENTS
                  </button>
                </Link>

                <Link href="/admin-pages/inhabitantstable">
                  <button className="text-black hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-lg font-sans font-semibold">
                    INHABITANTS
                  </button>
                </Link>

                <Link href="/admin-pages/addinhabitants">
                  <button className="text-black hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-lg font-sans font-semibold">
                    ADD INHABITANTS
                  </button>
                </Link>

                <Link href="/admin-pages/contactdevs">
                  <button className="text-black hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-lg font-sans font-semibold">
                    CONTACT DEVELOPERS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
export default NavBarAdmin;