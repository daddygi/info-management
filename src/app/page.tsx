import Image from "next/image";
import { Inter } from "next/font/google";
import Login from "./components/Login";
import Header from "./components/Header";
const inter = Inter({ subsets: ["latin"] });

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
