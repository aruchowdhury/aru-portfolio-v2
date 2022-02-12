import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-28 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="about"
    >
      <SectionTitle text1="About" text2="About Me.." />
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ">
        <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-teal-500 leading-normal">
            I am Aru
          </h1>
          <p className="text-teal-500  mt-4 mb-6">
            I am A full Stack Developer
          </p>

          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center"></div>
        </div>

        <div className="h-full w-full"></div>
      </div>
    </div>
  );
}
