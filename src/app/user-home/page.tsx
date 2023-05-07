"use client";
import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Button from "../components/LogoutButton";
import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/navigation';
import Link from "next/link";


type Props = {
    firstname: string;
    lastname: string;
    middleinitial: string;
}

const UserHome: NextPage<Props> = ({ firstname, lastname, middleinitial }) => {

  const router = useRouter();

  return (
    <main>
      <nav>
        <Header />
      </nav>
      <div className="mt-2 ml-2 flex">
        <Button />
        <p className = "absolute right-0 mr-2">{`${lastname}, ${firstname} ${middleinitial}`}</p>
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
          <Link href = "/userviewprof">
            <button className = "border-2 border-blue-500 text-blue-500 rounded-full px-12 py-2 mt-2 inline-block font semibold hover:bg-blue-500 hover:text-white mb-3">
              View Profile
            </button>
          </Link>
        </div>

        <div>
          <Link href = "/usereditprofile">
            <button className = "border-2 border-blue-500 text-blue-500 rounded-full px-12 py-2 mt-2 inline-block font semibold hover:bg-blue-500 hover:text-white mb-3">
              Edit Profile
            </button>
          </Link>
        </div>

      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) =>{

  const { query } = context;
  const { firstname, middleinitial, lastname } = query as {
    firstname: string;
    lastname: string;
    middleinitial: string;
  }

  return{
    props: {
      firstname, 
      middleinitial, 
      lastname,
    },
  };
};

export default UserHome;