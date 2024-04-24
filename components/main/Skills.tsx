import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center md:gap-3 h-full relative overflow-hidden pb-32 md:pb-48 lg:pb-64 py-20"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-[7px] md:gap-3 lg:gap-5 items-center z-[30]">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            // width={image.width}
            // height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-2 md:gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            // width={image.width}
            // height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-3 md:gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            // width={image.width}
            // height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-3 md:gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            // width={image.width}
            // height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-2 md:gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            // width={image.width}
            // height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   viewBox="0 0 24 24"
//   fill="currentColor"
//   class="w-6 h-6"
// >
//   <path
//     fill-rule="evenodd"
//     d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
//     clip-rule="evenodd"
//   />
// </svg>;

{
  /* <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g
    id="SVGRepo_tracerCarrier"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></g>
  <g id="SVGRepo_iconCarrier">
    {" "}
    <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"></path>{" "}
    <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path>{" "}
    <path
      d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
      fill="white"
    ></path>{" "}
  </g>
</svg>; */
}

{
  /* <svg
  width="64px"
  height="64px"
  viewBox="0 0 32 32"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g
    id="SVGRepo_tracerCarrier"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></g>
  <g id="SVGRepo_iconCarrier">
    {" "}
    <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"></path>{" "}
    <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path>{" "}
    <path
      d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
      fill="white"
    ></path>{" "}
  </g>
</svg>; */
}

{
  /* <svg
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width="100"
  height="100"
  viewBox="0 0 48 48"
> */
}
{
  /* <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
  <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
  <path
    fill="#FFF"
    d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
  ></path>
  <path
    fill="#EEE"
    d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
  ></path>
</svg>; */
}

{
  /* <a href="https://iconscout.com/3d-illustrations/html" class="text-underline font-size-sm" target="_blank">HTML</a> by <a href="https://iconscout.com/contributors/iqonic-design" class="text-underline font-size-sm">iqonic.design</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>
   */
}
