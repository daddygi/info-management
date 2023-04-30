import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Button from "../components/LogoutButton";
import Link from "next/link";

export default function UserHome() {

  return (
    <main>
      <nav>
        <Header />
      </nav>
      <div className="mt-2 ml-2 flex">
        <Button />
        <p className = "absolute right-0 mr-2">Sample, Sample S.</p>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <Image
          className="h-auto max-w-full rounded-full"
          src="/images/tempB.png"
          alt="temp"
          width={200}
          height={200}
        />
        <div>
          <a
            href = "/userviewprof"
            className="border-2 border-blue-500 text-blue-500 rounded-full px-11 py-2 mt-2 mb-3 inline-block font semibold hover:bg-blue-500 hover:text-white"
          >
            View Profile
          </a>
        </div>
        <div>
          <a
            href="/usereditprofile"
            className="border-2 border-blue-500 text-blue-500 rounded-full px-12 py-2 mt-2 inline-block font semibold hover:bg-blue-500 hover:text-white mb-3"
          >
            Edit Profile
          </a>
        </div>
      </div>
    </main>
  );
}
