import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";

export default function SocialSidebar() {
  return (
    <div className=" sm:m-2 xl:mx-20 xl:my-4 2xl:mx-80 2xl:-my-16 flex flex-col justify-center items-center h-screen">
      <div className="my-2 text-teal-500 hover:text-teal-800 cursor-pointer ">
        <Link href="https://github.com/aruchowdhury" passHref>
          <FaGithubSquare size="30" />
        </Link>
      </div>
      <div className="my-2 text-teal-500 hover:text-teal-800 cursor-pointer">
        <Link href="https://www.linkedin.com/in/arunavachowdhury/" passHref>
          <FaLinkedin size="30" />
        </Link>
      </div>
      <div className="my-2 text-teal-500 hover:text-teal-800 cursor-pointer">
        <Link href="https://twitter.com/aru_pavel" passHref>
          <FaTwitterSquare size="30" />
        </Link>
      </div>
    </div>
  );
}
