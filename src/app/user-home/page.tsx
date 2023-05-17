"use client";
import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Button from "../components/LogoutButton";
import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import NavBarUser from "../components/NavBarUser";
import UserCarousel from "../components/UserCarousel";


type Props = {
    firstname: string;
    lastname: string;
    middleinitial: string;
}

const UserHome: NextPage<Props> = ({ firstname, lastname, middleinitial }) => {

  const router = useRouter();

  return (
    <main>
      <nav> <Header /> <NavBarUser /> </nav>
      <div className = "bg-blue-500 border-200 bg-opacity-50 px-4 lg:px-6 py-2.5 shadow-2xl border-black border-b-2">
        <p className = "text-lg font-sans font-bold">Announcements</p>
      </div>

      <div><UserCarousel /></div>

      <div className = "bg-cover bg-center mt-2" style={{ backgroundImage: `url('/images/brgy-1.png')`, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
        <div className = "flex items-start">
          <div className = "flex flex-col">
            <div className="text-black text-4xl font-bold ml-56 mt-36">Barangay 391 Zone 40 III, Manila</div>
      
            <div className="text-black text-lg font-bold ml-64  ">
              <p>Located at 1064 Bilibid Viejo St., Corner R. Hidalgo, Quiapo, Manila</p>
              <p>82877790</p>
            </div>
        
            <div className="text-black text-4xl font-bold flex ml-56 mt-36">Introduction</div>
            <div className="text-black text-lg font-bold ml-64">(text)</div>

            <div className="text-black text-4xl font-bold ml-56 mt-36">About Barangay 391, Manila</div>
            <div className="text-black text-lg font-bold ml-64 mb-36">(text)</div>
      
            <div className="absolute right-0 ml-4 mt-48 mr-36 flex items-center">
              <img className = "h-auto max-w-full rounded-full" src = "/images/tempB.png" width = {300} height = {300} />
            </div>
          </div>
        </div>
      </div>

      <div className = "mt-3 mb-3 text-center font-sans font-semibold text-3xl">Barangay Official List</div>
      
      <div className = "mt-10 mb-10 flex flex-col">
        <div className = "flex justify-center items-center">
          <div className = "font-sans text-xl text-center grid grid-cols-2 gap-80 content-center items-center justify-center mb-4 mt-6">
            <div>
              <img className = "" src = "/images/user.png" width = {200} height = {200} />
              <p>Cecilio T. Mateo</p>
              <p>Punong Barangay</p>
            </div>
            
            <div>
              <img className = "" src = "/images/user.png" width = {200} height = {200} />
              <p>Kristine Joy C. Dala</p>
              <p>SK Chairperson</p>
            </div>
          </div>
        </div>

        <div className = "flex justify-center items-center mt-3 mb-3">
          <p className = "font-sans font-bold text-center text-4xl">Barangay Kagawad</p>
        </div>

        <div className = "font-sans text-xl text-center content-center items-center justify-center mb-8 mt-11">
          <div className = "font-sans text-xl grid grid-cols-2">
            <p>Enrique A. Galima</p>
            <p>Ronaldo T. Bacus</p>
            <p>Venus C. Aquino</p>
            <p>Raymond M. Galvan</p>
            <p>Wess D. Pacubas</p>
            <p>Arnel B. Macabulos</p>
            <p>Albert San Juan</p>
          </div>

          <div className = "mt-10 mb-5">
            <p>Jennifer R. Calisin</p>
            <p>Barangay Secretary</p>
            <p className = "mt-4">Margarito F. Macaranas</p>
            <p>Barangay Treasurer</p>
            <p className = "mt-4">Conrado O. Catbagan Jr.</p>
            <p>EX-O</p>
          </div>
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