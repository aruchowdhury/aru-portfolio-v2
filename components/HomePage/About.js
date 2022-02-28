import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";
import { IoIosArrowForward, IoMdArrowForward } from "react-icons/io";

export default function About() {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };
  return (
    <div
      className="max-w-screen-xl mb-6 mt-28 md:mt-44 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="about"
    >
      <div className="mx-auto flex md:py-10 sm:py-6 flex-col-reverse md:flex-row items-center">
        <div className="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col items-start md:text-left mb-16 md:mb-0 ">
          <h1 className=" pt-6 md:pt-0 text-3xl lg:text-4xl xl:text-5xl font-medium text-teal-500 leading-normal">
            Hi, I am Aru.
          </h1>
          <p className="text-gray-200 text-xl mt-6">
            A Full-Stack Developer based in Montreal, Canada.
          </p>
          <p className="text-gray-200 text-xl">
            I’m always fascinated by responsive design, and creating interactive
            frontend with a dynamic backend.
          </p>
          <p className="text-gray-200 text-xl">
            When I’m away from my keyboard you would find me taking portraits of
            friends and family.
          </p>
          <p className="text-gray-200 text-xl mb-10">
            I also love travelling, and valuntering.
          </p>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <LinkScroll
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <Link href="/home" passHref>
                <button
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHover}
                  className=" mr-4 font-medium flex justify-end items-center tracking-wide py-2 px-5 sm:px-8 border-teal-500 text-teal-500  border-2 rounded capitalize hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all duration-500"
                >
                  My Projects
                  {hover ? (
                    <IoMdArrowForward className=" ml-2" />
                  ) : (
                    <IoIosArrowForward className=" ml-2" />
                  )}
                </button>
              </Link>
            </LinkScroll>
          </div>
        </div>

        <div className="h-full w-full place-self-center">
          <Image
            className="object-center flex self-center justify-center"
            src="/images/codding.svg"
            alt="hero"
            quality={100}
            width={312}
            height={203}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}