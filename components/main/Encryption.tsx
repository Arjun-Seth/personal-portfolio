"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const Encryption = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });
  // min-h-[450px] md:min-h-[650px] lg:min-h-[800px]
  return (
    <div className="flex flex-row relative items-center justify-center min-h-[450px] md:min-h-[650px] lg:min-h-[800px] xl:min-h-screen  w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className=" text-3xl md:text-4xl lg:text-[44px] font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>
      <div className="flex flex-col items-center justify-center translate-y-[-2px] md:translate-y-[-10px] xl:translate-y-[-20px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={`${isSmallScreen ? 20 : 36}`}
            height={`${isSmallScreen ? 20 : 36}`}
            className=" translate-y-[8px] md:translate-y-[10px] xl:translate-y-3 transition-all duration-200 group-hover:translate-y-7 md:group-hover:translate-y-8 xl:group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={`${isSmallScreen ? 28 : 52}`}
            height={`${isSmallScreen ? 28 : 52}`}
            className=" z-10"
          />
        </div>

        <div className="Welcome-box px-[10px] xl:px-[15px] py-[2px] xl:py-[4px] z-[20] border my-2 xl:my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[10px] xl:text-sm">Encryption</h1>
        </div>
      </div>
      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-lg md:text-xl lg:text-2xl font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>
      {/* min-w-[500px] md:min-w-[900px] lg: */}
      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;
