import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
          href={githubAdd}
          target="_blank"
          rel="noreferrer"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-[150px]"
        >
          Github link
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
