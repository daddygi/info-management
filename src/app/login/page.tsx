"use client";
import Header from "../components/Header";
import { login } from "../api/hello/api";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const token = await login(email, password);
      localStorage.setItem("token", token);
      if (email === "admin" && password === "password") {
        router.push("/admin-home");
      } else {
        router.push("/user-home");
      }
    } catch (error) {
      console.error(error);
      alert("Invalid login. Please check your credentials and try again.");
    }
  };
  return (
    <main>
      <Header />
      <main className=" flex flex-col items-center justify-center w-full flex-1 px-20 pt-40 text-center bg-sanseb bg-100% h-screen bg-fixed bg-origin-content ">
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
            <div className="flex flex-col items-center mt-5">
              <form onSubmit={handleSubmit}>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    onChange={(e) => setPassword(e.target.value)}
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

                <button
                  type="submit"
                  className="border-2 border-blue-500 text-blue-500 rounded-full px-12 py-2 inline-block font semibold hover:bg-blue-500 hover:text-white"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
          <div className="w-2/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-20 ">
            <h2 className="text-3xl font-bold mb-2">Register</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">Fill up your personal information here.</p>
            <a
              href="/register"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font semibold hover:bg-white hover:text-blue-600"
            >
              Sign up
            </a>
          </div>
        </div>
      </main>
    </main>
  );
}
