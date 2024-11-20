"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, stagger } from "framer-motion";
import Landing from "../components/landing";

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

  return <Landing />;
}

export default Try;
