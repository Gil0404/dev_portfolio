"use client";
import React from "react";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import Aboutsvg from "../svg/aboutsvg";

export default function About() {
  const container = useRef(null);
  const inView = useInView(container, { once: true });
  const animate = {
    intial: {
      opacity: 0.5,
      y: 20,
    },
    inView: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        delay: 0.3,
        duration: 1,
      },
    },
  };
  return (
    <div className="max-w-max max-h-max mx-auto flex flex-row md:flex-row xs:flex-col justify-center  w-screen h-screen overflow-hidden">
      <div className="w-1/2 h-full md:w-1/2 xs:w-full md:h-full xs:h-1/2">
        <div
          className=" flex flex-col justify-center items-center w-full h-full  "
          ref={container}
        >
          <motion.h1
            className="text-3xl text-primary font-bold"
            variants={animate}
            initial="intial"
            animate={inView ? "inView" : "intial"}
          >
            About <span className="text-secondary">Me</span>
          </motion.h1>
          <motion.h1
            className="text-md text-[#3d155f] font-normal   md:text-md md:w-1/2 xs:w-full xs:p-4 "
            variants={animate}
            initial="intial"
            animate={inView ? "inView" : "intial"}
          >
            My name is Gilbert Garcia, and I am a dedicated and hardworking
            developer with expertise in React, Tailwind CSS, and Firebase. I
            also have foundational knowledge in PHP, Python, C++, Java, and
            VB.NET. Known for my focus and commitment, I continuously strive to
            improve my skills and deliver high-quality results. Outside of work,
            I enjoy gaming and drawing, which allow me to unwind and express my
            creativity. As an introverted individual, I value deep concentration
            and enjoy working independently to solve complex problems.
          </motion.h1>
        </div>
      </div>
      <div className="w-1/2 h-full md:w-1/2 xs:w-full md:h-full xs:h-1/2">
        <motion.div
          className=" flex flex-col justify-center items-center w-full h-full "
          ref={container}
          variants={animate}
          initial="intial"
          animate={inView ? "inView" : "intial"}
        >
          <Aboutsvg />
        </motion.div>
      </div>
    </div>
  );
}
