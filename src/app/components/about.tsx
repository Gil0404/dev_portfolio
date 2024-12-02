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
        duration: 1,
      },
    },
  };
  return (
    <div className="max-w-max max-h-max mx-auto flex flex-row md:flex-row xs:flex-col justify-center  w-screen h-screen overflow-hidden">
      <div className="w-1/2 h-full md:w-1/2 xs:w-full md:h-full xs:h-1/2">
        <h1 className="text-3xl font-bold mt-10 ml-5 text-primary xs:ml-16 xs:mt-12">
          About Me
        </h1>
        <div
          className=" flex flex-col justify-center items-center w-full h-full "
          ref={container}
        >
          <motion.h1
            className="text-3xl text-primary font-bold"
            variants={animate}
            initial="intial"
            animate={inView ? "inView" : "intial"}
          >
            I&apos;m GILBERT GARCIA
          </motion.h1>
          <motion.h1
            className="text-md  text-[#3d155f] font-lite"
            variants={animate}
            initial="intial"
            animate={inView ? "inView" : "intial"}
          >
            My name
          </motion.h1>
        </div>
      </div>
      <div className="w-1/2 h-full md:w-1/2 xs:w-full md:h-full xs:h-1/2">
        <div
          className=" flex flex-col justify-center items-center w-full h-full "
          ref={container}
        >
          <Aboutsvg />
        </div>
      </div>
    </div>
  );
}
