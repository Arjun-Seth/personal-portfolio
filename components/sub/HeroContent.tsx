"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex md:flex-row flex-col items-center justify-center px-4 sm:px-8 md:px-10 lg:px-20 mt-40 w-full z-[30] md:gap-0 gap-5 "
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start ">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-[7px]  border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-xs md:text-sm">
            Web Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto "
        >
          <span>
            Hi, I&apos;m
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Arjun Kumar{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base lg:text-lg text-gray-400 my-3 lg:my-5 max-w-[600px]"
        >
          I&apos;m a passionate Software Engineer with a knack for building
          user-friendly websites and applications. Explore my projects to see my
          skills in action!
        </motion.p>
        {/* <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a> */}
        <motion.a
          href="https://drive.google.com/file/d/1mI3FAICD-uENEjMg5mNNMZg9WiR0knRl/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          download
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] flex justify-center gap-3 align-center"
        >
          Get Resume
          <Image
            src="/download-icon.png"
            alt="download-icon-logo"
            width={24}
            height={24}
          />
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full md:flex justify-center items-center hidden"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          // className="md:h-[650px] md:w-[650px] h-96 w-96"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
