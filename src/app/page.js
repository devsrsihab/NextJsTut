import Image from "next/image";
import HomePage from "./home/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10  w-full items-center justify-between font-mono text-sm lg:flex">
      {/* home */}
      <HomePage/>
        
      </div>
    </main>
  );
}
