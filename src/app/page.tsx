"use client";

import Login from "./components/Login";
import Header from "./components/Header";

export default function LoginPage() {
  return (
    <main>
      <nav>
        <Header />
      </nav>
      <div className="bg-sanseb bg-100% h-screen bg-fixed bg-origin-content">
        <Login />
      </div>
    </main>
  );
}
