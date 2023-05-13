import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header>
      <nav className="bg-blue-500 border-200 bg-opacity-50  px-4 lg:px-6 py-2.5 shadow-2xl ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <Image
              src="/images/adu logo.png"
              alt="Adu Logo"
              width={100}
              height={100}
            />
          </div>
          <div className="font-sans text-2xl antialiased font-semibold text-center align-middle">
            <h2>Republic of the Philippines</h2>
            <h1>Office of the Barangay Chairman</h1>
            <h2>Barangay 391, Zone 40, District III, Manila</h2>
          </div>
          <div>
            <Image
              src="/images/tempB.png"
              alt="Barangay Logo"
              width={100}
              height={100}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
