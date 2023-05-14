import React from 'react';

interface AnnouncementSentModalProps{
    isOpen: boolean;
    onClose: () => void;
    message: string;
}

const AnnouncementSentModal: React.FC<AnnouncementSentModalProps> = ({isOpen, onClose, message}) =>{

    if(!isOpen){
        return null;
    }
    return(
        <div className = "fixed inset-0 z-50 flex items-center justify-center">
            <div className = "fixed inset-0 bg-gray-500 opacity-75"></div>
            <div className = "relative bg-white rounded-lg w-80 max-w-md mx-auto p-6">
                <div className = "mt-4 mb-8 flex items-center justify-center">
                    <svg className="h-16 w-16 text-blue-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  
                        <polyline points="22,6 12,13 2,6" />
                    </svg>
                </div>
                <p className = "mt-3 text-gray-700 flex items-center justify-center text-center">{message}</p>
                <div className = "mt-10 mb-4 flex justify-center">
                    <button className = "px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    onClick = {onClose}>
                        Okay
                    </button>
                </div>
            </div>
        </div>
    );
}