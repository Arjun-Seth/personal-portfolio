import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  githubAdd: string;
  liveUrl: string;
}

const ProjectCard = ({
  src,
  title,
  description,
  githubAdd,
  liveUrl,
}: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-[30] ">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-xl lg:text-2xl font-semibold text-white">
          {title}
        </h1>
        <p className="text-sm lg:text-base mt-2 text-gray-300">{description}</p>
      </div>
      <div className="absolute top-2 right-2 ">
        <a href={githubAdd} target="_blank">
          <Image
            src="/github-pr.svg"
            alt="github-link"
            width={32}
            height={32}
            className=" animate"
            loading="lazy"
          />
          {/* <i className="fa-brands fa-github fa-beat-fade animate-cion"></i> */}
          {/* <FontAwesomeIcon
            icon={faGithub}
            flip="vertical"
            height={48}
            width={48}
            color="white"
          /> */}
        </a>
      </div>
      <div className="relative p-3 flex items-center justify-center ">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 button-primary text-center text-gray-200 cursor-pointer rounded-lg min-w-[120px] flex justify-center items-center gap-2 pl-2"
        >
          Live link
          <Image src="/flash1.svg" alt="flash-icon" width={24} height={24} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
