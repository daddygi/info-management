import React from "react";
import Header from "../components/Header";
import Link from 'next/link';
import "../Styles/main.css";
import "../Styles/shapes.css";



function app (){
    return(
        <main>
          <nav> <Header /> </nav>
          <nav className="bg-blue-300 border-200 bg-opacity-50  px-4 lg:px-6 py-2.5 shadow-2xl ">
            < a href = "/#"> HOME</a>
            < a href = "/#"> ANNOUNCEMENTS</a>
            < a href = "/#"> VIEW PROFILE</a>
            < a href = "/#"> EDIT PROFILE</a>
            </nav>
            <div className = "mt-4 flex">
                    <button className = "ml-4 font-sans bg-blue-600  text-white text-center flex items-center px-8 py-2 rounded font-bold mb-2 "><Link href = "/">BACK</Link></button>
                    </div>
                    <label className="block text-black text-6xl py-6 font-bold ml-10 mb-2">
                Announcement Title</label>
                <label className="static text-black text-3xl py-6  ml-10 mt-12">
                Date Posted: May 12, 2023 at 08:34 PM</label>
                <div className="linefunc">
            </div>

            <div className="details">
              <p>Text.....................................................................................................................................................................................................................<br></br>
              ............................................................................................................................................................................................................................<br></br>
              ............................................................................................................................................................................................................................<br></br>
              ............................................................................................................................................................................................................................<br></br>
              ............................................................................................................................................................................................................................<br></br>
              ............................................................................................................................................................................................................................<br></br>
              ............................................................................................................................................................................................................................<br></br>
          
              </p>
            </div>

            <div className="square2">
           <div className="news"> 
           <h1>More News</h1>
           </div>
          </div>

          <div className="newsline">
          </div>





          <div className="datetext1">
          <a href="">Announcement Title</a> </div>
          <div className="dt1"> <h1> Date posted: May 08, 2023</h1> </div>
          <div className="l1"></div>





         <div className="datetext2">
         <a href="">Announcement Title</a></div>
         <div className="dt2"> <h1> Date posted: May 06, 2023</h1></div>
         <div className="l2"></div>





         <div className="datetext3">
         <a href="">Announcement Title</a></div>
         <div className="dt3"> <h1> Date posted: May 02, 2023</h1> </div>
         <div className="l3"></div>
          
          

                


                </main>

)
}


    



interface ImageButtonProps {
  src: string;
  alt: string;
  onClick?: () => void;
}

const ImageButton: React.FC<ImageButtonProps> = ({ src, alt, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      <img src={src} alt={alt} />
    </button>
   
  );
};

export default ImageButton;
