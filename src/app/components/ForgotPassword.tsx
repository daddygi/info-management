import React from 'react';

interface ForgotPasswordProps {

    header: string;
    header2: string;
    message: string;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ header, header2, message }) =>{

    const handleLoginRoute = () =>{
        window.location.href = "/";
    }

    return(
        <div className = "fixed inset-0 z-50 flex items-center justify-center">
            <div className = "fixed inset-0 bg-gray-500 opacity-75"></div>
            <div className = "relative bg-white w-96 max-w-md mx-auto pb-24 mt-3 mb-3">
                <div className = "bg-blue-400 w-full max-w-md px-8 py-6 border-b-4 border-black items-center justify-between mb-4">
                    <p className = "text-center font-sans font-semibold text-lg">{header}</p>
                </div>
                <div className = " flex items-center justify-center">
                    <svg className="h-12 w-12 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                        <path stroke="none" d="M0 0h24v24H0z"/>  
                        <rect x="5" y="11" width="14" height="10" rx="2" />  
                        <circle cx="12" cy="16" r="1" />  <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                    </svg>
                </div>
                <p className = "mt-3 mb-6 text-black font-sans font-bold text-center">{header2}</p>
                <p className = "mt-1 mb-6 text-black font-sans text-center border-b-4 border-black ml-2 mr-2 justify-center">{message}</p>
                <div className = "flex bg-white">
                    <button className = "absolute left-0 ml-3 mt-4 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-sans font-semibold px-2 py-1 rounded-md"
                    onClick = {handleLoginRoute}>Return to Login</button>
                    <div className = "absolute right-0 text-center mr-2">
                        <p>Text</p>
                        <p>Text</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;