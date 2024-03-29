import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../SectionTitle";
import { projects } from "../ProjectData";

export default function Projects() {
  const [isPlaying, setIsPlaying] = useState(null);

  return (
    <div
      className="max-w-screen-xl mt-40 mb-6 px-6 lg:px-16 mx-auto"
      id="projects"
    >
      <SectionTitle text1="My Projects..." />

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mb-40">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className=" relative mt-2 flex-grow p-4 shadow-teal-500 shadow-md border border-teal-500 rounded-md hover:bg-teal-800 flex flex-col items-center justify-between transition-all delay-200"
            onMouseOut={() => setIsPlaying(null)}
            onBlur={() => setIsPlaying(null)}
            onMouseOver={() => setIsPlaying(index)}
            onFocus={() => setIsPlaying(index)}
          >
            <div className="w-full mb-2 sm:mt-2 md:mt-0 rounded-sm flex items-center justify-center bg-teal-500 hover:bg-navyblue-300 sm:opacity-100 transition-all ease-in-out duration-300">
              <Image
                className="w-full h-max mix-blend-multiply rounded-sm hover:mix-blend-normal"
                src={isPlaying === index ? project.gif : project.gifPause}
                alt={project.title}
                height={300}
                width={540}
              />
            </div>
            <div className="w-full ">
              <h2 className="text-teal-500 ">{project.title}</h2>
              <div className=" flex flex-wrap items-center mt-2">
                <p className="mr-3 text-teal-500">{project.description}</p>
              </div>
              <div className=" mt-2 flex flex-wrap items-center">
                {project.tools.map((tool, index) => (
                  <p
                    key={index}
                    className="mr-4 my-2 px-1 rounded-sm bg-teal-500"
                  >
                    {tool}
                  </p>
                ))}
              </div>
              <div className=" mt-2 flex flex-wrap items-center">
                <Link href={project.repo} passHref>
                  <div className="mt-2 py-1 px-3 h-max mr-3 rounded-sm border-teal-500 text-teal-500 md:border-teal-500 md:text-teal-500 border-2 capitalize hover:bg-teal-500 hover:text-white hover:border-teal-500 flex items-center content-center cursor-pointer transition-all duration-200  hover:translate-x-1 hover:translate-y-1 ">
                    Github Repo
                  </div>
                </Link>
                <Link href={project.demo} passHref>
                  <div className="mt-2 py-1 px-3 h-max mr-3 rounded-sm border-teal-500 text-teal-500 md:border-teal-500 md:text-teal-500 border-2 capitalize hover:bg-teal-500 hover:text-white hover:border-teal-500 flex items-center content-center cursor-pointer transition-all duration-200  hover:translate-x-1 hover:translate-y-1 ">
                    Demo
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
