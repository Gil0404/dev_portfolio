"use client";

import { useRef } from "react";
import Navbar from "../reusable/navbar";
import Hero from "./hero";

export default function Landing() {
  const scrollRef = useRef(null); // Ref to the scroll container
  // const [colors, setColors] = useState("#7469B6"); // Initial background color state

  // Use the `useScroll` hook to track the scroll position of the container
  // const { scrollY } = useScroll({ target: scrollRef });

  // Use `useMotionValueEvent` to listen to scroll position changes
  // useMotionValueEvent(scrollY, "change", (scrollval) => {
  //   // You can adjust this threshold based on your desired scroll distance
  //   if (scrollval >= 800) {
  //     setColors("#ccf381"); // Change to a new color
  //   } else {
  //     setColors("#7469B6"); // Default color
  //   }
  //   console.log(scrollval); // Log the scroll position for debugging
  // });

  return (
    <main
      className="overflow-y-auto snap-y snap-mandatory  h-[1400px] scroll-smooth "
      ref={scrollRef}
      // Dynamically set the background color
    >
      <div className="overflow-y-auto snap-y snap-mandatory  h-screen scroll-smooth sticky">
        <Navbar />

        {/* First section */}
        <div className="bg-gradient-to-r from-primary from-60% via-secondary via-0% to-secondary w-screen snap-start">
          <Hero />
        </div>

        {/* Second section */}
        <div className="h-screen snap-start">
          <Hero />
        </div>

        {/* Third section with primary background */}
        <div className="bg-primary h-screen snap-start">xx</div>

        {/* Fourth section */}
        <div className="snap-start">
          <Hero />
        </div>

        {/* Fifth section with gradient background */}
        <div
          className="bg-gradient-to-r from-primary from-60% via-secondary via-0% to-secondary w-screen snap-start"
          id="project"
        >
          <Hero />
        </div>
      </div>
    </main>
  );
}
