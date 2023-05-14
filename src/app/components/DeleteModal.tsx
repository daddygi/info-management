import React from 'react';

type DeleteModalProps = {
    isOpen: boolean;
    onContinue: () => void;
    onCancel: () => void;
    message: string;
};

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onContinue, onCancel, message}) => {
    if(!isOpen){
        return null;
    }

    return(
        <div className = {`${ isOpen ? "fixed z-10 inset-0 overflow-y-auto" : "opacity-0 pointer-events-none"} fixed inset-0 z-50 flex itmes-center justify-center`}>
            <div className = "flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className = "fixed inset-0 transition-opacity" aria-hidden = "true" onClick = {onCancel}>
                    <div className = "absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className = "hidden sm:inline-block sm:aligh-middle sm:h-screen" aria-hidden = "true"></span>
                <div className = "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role = "dialog" aria-modal = "true" aria-labelledby= "modal-headline">
                    <div className = "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" id = "modal-headline">
                        <h2 className = "text-center text-lg leading-6 font-medium text-black">{message}</h2>
                    </div>
                    <div className = "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button className = "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-sans text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
                        type = "button" onClick = {onContinue}>Yes</button>
                        <button className = "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-sans text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
                        type = "button" onClick = {onCancel}>No</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;