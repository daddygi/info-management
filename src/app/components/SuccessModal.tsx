import React from 'react';

interface SuccessModalProps{
    message1: string;
    message2: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ message1, message2 }) => {
3
    const handleLoginRoute = () =>{
        window.location.href = "/";
    };

    return(
        <div className = "fixed inset-0 z-50 flex items-center justify-center">
            <div className = "fixed inset-0 bg-gray-500 opacity-75"></div>
            <div className = "relative bg-white rounded-lg w-80 max-w-md mx-auto p-6">
                <div className = "mt-4 mb-8 flex items-center justify-center">
                    <svg className="h-16 w-16 text-green-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                </div>
                <p className = "mt-3 text-gray-700 flex items-center justify-center">{message1}</p>
                <p className = "mt-1 text-gray-700 flex items-center justify-center">{message2}</p>
                <div className = "mt-10 mb-4 flex justify-center">
                    <button className = "px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    onClick = {handleLoginRoute}>
                        Proceed to the Login Page
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;