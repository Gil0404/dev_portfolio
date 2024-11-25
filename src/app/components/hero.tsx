"use client";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="container-hero h-hero mx-auto max-w-max overflow-y-hidden">
      <div className=" w-screen h-hero flex flex-row  md:flex-row xs:flex-col">
        <div className="h-hero flex-col flex justify-center items-center  font-extrabold ">
          <div className="xs:text-center md:text-left w-[1000px] md:w-[1000px] xs:w-full text-left">
            <h1
              className="text-secondary md:text-5xl xs:text-3xl 
          "
            >
              Hey There! I’m <span className=" text-white">GIL</span>
              <br />
              <span className="xs:text-base md:text-4xl text-white">
                A Web Developer.
              </span>
            </h1>
            <h1 className="xs:text-sm md:text-base text-white font-thin">
              Delivering innovative solutions with skills in <br />
              React.js, Next.js, Firebase, Node.js, GitHub, and Git.
            </h1>
          </div>
        </div>
        <div className="h-hero flex-col flex justify-center items-center w-full font-extrabold xs:text-left  xs:mb-5 md:mb-0">
          <div className="   xs:border-secondary md:border-primary border-[3px] w-80 h-80  translate-x-3 translate-y-5 ">
            <Image
              height={320}
              width={320}
              src={"/prof.webp"}
              alt="Picture of me"
              placeholder="blur"
              blurDataURL="/prof.webp"
              className=" shadow-lg -translate-x-4  -translate-y-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
