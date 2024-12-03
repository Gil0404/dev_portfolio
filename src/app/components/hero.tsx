"use client";
import Image from "next/image";
import React from "react";
import Facebook from "../svg/facebook";
import Twitter from "../svg/twitter";
import Instagram from "../svg/instagram";
import Linkedin from "../svg/linkedin";
import Github from "../svg/github";

function Hero() {
  return (
    <div className="container-hero h-hero mx-auto  w-screen overflow-y-hidden ">
      <div className=" w-screen h-hero flex flex-row max-w-max  md:flex-row xs:flex-col overflow-hidden">
        <div className="h-hero flex-col flex justify-center items-center w-screen  font-extrabold ">
          <div className="xs:text-center md:text-left w-2/3 md:w-2/3 xs:w-full text-left ">
            <h1 className="text-secondary md:text-5xl xs:text-3xl ">
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
          <div className="flex flex-rowmd:text-left w-2/3 md:w-2/3 xs:w-full justify-start items-center gap-1 p-1 mt-2 xs:justify-center md:justify-start">
            <Github path="https://github.com/Gil0404" title="Github" />
            <Facebook
              path="https://www.facebook.com/garcia.gilbert.0"
              title="Facebook"
            />
            <Twitter path="dd" title="Twitter" />
            <Instagram path="dd" title="Instagram" />
            <Linkedin
              path="https://www.linkedin.com/in/gilbert-garcia-4a790a305/"
              title="Linkedin"
            />
          </div>
        </div>
        <div className="h-hero flex-col flex justify-center items-center w-full font-extrabold xs:text-left  xs:mb-5 md:mb-0  ">
          <div className="xs:border-secondary md:border-primary border-[3px] w-80 h-80  translate-x-3 translate-y-5  xs:w-56 xs:h-56 ">
            <Image
              height={320}
              width={320}
              src={"/prof.webp"}
              alt="Picture of me"
              placeholder="blur"
              blurDataURL="/prof.webp"
              className=" shadow-lg -translate-x-4  -translate-y-5 xs:w-56 xs:h-56"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
