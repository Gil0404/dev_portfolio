"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Menusvg from "../svg/menu";
import Logo from "../svg/logo";

interface listItem {
  title: string;
  path: string;
}

const listNav = [
  { title: "Home", path: "/" },
  { title: "project", path: "#project" },
  { title: "about", path: "#about" },
  { title: "resume", path: "#resume" },
];

function Menulist({ title, path }: listItem) {
  return (
    <motion.li variants={itemVar} className="m-1">
      <a className=" uppercase" href={path}>
        {title}
      </a>
    </motion.li>
  );
}

function Navbar() {
  //Change color of menu icon
  const [open, setOpen] = useState(false);
  // const [colors, setColors] = useState("#7469B6");

  // const { scrollY } = useScroll();

  // useMotionValueEvent(scrollY, "change", (scrollval) => {
  //   console.log(scrollval);

  //   if (scrollval >= 1630) {
  //     setColors("#ccf381");
  //   } else {
  //     setColors("#7469B6");
  //   }
  // });

  return (
    <div className="w-screen h-32  fixed z-50 flex flex-row items-center justify-between lg:px-20 xs:px-2  ">
      <div className="w-10 h-10">
        <Logo />
      </div>

      <motion.div className="flex justify-start items-end flex-col w-fit ">
        <button
          onClick={() => setOpen(!open)}
          className=" w-10 h-10 rounded-xl z-50 p-1 m-3"
        >
          <Menusvg isactive={open} fillcolor={"#000000  "} />
        </button>

        <AnimatePresence>
          {open && (
            <motion.ul
              className=" bg-neutral w-96  h-96 absolute flex flex-col items-center justify-center  drop-shadow-lg"
              variants={containerVar}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ originX: "right", originY: "top" }}
            >
              {listNav.map((item, index) => (
                <Menulist title={item.title} path={item.path} key={index} />
              ))}

              <div className="m-10"></div>
              <motion.div
                className="flex flex-row bg-green-400"
                variants={itemVar}
              >
                Some content here
              </motion.div>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

// Parent container animation (stagger children)
const containerVar = {
  initial: {
    scaleX: 0,
    scaleY: 0,
    opacity: 0.0001,
  },
  animate: {
    scaleX: 1,
    scaleY: 1,
    opacity: 1,

    transition: {
      duration: 0.5,
      type: "spring",
      ease: "easeInOut",
      when: "beforeChildren", // Stagger children before animating parent
      staggerChildren: 0.1,
    },
  },
  exit: {
    scaleX: 0,
    scaleY: 0,
    opacity: 0.0001,

    transition: {
      duration: 0.3,
      ease: "easeInOut",
      when: "afterChildren", // Stagger children before animating parent
      staggerChildren: 0.1,
    },
  },
};

// Item variants for staggered animation
const itemVar = {
  initial: {
    opacity: 0.0001,
    y: 20, // Items start lower
  },
  animate: {
    opacity: 1,
    y: 0, // Items rise to normal position
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0.0001,
    y: -20, // Items move upwards when exiting
    transition: {
      duration: 0.3,
    },
  },
};

export default Navbar;
