import React, { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [activeLink, setActiveLink] = useState(null);
  return (
    <div
      className="max-w-screen-xl max-h-screen mt-8 mb-6 sm:mt-28 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="home"
    >
      {/* <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8  sm:py-16 "> */}
      <div className=" py-32 flex flex-col justify-center items-start row-start-2 sm:row-start-1">
        <p className="text-teal-500 mt-4 mb-6">Hi,</p>
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-200 leading-normal">
          I am Aru.
        </h1>
        <p className="text-3xl lg:text-4xl xl:text-5xl text-gray-200 mt-4 mb-6">
          Full Stack Developer.
        </p>
        <p className=" text-gray-300 mb-10">
          I am experienced software developer, love to create interactive web
          applications.
        </p>

        <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
          <LinkScroll
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("projects");
            }}
          >
            <Link href="/" passHref>
              <button className=" mr-4 font-medium tracking-wide py-2 px-5 sm:px-8 border-teal-500 text-teal-500  border-2 rounded capitalize hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all duration-500">
                My Projects
              </button>
            </Link>
          </LinkScroll>
        </div>
      </div>

      {/* <div className=""></div>
      </div> */}
    </div>
  );
}
