"use client";
import { useState, useEffect, useRef } from "react";

const images = [
    'images/hall.jpg',
];

const UserCarousel: React.FC = () =>{
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const slideRef = useRef<HTMLDivElement>(null);

    useEffect(() =>{
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if(slideRef.current){
            slideRef.current.style.transform = `translateX(-${currentImageIndex * slideRef.current.offsetWidth}px)`;
        }
    }, [currentImageIndex]);

    return (
        <div className = "w-full overflow-hidden">
            <div ref = {slideRef} className = "flex transition-tranform duration-500 ease-in-out" style = {{width: `${images.length * 100}%`}}>
                {images.map((imageUrl, index) =>(
                    <div key = {imageUrl} className = "w-full" style = {{flex: `0 0 ${100/ images.length}%`}}>
                        <img src = {imageUrl} alt = {`Slide ${index + 1}`} className = "w-full h-full object-contain" />
                    </div>
                ))}
            </div>
            <div className = "flex justify-center mt-2">
                {images.map((_, index) => (
                    <div key = {index} className = {`w-3 h-3 mx-1 rounded-full ${index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-500'}`} />
                ))}
            </div>
        </div>
    );
};

export default UserCarousel;