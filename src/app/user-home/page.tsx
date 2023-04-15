import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Button from "../components/LogoutButton";

export default function UserHome() {
  return (
    <main>
      <nav>
        <Header />
      </nav>
      <div className="mt-2 ml-3">
        <Button />
      </div>
      <div className="flex flex-col items-center justify-center w-full px-20 pt-10">
        <Image
          className="h-auto max-w-full rounded-full"
          src="/images/temp id.jpg"
          alt="temp"
          width={300}
          height={100}
        />
        <p className="font-bold">Sample S. Sample</p>
        <div>
          <a
            href="#"
            className="border-2 border-blue-500 text-blue-500 rounded-full px-11 py-2 mt-5 inline-block font semibold hover:bg-blue-500 hover:text-white"
          >
            View Profile
          </a>
        </div>
        <div>
          <a
            href="#"
            className="border-2 border-blue-500 text-blue-500 rounded-full px-12 py-2 mt-2 inline-block font semibold hover:bg-blue-500 hover:text-white"
          >
            Edit Profile
          </a>
        </div>
      </div>
    </main>
  );
}
