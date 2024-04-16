import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "semantic-ui-react";

interface Props {
  src: string;
  title: string;
  description: string;
  githubAdd: string;
}

const ProjectCard = ({ src, title, description, githubAdd }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>

      <div className="relative p-4 flex items-center justify-center gap-10">
        {/* <Link
          href="#"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-[100px]"
        >
          <button>Live link</button>
        </Link> */}
        <a
          href="https://github.com/Arjun-Seth"
          target="_blank"
          rel="noreferrer"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-[150px]"
        >
          Github link
        </a>
        {/* <a
          href="#"
          target="_blank"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Live Link
        </a> */}
      </div>

      {/* <Link href="#">
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Live Link
        </button>
      </Link> */}
      <Link href="https://github.com/Arjun-Seth" className="text-white">
        github
      </Link>
    </div>
  );
};

export default ProjectCard;
