import React from "react";

export default function message() {
  return (
    <div className="flex flex-col max-w-7xl w-screen mx-auto bg-blue-300 h-screen p-5">
      <div className=" h-5/6 w-full bg-red-400 overflow-y-scroll scroll-smooth overflow-x-hidden no-scrollbar  ">
        {" "}
      </div>
      <div className="flex flex-col h-1/6 w-full bg-green-400"></div>
    </div>
  );
}
