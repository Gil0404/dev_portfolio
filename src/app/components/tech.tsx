import React from "react";

export default function Tech() {
  return (
    <div className="flex flex-col bg-blue-300 w-screen h-screen">
      <div className=" h-2/3 w-full bg-green-300 flex flex-row ">
        {/* col1 - row1 */}
        <div className="w-1/2 h-full flex-col flex bg-yellow-100">
          {" "}
          <div className="h-1/2 w-full bg-green-700 flex-row flex">
            {" "}
            <div className="h-full w-1/2 bg-blue-700"></div>
            <div className="h-full w-1/2 bg-indigo-400"></div>
          </div>
          <div className="h-1/2 w-full bg-red-700 flex flex-row">
            {" "}
            <div className="h-full w-1/2 bg-yellow-700"></div>
            <div className="h-full w-1/2 bg-purple-700"></div>
          </div>
        </div>
        <div className="w-1/2 h-full flex-col flex bg-violet-100">
          <div className="h-1/2 w-full bg-yellow-700"></div>
          <div className="h-1/2 w-full bg-green-700"></div>
        </div>{" "}
      </div>
      <div className=" h-1/3 w-full bg-red-300"> </div>
    </div>
  );
}
