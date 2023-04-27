import React from "react";

export default function Login() {
  return (
    <main className=" flex flex-col items-center justify-center w-full flex-1 px-20 pt-40 text-center ">
      {/* Sign in */}
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4x;">
        <div className="w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-blue-500">Adamson</span>University
          </div>
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-blue-500">
              Sign in to Account
            </h2>
            <div className="border-2 w-10 border-blue-500 inline-block mb-2" />
          </div>
          <p className="text-zinc-500 mt-2 ">
            Username (Last Name + Birthdate MM/DD/YY)
          </p>
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
            <div className="flex justify-between w-64 mb-5 mt-3">
              <label className="flex items-center text-xs">
                <input type="checkbox" name="remember" className="mr-1" />
                Remember me
              </label>
              <a href="#" className="text-xs">
                Forgot Password?
              </a>
            </div>
            <a
              href="#"
              className="border-2 border-blue-500 text-blue-500 rounded-full px-12 py-2 inline-block font semibold hover:bg-blue-500 hover:text-white"
            >
              Sign in
            </a>
          </div>
        </div>
        <div className="w-2/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-20 ">
          <h2 className="text-3xl font-bold mb-2">Register</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">Fill up your personal information here.</p>
          <a
            href="/userregister"
            className="border-2 border-white rounded-full px-12 py-2 inline-block font semibold hover:bg-white hover:text-blue-600"
          >
            Sign up
          </a>
        </div>
      </div>
    </main>
  );
}
