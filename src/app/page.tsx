import Hero from "./components/hero";
import Navbar from "./reusable/navbar";
import Form from "./components/form";

export default function Home() {
  return (
    <main className="overflow-y-auto snap-y snap-mandatory h-screen scroll-smooth overflow-x-hidden">
      <Navbar />
      <div className=" xs:bg-primary md:bg-gradient-to-r from-primary from-60% via-secondary via-0% to-secondary w-screen snap-center">
        <Hero />
      </div>

      <div className="h-screen max-h-max snap-center flex">
        <Form></Form>
      </div>
    </main>
  );
}
