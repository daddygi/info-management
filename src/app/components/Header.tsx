import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header>
      <nav className="bg-blue-500 border-200 bg-opacity-50  px-4 lg:px-6 py-2.5 shadow-2xl ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <Image
              src="/images/tempB.png"
              alt="bgrylogo"
              width={100}
              height={100}
            />
          </div>
          <div className="font-sans antialiased font-semibold text-center align-middle">
            <div className = "text-2xl my-4">
              <h1>Republic of the Philippines</h1>
              <h1>Office of the Barangay Chairman</h1>
              <h2>Barangay 391, Zone 40, District III</h2>
            </div>

            <div className = "text-base">
              <h3>Address: 1064 Bilibid Viejo St., Corner R. Hidalgo St., Quiapo, Manila</h3>
              <h5>Tel No. - 828-777-90</h5>
            </div>

          </div>

          <div>
            <Image
              src="/images/material3.png"
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
