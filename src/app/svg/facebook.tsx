import React from "react";
import socialInterface from "../interface/socialsTypes";

export default function Facebook({ path, title }: socialInterface) {
  return (
    <a href={path} target="_blank" title={title}>
      <svg
        className="w-8 h-8 text-white dark:text-white bg-gray-800 rounded-md p-[1px] hover:scale-110 hover:bg-secondary hover:text-gray-800 "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" />
      </svg>
    </a>
  );
}
