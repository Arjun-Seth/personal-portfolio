"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

interface Props {
  src: string;
  // width: number;
  // height: number;
  index: number;
}

const SkillDataProvider = ({ src, index }: Props) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });
  // let isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });
  // const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  // {
  //   isLargeScreen && (isMediumScreen = false);
  // }
  // console.log(isLargeScreen);
  // console.log(isMediumScreen);
  // console.log(isSmallScreen);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      {/* {isSmallScreen && (
        <Image src={src} width={32} height={32} alt="skill-image" />
      )}

      {isLargeScreen && (
        <Image src={src} width={70} height={70} alt="skill-image" />
      )}

      {isMediumScreen && (
        <Image src={src} width={50} height={50} alt="skill-image" />
      )} */}

      <Image
        src={src}
        width={`${isSmallScreen ? 32 : 64}`}
        height={`${isSmallScreen ? 32 : 64}`}
        // width={width}
        // height={height}
        alt="skill-image"
      />
      {/* <Image className="large-icons" src={src} alt="skill-img" /> */}
    </motion.div>
  );
};

export default SkillDataProvider;
