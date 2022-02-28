import React, { useState } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";

export default function SocialSidebar() {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };
  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className="mr-2 flex flex-col justify-center items-right h-screen transition-all duration-500"
    >
      {hover ? (
        <>
          <div className="my-2 px-3 py-1 rounded-2xl  bg-teal-500 hover:bg-teal-800 hover:text-gray-100 cursor-pointer transition-all duration-500">
            <Link href="https://github.com/aruchowdhury" passHref>
              <div className="flex flex-row justify-between items-center">
                <div className="pr-2">Github </div>
                <FaGithubSquare size="27" />
              </div>
            </Link>
          </div>
          <div className="my-2 px-3 py-1 rounded-2xl bg-teal-500 hover:bg-teal-800  hover:text-gray-100 cursor-pointer transition-all duration-500">
            <Link href="https://www.linkedin.com/in/arunavachowdhury/" passHref>
              <div className="flex flex-row justify-between items-center">
                <div className="pr-2">LinkedIn </div>
                <FaLinkedin size="27" />
              </div>
            </Link>
          </div>
          <div className="my-2 px-3 py-1 rounded-2xl  bg-teal-500 hover:bg-teal-800  hover:text-gray-100 cursor-pointer transition-all duration-500">
            <Link href="https://twitter.com/aru_pavel" passHref>
              <div className="flex flex-row justify-between items-center">
                <div className="pr-2">Twitter </div>
                <FaTwitterSquare size="27" />
              </div>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="my-2 text-teal-500  cursor-pointer ">
            <Link href="https://github.com/aruchowdhury" passHref>
              <FaGithubSquare size="27" />
            </Link>
          </div>
          <div className="my-2 text-teal-500  cursor-pointer">
            <Link href="https://www.linkedin.com/in/arunavachowdhury/" passHref>
              <FaLinkedin size="27" />
            </Link>
          </div>
          <div className="my-2 text-teal-500  cursor-pointer">
            <Link href="https://twitter.com/aru_pavel" passHref>
              <FaTwitterSquare size="27" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
