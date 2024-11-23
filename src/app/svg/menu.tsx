import React from "react";
import { motion } from "framer-motion";

type MenusvgProps = {
  isactive: boolean;
  fillcolor: string;
};

function Menusvg({ isactive, fillcolor }: MenusvgProps) {
  const open = isactive;

  const rotateFirst = {
    initial: {
      rotate: 45,
      y: -80,
      transition: {
        delay: 0.9,
      },
    },
    animate: {
      rotate: 0,
      y: 0,
    },
  };

  const rotateSecond = {
    initial: {
      rotate: -45,
      y: 0,
      transition: {
        delay: 0.9,
      },
    },
    animate: {
      rotate: 0,
    },
  };
  const rotateThrid = {
    initial: {
      rotate: -45,
      y: 50,
      transition: {
        delay: 0.9,
      },
    },
    animate: {
      rotate: 0,
      y: 0,
    },
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 300 300">
      <g fill={fillcolor}>
        <motion.path
          variants={rotateFirst}
          initial="initial"
          animate={open ? "animate" : "initial"}
          d="M54.54 212.933 212.934 54.54l32.527 32.527L87.068 245.46z"
        />
        <motion.path
          variants={rotateSecond}
          initial="initial"
          animate={open ? "animate" : "initial"}
          d="m87.068 54.541 158.391 158.392-32.526 32.527L54.54 87.068z"
        />
        <motion.path
          variants={rotateThrid}
          initial="initial"
          animate={open ? "animate" : "initial"}
          d="m153.527 121 91.217 91.217-32.527 32.527L121 153.527z"
        />
      </g>
    </svg>
  );
}

export default Menusvg;
