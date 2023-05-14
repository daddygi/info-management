import React from 'react';
import Header from '../../components/Header';
import Link from 'next/link';

export default function Inhabitants(){

    return(
        <main>
            <nav><Header /></nav>
            <div className = "mt-5">
                <div className = "font-sans ml-4 flex">
                    <button className = "font-sans ml-2"><Link href = "/admin-home">Back</Link></button>
                    <div className = "mb-4 font-sans absolute right-0 mr-4 text-center">
                        <p>Time: Date:</p>
                        <p>Administrator</p>
                    </div>
                </div>
                
                <div className = "font-sans font-semibold text-lg flex justify-center items-center mb-4 mt-3">INHABITANTS</div>

                <div className = "mt-10 mb-4 flex border-gray-600">
                    <p className = "left-0 ml-4 text-center font-sans font-semibold mr-40">View Table</p>
                    <button className = "pl-50 ml-45">
                        <svg className="h-12 w-12 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"/>
                        </svg>
                    </button>
                </div>

                <div className = "mt-5 flex justify-center items-center">
                    <table className = "min-w-full border-collapse block md:table">
                        <thead className = "block md:table-header-group">
                            <tr className = "border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative">
                                <th className = "font-sans font-bold md:border md:border-grey-500 text-center block md:table-cell">No.</th>
                                <th className = "font-sans font-bold md:border md:border-grey-500 text-center block md:table-cell">Date Registered</th>
                                <th className = "font-sans font-bold md:border md:border-grey-500 text-center block md:table-cell">Suffix, Lastname, Firstname, Middle Initial</th>
                                <th className = "font-sans font-bold md:border md:border-grey-500 text-center block md:table-cell">Age</th>
                                <th className = "font-sans font-bold md:border md:border-grey-500 text-center block md:table-cell">Resident #</th>
                                <th className = "font-sans font-bold md:border md:border-grey-500 text-center block md:table-cell">Address</th>
                                <th className = "font-sans font-bold md:border md:border-grey-500 text-center block md:table-cell">Civil Status</th>
                                <th className = "font-sans font-bold md:border md:border-grey-500 text-center block md:table-cell">Occupation</th>
                                <th className = "font-sans font-bold md:border md:border-grey-500 text-center block md:table-cell">Gender</th>
                                <th className = "font-sans font-bold md:border md:border-grey-500 text-center block md:table-cell">Birthdate</th>
                                <th className = "font-sans font-bold md:border md:border-grey-500 text-center block md:table-cell">Email Address</th>
                                <th className = "font-sans font-bold md:border md:border-grey-500 text-center block md:table-cell">Contact Number</th>
                                <th className = "font-sans font-bold md:border md:border-grey-500 text-center block md:table-cell">Update Inhabitant</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className = "border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative">
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}