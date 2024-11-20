import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./reusable/navbar";

export default function Home() {
  return (
    <main className="overflow-y-auto snap-y snap-mandatory h-screen scroll-smooth ">
      <Navbar />
      <div className="bg-gradient-to-r from-primary from-60% via-secondary via-0% to-secondary w-screen snap-center">
        <Hero />
      </div>
      <div className="h-screen max-h-max snap-center  ">
        <Hero />
      </div>
      <div className="bg-primary h-screen max-h-max snap-center ">xx</div>
      <div className="">
        <Hero />
      </div>
      <div
        className="bg-gradient-to-r from-primary from-60% via-secondary via-0% to-secondary w-screen max-h-max snap-center h-screen"
        id="project"
      >
        <Hero />
      </div>
    </main>
  );
}
