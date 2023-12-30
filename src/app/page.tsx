"use client";
import Chat from "@/components/Chat";
import Navbar from "@/components/Navbar";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const user = useUser();
  return (
    <main
      className={
        "flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative"
      }
    >
      <section className={"  text-center"}>
        <Navbar />
        {user ? <Chat /> : null}
      </section>
    </main>
  );
}
