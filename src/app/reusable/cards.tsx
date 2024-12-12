import React from "react";
import { projecttype } from "../components/project";
export default function Card({ id, git, link, pic, name }: projecttype) {
  return (
    <div className=" h-1/3 lg:h-1/3 md:h-1/2 sm:h-1/2 xs:h-full w-full border-r-8 border-b-4 border-t-[1px] border-l-[1px] border-l-gray-300 border-t-gray-300 border-primary rounded-lg overflow-hidden flex flex-row shadow-md hover:scale-150 duration-300 bg-white">
      <div className="w-7/12 h-full flex flex-col items-center justify-center uppercase ">
        <p className=" font-bold text-slate-800">{name}</p>
      </div>
      <div className="w-5/12 h-full ">
        <img
          className="w-full h-full object-cover"
          src={pic ? pic : "null"}
        ></img>
      </div>
    </div>
  );
}
