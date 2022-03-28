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
          <div className="md:my-2 md:px-3 md:py-1 md:rounded-2xl bg-teal-500 hover:bg-teal-800 hover:text-gray-100 cursor-pointer transition-all duration-500">
            <Link href="https://github.com/aruchowdhury" passHref>
              <a
                target="_blank"
                className="flex flex-row justify-between items-center"
              >
                <div className="pr-2">Github </div>
                <FaGithubSquare size="27" />
              </a>
            </Link>
          </div>
          <div className="md:my-2 md:px-3 md:py-1 md:rounded-2xl bg-teal-500 hover:bg-teal-800  hover:text-gray-100 cursor-pointer transition-all duration-500">
            <Link href="https://www.linkedin.com/in/arunavachowdhury/" passHref>
              <a
                target="_blank"
                className="flex flex-row justify-between items-center"
              >
                <div className="pr-2">LinkedIn </div>
                <FaLinkedin size="27" />
              </a>
            </Link>
          </div>
          <div className="md:my-2 md:px-3 md:py-1 md:rounded-2xl bg-teal-500 hover:bg-teal-800  hover:text-gray-100 cursor-pointer transition-all duration-500">
            <Link href="https://twitter.com/aru_pavel" passHref>
              <a
                target="_blank"
                className="flex flex-row justify-between items-center"
              >
                <div className="pr-2">Twitter </div>
                <FaTwitterSquare size="27" />
              </a>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="my-2 text-teal-500  cursor-pointer ">
            <Link href="https://github.com/aruchowdhury" passHref>
              <a target="_blank">
                <FaGithubSquare size="27" />
              </a>
            </Link>
          </div>
          <div className="my-2 text-teal-500  cursor-pointer">
            <Link href="https://www.linkedin.com/in/arunavachowdhury/" passHref>
              <a target="_blank">
                <FaLinkedin size="27" />
              </a>
            </Link>
          </div>
          <div className="my-2 text-teal-500  cursor-pointer">
            <Link href="https://twitter.com/aru_pavel" passHref>
              <a target="_blank">
                <FaTwitterSquare size="27" />
              </a>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
