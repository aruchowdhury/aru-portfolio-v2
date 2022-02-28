import React from "react";
import Link from "next/link";
import { ImGithub } from "react-icons/im";

export default function Footer() {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col text-center items-center mb-4">
      <div className="container mx-auto text-center py-3">
        <p className="flex flex-row justify-center  text-teal-500 ">
          <spa>©</spa> <span>{new Date().getFullYear()}</span>
          <span>. Arunava Chowdhury. All Rights Reserved</span>
        </p>
      </div>
      <div className=" cursor-pointer text-center text-sm border-teal-500 px-3 py-1 shadow-md text-teal-500 rounded-full hover:bg-teal-500 border-2 hover:text-white">
        <Link href="https://github.com/aruchowdhury" passHref>
          <span>
            <ImGithub className="mr-2 hidden md:inline-block" />
            Source Code
          </span>
        </Link>
      </div>
    </div>
  );
}
