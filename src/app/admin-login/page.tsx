"use client";
import React, { useState } from "react";

export default function Login() {

  return (
    <main className=" flex items-center justify-center w-full flex-1 px-20 pt-40 text-center bg-center bg-cover bg-gray-600 bg-opacity-50" style = {{ backgroundImage: "url('/images/sanseb copy.png')" }}>
      {/* Sign in */}
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4x">
        <div className="w-3/5 p-5 mx-auto">
          <div className="mt-10 justify-center">
            <h2 className="text-3xl font-bold text-blue-500">
              Sign in as Admin
            </h2>
            <div className="border-2 w-10 border-blue-500 inline-block mb-2" />
          </div>
          <div className="flex flex-col items-center mt-5">
            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
              <input
                type="username"
                name="username"
                placeholder="Username"
                className="bg-gray-100 outline-none text-sm flex-1"
              />
            </div>
            <div className="bg-gray-100 w-64 p-2 flex items-center">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="bg-gray-100 outline-none text-sm flex-1"
              />
            </div>
            <a
              href="#"
              className="border-2 border-blue-500 text-blue-500 rounded-full px-12 py-2 inline-block font semibold hover:bg-blue-500 hover:text-white"
            >
              Sign in as Admin
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
