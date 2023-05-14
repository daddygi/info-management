"use client";
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import NavBarAdmin from '../../components/NavBarAdmin';
import Link from 'next/link';
import DeleteModal from '../../components/DeleteModal';

interface Inhabitant {
    firstname: string;
    middleinitial: string;
    lastname: string;
    suffix?: string;
    gender: string;
    age: number;
    birthdate: string;
    civilstatus: string;
    residenttype: string;
    emailaddress?: string;
    contactnumber?: string;
    occupation: string;
    residentid: number;
    addressline1: string;
    addressline2?: string;
    photo?: Blob;
    password: string;
    dateregistered: string;
}

const Inhabitants = () => {

    const [inhabitants, setInhabitants] = useState<Inhabitant[]>([]);
    const [currentInhabitant, setCurrentInhabitant] = useState<Inhabitant | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState<number | null>(null);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('inhabitants') || '[]') as Inhabitant[]
        setInhabitants(data)
    }, [])

    const handleDeleteRow = (index: number) =>{
        setSelectedRow(index);
    }

    const handleDeleteRowConfirm = () =>{
        if (selectedRow !== null){
            const newInhabitants = [...inhabitants]
            newInhabitants.splice(selectedRow, 1)
            localStorage.setItem('inhabitants', JSON.stringify(newInhabitants))
            setInhabitants(newInhabitants)
            setSelectedRow(null);
        }
    }

    const [sortBy, setSortBy] = useState('')
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    const handleSort = (sortBy: string) => {
        setSortBy(sortBy);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');

        const sortedInhabitants = [...inhabitants].sort((a,b) => {
            if (sortBy === 'age'){
                return sortOrder === 'asc' ? a.age - b.age : b.age - a.age;
            } else if (sortBy === 'gender'){
                return sortOrder === 'asc' ? a.gender.localeCompare(b.gender) : b.gender.localeCompare(a.gender);
            } else if (sortBy === 'dateregistered'){
                return sortOrder === 'asc' ? Date.parse(a.dateregistered) - Date.parse(b.dateregistered) : Date.parse(b.dateregistered) - Date.parse(a.dateregistered);
            }
            return 0;
        });

        setInhabitants(sortedInhabitants);
    }

    const handleUpdateClick = (residentid: number) =>{
        window.location.href = `/admin-pages/updateprofile/${residentid}`;
    };

    const handleUpdate = (data: Partial<Inhabitant>) => {
        const newInhabitants = inhabitants.map((inhabitant) => 
        inhabitant === currentInhabitant ? { ...inhabitant, ...data} : inhabitant);
        localStorage.setItem('inhabitants', JSON.stringify(newInhabitants));
        setInhabitants(newInhabitants);
        setCurrentInhabitant(null);
    }

    const [currentTimeDate, setCurrentTimeDate] = useState(new Date());
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() =>{
        setIsMounted(true);
        const IntervalID = setInterval(() => { setCurrentTimeDate(new Date());}, 1000);

        return () => clearInterval(IntervalID);
    })

    const CurrentDate = currentTimeDate.toLocaleDateString();
    const CurrentTime = currentTimeDate.toLocaleTimeString();
    

    return(
        <main>
            <nav><Header /> <NavBarAdmin /></nav>
            <div className = "mt-5">
                <div className = "font-sans ml-4 flex">
                    <button className = "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link href = "/admin-home">Back</Link></button>
                    <div className = "mb-4 font-sans absolute right-0 mr-4 text-center">
                        {isMounted && (<p>{CurrentDate} - {CurrentTime}</p>)}
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
                    <select 
                    onChange = {(e) => handleSort(e.target.value)}
                    value = {sortBy}
                    >
                        <option value = "">--Select Sorting Option--</option>
                        <option value = "age">Age</option>
                        <option value = "gender">Gender</option>
                        <option value = "dateregistered">Registration Date</option>
                    </select>
                </div>

                <div className = "mt-5 flex justify-center items-center">
                    <table className = "min-w-full border-collapse block md:table">
                        <thead className = "block md:table-header-group">
                            <tr className = "border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative" >
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
                                <th className = "font-sans font-bold md:border md:border-grey-500 text-center block md:table-cell">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inhabitants.map((inhabitant, index) => (
                                <tr className = "border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative" key = {inhabitant.residentid}>
                                    <td className = "font-sans text-center md:border md:border-grey-500 md:table-cell">{index + 1}</td>
                                    <td className = "font-sans text-center md:border md:border-grey-500 md:table-cell">{new Date(inhabitant.dateregistered).toLocaleDateString()}</td>
                                    <td className = "font-sans text-center md:border md:border-grey-500 md:table-cell">{inhabitant.suffix} {inhabitant.lastname}, {inhabitant.firstname} {inhabitant.middleinitial}</td>
                                    <td className = "font-sans text-center md:border md:border-grey-500 md:table-cell">{inhabitant.age}</td>
                                    <td className = "font-sans text-center md:border md:border-grey-500 md:table-cell">{inhabitant.residentid}</td>
                                    <td className = "font-sans text-center md:border md:border-grey-500 md:table-cell">{inhabitant.addressline1} {inhabitant.addressline2}</td>
                                    <td className = "font-sans text-center md:border md:border-grey-500 md:table-cell">{inhabitant.civilstatus}</td>
                                    <td className = "font-sans text-center md:border md:border-grey-500 md:table-cell">{inhabitant.occupation}</td>
                                    <td className = "font-sans text-center md:border md:border-grey-500 md:table-cell">{inhabitant.gender}</td>
                                    <td className = "font-sans text-center md:border md:border-grey-500 md:table-cell">{inhabitant.birthdate}</td>
                                    <td className = "font-sans text-center md:border md:border-grey-500 md:table-cell">{inhabitant.emailaddress}</td>
                                    <td className = "font-sans text-center md:border md:border-grey-500 md:table-cell">{inhabitant.contactnumber}</td>
                                    <td className = "font-sans text-center md:border md:border-grey-500 md:table-cell flex justify-center items center mb-1">
                                        <button type = "button" 
                                        className = "bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded-md mt-1 mb-3"
                                        >Update</button>
                                        <button onClick = {() => handleDeleteRow(index)} className = "mb-3 bg-blue-500 hover:bg-blue-700 text-white rounded-md px-2 py-1">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <>
                        <DeleteModal isOpen = {selectedRow !== null} onContinue = {handleDeleteRowConfirm} onCancel= {() => setSelectedRow(null)} message = "Are you sure? If you delete this profile, you will permanently lose this profile informations."/>
                    </>
                </div>
            </div>
        </main>
    );
}

export default Inhabitants;