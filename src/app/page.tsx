import Image from "next/image";
import { Inter } from "next/font/google";
import UserHome from "./user-home/page";
import Header from "./components/Header";
const inter = Inter({ subsets: ["latin"] });

export default function LoginPage() {
  return (
    <main>
      <nav>
        <Header />
      </nav>
      <div className="">
        <UserHome />
      </div>
    </main>
  );
}
