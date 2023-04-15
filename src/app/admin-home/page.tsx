import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Button from "../components/LogoutButton";

export default function Admin() {
  return (
    <main>
      <nav>
        <Header />
      </nav>
      <div className="mt-2 ml-3">
        <Button />
      </div>
      {/* dashboard */}
      <div className="flex items-center justify-between pt-40">
        <a
          href="#"
          className=" ml-20 border-2 border-blue-500 text-blue-500 rounded-full px-12 py-2 inline-block font semibold hover:bg-blue-500 hover:text-white"
        >
          Add Inhabitants
        </a>
        <a
          href="#"
          className="border-2 border-blue-500 text-blue-500 rounded-full px-12 py-2 inline-block font semibold hover:bg-blue-500 hover:text-white"
        >
          Inhabitants
        </a>
        <a
          href="#"
          className="mr-20 border-2 border-blue-500 text-blue-500 rounded-full px-12 py-2 inline-block font semibold hover:bg-blue-500 hover:text-white"
        >
          Contact Developers
        </a>
      </div>
    </main>
  );
}
