import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function UserRegister() {
  return (
    <main>
      <div className="mt-4 flex">
        <button className="ml-4 font-sans">
          <Link href="/">Back</Link>
        </button>
        <img
          className="mb-2 object-none object-right-top"
          src="/images/tempB.png"
          width={100}
          height={100}
        ></img>
      </div>
      <div className="mt-5 mb-6 ml-9 flex">
        <p className="mt-2 ml-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            First Name:
          </label>
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstname"
            type="text"
          ></input>
        </p>
        <p className="mt-2 ml-7">
          <label className="ml-4 block text-gray-700 text-sm font-bold mb-2">
            Middle Initial:
          </label>
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="middleinitial"
            type="text"
          ></input>
        </p>
        <p className="mt-2 ml-7">
          <label className="ml-4 block text-gray-700 text-sm font-bold mb-2">
            Last Name:
          </label>
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastname"
            type="text"
          ></input>
        </p>
        <p className="mt-2 ml-7">
          <label className="ml-4 block text-gray-700 text-sm font-bold mb-2">
            Suffix:
          </label>
          <input
            className="shadow appearance-none border rounded py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="suffix"
            type="text"
          ></input>
        </p>
      </div>
      <div className="mt-5 mb-6 ml-9 flex">
        <p className="mt-5 ml-3">Gender: </p>
        <p className="mt-5 ml-7 mr-5">
          <input
            className="relative float-left ml-1 mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            type="radio"
            name="mgender"
            value="male"
          ></input>
          <label>Male</label>
        </p>
        <p className="mt-5 ml-7 mr-5">
          <input
            className="relative float-left ml-1 mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            type="radio"
            name="fgender"
            value="female"
          ></input>
          <label>Female</label>
        </p>
        <p className="mt-5 ml-7 mr-1">Insert Photo: </p>
        <p className="mt-2 ml-7 mr-4">
          <button className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
            <svg
              className="h-full w-full text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
        </p>

        <p className="mt-2 ml-7 mr-4">
          <label className="ml-4 block text-gray-700 text-sm font-bold mb-2">
            Age:
          </label>
          <input
            className="shadow appearance-none border rounded py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="age"
            type="text"
          ></input>
        </p>
      </div>

      <div className="mt-10 mb-6 ml-9 flex">
        <p className="mr-20 ml-4">
          <label>Birthdate: </label>
          <input type="date" id="birthday" name="birthday"></input>
        </p>
        <p className="ml-12 flex">Civil Status: </p>
        <div className="mr-4 ml-15 content-start grid grid-flow-rows-2">
          <p className="ml-2 mr-2 mb-2 flex">
            <input
              className="relative float-left ml-1 mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="radio"
              name="single"
              value="single"
            ></input>
            <label>Single</label>
          </p>

          <p className="ml-2 mr-2 mb-2 flex">
            <input
              className="relative float-left ml-1 mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="radio"
              name="married"
              value="married"
            ></input>
            <label>Married</label>
          </p>

          <p className="ml-2 mr-2 mb-2 flex">
            <input
              className="relative float-left ml-1 mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="radio"
              name="widowed"
              value="widowed"
            ></input>
            <label>Widowed</label>
          </p>

          <p className="ml-2 mr-2 mb-2 flex">
            <input
              className="relative float-left ml-1 mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="radio"
              name="divorced"
              value="divorced"
            ></input>
            <label>Divorced</label>
          </p>

          <p className="ml-2 mr-2 mb-2 flex">
            <input
              className="relative float-left ml-1 mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="radio"
              name="separated"
              value="separated"
            ></input>
            <label>Separated</label>
          </p>
        </div>

        <p className="ml-12 flex">Resident Type: </p>
        <div className="mr-4 ml-15 content-start grid grid-flow-rows-2">
          <p className="ml-2 mr-2 mb-2 flex">
            <input
              className="relative float-left ml-1 mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="radio"
              name="TemporaryResident"
              value="temporary"
            ></input>
            <label>Temporary Resident</label>
          </p>

          <p className="ml-2 mr-2 mb-2 flex">
            <input
              className="relative float-left ml-1 mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="radio"
              name="PermanentResident"
              value="permanent"
            ></input>
            <label>Permanent Resident</label>
          </p>
        </div>
      </div>

      <div className="mt-10 mb-6 ml-9 flex">
        <p className="mt-2 ml-3 mr-10">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email Address:
          </label>
          <input
            className="shadow appearance-none border rounded py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="example@email.com"
          ></input>
        </p>

        <p className="mt-2 ml-10">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Contact Number:
          </label>
          <input
            className="shadow appearance-none border rounded py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="contactnum"
            type="tel"
          ></input>
        </p>
      </div>

      <div className="mt-10 mb-6 ml-9 flex">
        <p className="mt-2 ml-3 mr-10">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Occupation:
          </label>
          <input
            className="shadow appearance-none border rounded py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="occupation"
            type="text"
          ></input>
        </p>

        <p className="mt-2 ml-10">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Resident ID #:
          </label>
          <input
            className="shadow appearance-none border rounded py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="residentid"
            type="text"
          ></input>
        </p>
      </div>

      <div className="mt-10 mb-6 ml-9 flex">
        <p className="mt-2 ml-3 mr-10">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Address Line 1:
          </label>
          <input
            className="shadow appearance-none border rounded py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address1"
            type="text"
          ></input>
        </p>

        <p className="mt-2 ml-10">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Address Line 2 (optional):
          </label>
          <input
            className="shadow appearance-none border rounded py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address2"
            type="text"
          ></input>
        </p>
      </div>

      <div className="mt-10 mb-6 ml-9 flex">
        <p className="mt-2 ml-3 mr-10">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
          ></input>
        </p>
      </div>

      <div className="mt-10 mb-6 ml-9 flex">
        <button className="mt-5 bg-blue-500 hover:bg-blue-700 border-none text-white text-center flex items-center px-4 py-2 rounded mb-2">
          Submit
        </button>
      </div>
    </main>
  );
}
