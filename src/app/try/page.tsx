"use client";

import React from "react";

function Try() {
  // return (
  //   <div className="snap-y overflow-y-auto snap-mandatory h-screen w-screen bg-violet-400 ">
  //     <div className="h-hero snap-center w-screen bg-yellow-500"></div>
  //     <div className="h-hero snap-center w-screen bg-green-500"></div>
  //     <div className="h-hero snap-center w-screen bg-blue-500"></div>
  //     <div className="h-hero snap-center w-screen bg-sky-500"></div>
  //     <div className="h-hero snap-center w-screen bg-red-500"></div>
  //   </div>
  // );

  return (
    <div className="flex w-screen h-screen bg-green-200 flex-col justify-center items-center group">
      <h2>sddd</h2>

      <input className="w-screen h-20 bg-yellow-100 focus:text-red-700 peer" />
      <h1 className="text-slate-400  peer-focus:text-red-600">sdds</h1>
    </div>
  );
}

export default Try;
