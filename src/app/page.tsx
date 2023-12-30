import Chat from "@/components/Chat";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className={"flex flex-col  bg-gray-100 mt-10 border relative"}>
      <section className={"  text-center"}>
        <Navbar />
        <Chat />
      </section>
    </main>
  );
}
