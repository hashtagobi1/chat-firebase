import Image from "next/image";
import Navbar from "./components/Navbar";

const style = {
  appContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
  sectionContainer: `max-w-[728px] mx-auto text-center`,
};
export default function Home() {
  return (
    <main className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar />
        {/* Chat Component */}
      </section>
    </main>
  );
}
