import React from "react";
import { projecttype } from "../components/project";

export default function Card({
  id,
  git,
  link,
  pic,
  name,
  info,
  tools,
}: projecttype) {
  return (
    <div className=" h-1/3 lg:h-1/3 md:h-1/2 sm:h-1/2 xs:h-full w-full border-r-8 border-b-4 border-t-[1px] border-l-[1px] border-l-gray-300 border-t-gray-300 border-primary rounded-lg overflow-hidden flex flex-row shadow-md hover:scale-110 duration-300 bg-white">
      <div className="w-7/12 h-full flex flex-col  justify-center uppercase p-10 ">
        <p className=" font-bold text-slate-800">{name}</p>
        <p className=" font-bold text-xs text-slate-800">{info}</p>
        <div className="flex flex-wrap row-auto  gap-1 mt-4 w-full h-56 overflow-y-scroll">
          {tools.map((tool, key) => (
            <div
              className="bg-primary drop-shadow-sm px-5 py-1 rounded-full text-xs font-bold text-white "
              key={key}
            >
              {tool}
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-evenly mt-6 w-full ">
          <a
            className="bg-secondary h-10 w-1/3 rounded-lg text-lg font-bold text-white shadow-sm flex justify-center items-center"
            href={git}
            target="_blank"
          >
            Code
          </a>
          <a
            className="bg-primary h-10 w-1/3 rounded-lg text-lg font-bold text-white shadow-sm flex justify-center items-center"
            href={link}
            target="_blank"
          >
            Live
          </a>
        </div>
      </div>
      <div className="w-5/12 h-full ">
        <img
          src={pic ? pic : "/prof.webp"}
          className=" object-cover h-full w-full"
          alt={id}
        />
      </div>
    </div>
  );
}
