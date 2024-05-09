"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import StarsCanvas from "./StarBackground";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 md:px-2 lg:px-10 xl:px-20 ">
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]  ">
        <a
          href="#about-me"
          className="h-auto w-auto flex items-center justify-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-spin"
          />

          <span className="text-lg font-semibold ml-[10px] md:block text-gray-300">
            PORTFOLIO.
          </span>
        </a>
        {/* <nav className="border-red-800 border-2 flex justify-center items-center"> */}
        <section className="MOBILE-MENU flex md:hidden ml-28 sm:ml-96">
          <div
            className="HAMBURGER-ICON space-y-2 cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-[30px] animate bg-gray-300"></span>
            <span className="block h-0.5 w-[30px] animate bg-gray-300"></span>
            <span className="block h-0.5 w-[30px] animate bg-gray-300"></span>
          </div>
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div className="w-full h-[65px] top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md flex flex-row items-center justify-between pl-[10px] ">
              <a
                href="#about-me"
                className="h-auto w-auto flex flex-row items-center justify-center"
              >
                <Image
                  src="/NavLogo.png"
                  alt="logo"
                  width={70}
                  height={70}
                  className="cursor-pointer hover:animate-spin"
                />

                <span className="text-lg font-semibold ml-[10px] text-gray-300">
                  PORTFOLIO.
                </span>
              </a>
              <div
                className="p-2 cursor-pointer mr-4 hover:text-white"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600 "
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(209 213 219)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-between relative ">
              <div className=" border-gray-400 flex flex-col gap-8 p-4 text-lg  tracking-wide mob-nav">
                <Link
                  href="#about-me"
                  className="cursor-pointer border-b  border-slate-600 hover:text-white"
                  onClick={() => setIsNavOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#skills"
                  className="cursor-pointer border-b border-slate-600 hover:text-white"
                  onClick={() => setIsNavOpen(false)}
                >
                  Skills
                </Link>
                <Link
                  href="#projects"
                  className="cursor-pointer border-b border-slate-600 hover:text-white"
                  onClick={() => setIsNavOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="#contact"
                  className="cursor-pointer border-b border-slate-600 hover:text-white"
                  onClick={() => setIsNavOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex flex-row gap-12 mb-8 py-4">
              {/* <a
                href="https://www.linkedin.com/in/arjun-kumar-37862620b/"
                target="_blank"
                onClick={() => setIsNavOpen(false)}
              >
                <Image
                  src="/linkedin.svg"
                  alt="linkedin-logo"
                  width={32}
                  height={32}
                />
              </a>
              <a
                href="https://twitter.com/Arjun_Dev07"
                target="_blank"
                onClick={() => setIsNavOpen(false)}
              >
                <Image
                  src="/twitter.svg"
                  alt="twitter-logo"
                  width={32}
                  height={32}
                />
              </a>
              <a
                href="https://github.com/Arjun-Seth"
                target="_blank"
                onClick={() => setIsNavOpen(false)}
              >
                <Image
                  src="/gitwhite.png"
                  alt="github-logo"
                  width={32}
                  height={32}
                />
              </a> */}
              {Socials.map((social) => (
                <React.Fragment key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    onClick={() => setIsNavOpen(false)}
                  >
                    <Image
                      src={social.src}
                      alt={social.name}
                      key={social.name}
                      width={32}
                      height={32}
                    />
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
        <div className="DESKTOP-MENU md:w-[500px] h-full md:flex flex-row items-center justify-center md:mr-10 xl:mr-20 ">
          <div className="hidden md:flex items-center justify-between gap-8 lg:w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-4 px-5 py-[10px] rounded-full text-gray-200 text-base">
            <Link href="#about-me" className="cursor-pointer">
              About
            </Link>
            <Link href="#skills" className="cursor-pointer">
              Skills
            </Link>
            <Link href="#projects" className="cursor-pointer">
              Projects
            </Link>
            <Link href="#contact" className="cursor-pointer">
              Contact
            </Link>
          </div>
        </div>

        <div className=" hidden md:flex justify-center gap-5 ">
          {/* <a
            href="https://www.linkedin.com/in/arjun-kumar-37862620b/"
            target="_blank"
          >
            <Image
              src="/linkedin.svg"
              alt="linkedin-logo"
              width={28}
              height={28}
            />
          </a>
          <a href="https://twitter.com/Arjun_Dev07" target="_blank">
            <Image
              src="/twitter.svg"
              alt="twitter-logo"
              width={28}
              height={28}
            />
          </a>
          <a href="https://github.com/Arjun-Seth" target="_blank">
            <Image
              src="/gitwhite.png"
              alt="github-logo"
              width={28}
              height={28}
            />
          </a> */}

          {Socials.map((social) => (
            <React.Fragment key={social.id}>
              <a href={social.href} target="_blank">
                <Image
                  src={social.src}
                  alt={social.name}
                  key={social.name}
                  width={28}
                  height={28}
                />
              </a>
            </React.Fragment>
          ))}
        </div>
        {/* </nav> */}
      </div>
    </div>
  );
};

export default Navbar;
