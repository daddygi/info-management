import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from "../components/Announcement"
import "../Styles/main.css";

function app(){

return (

      <React.Fragment>
      <Navbar/>
      </React.Fragment>

  );


}

export default app;