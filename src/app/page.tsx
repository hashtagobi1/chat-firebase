import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main
      className={
        "flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative"
      }
    >
      <section className={"  text-center"}>
        <Navbar />
        {/* Chat Component */}
      </section>
    </main>
  );
}
