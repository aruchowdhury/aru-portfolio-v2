import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegWindowClose } from "react-icons/fa";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [showNav, setShowNav] = useState(false);

  // to sent nav sshdow active at scroll
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <header
        className={
          "fixed top-0 w-full z-30 bg-navyblue-300 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-2 sm:px-8 lg:px-16 mx-auto md:flex item-center justify-between py-3 sm:py-2">
          <div className="flex justify-between items-center">
            <LinkScroll
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("hero");
              }}
              className={"cursor-pointer animation-hover hover:opacity-80"}
            >
              <Link href="/" passHref>
                <h1 className=" flex flex-row justify-center items-center font-bold text-3xl cursor-pointer text-teal-800">
                  <span>Dev</span>
                  <span className="text-teal-500 flex ">
                    ARU<span className="text-2xl text-teal-800">.()</span>
                  </span>
                </h1>
              </Link>
            </LinkScroll>
            {showNav ? (
              <FaRegWindowClose
                onClick={() => setShowNav(!showNav)}
                className="md:hidden block w-8 h-8 cursor-pointer text-teal-500"
              />
            ) : (
              <GiHamburgerMenu
                onClick={() => setShowNav(!showNav)}
                className="md:hidden block w-8 h-8 cursor-pointer text-teal-500"
              />
            )}
          </div>
          <div
            className={
              (showNav ? "left-0" : "-left-full") +
              " flex flex-col md:flex-row items-center md:static fixed bottom-0 top-20 md:space-x-8 md:bg-transparent bg-navyblue-300 bg-opacity-90 md:w-auto w-full h-2/5 text-teal-500 md:text-teal-500 md:space-y-0 space-y-5 p-4 transition-left"
            }
          >
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "cursor-pointer hidden" +
                (activeLink === "about"
                  ? " text-teal-800"
                  : " hover:text-teal-800")
              }
              onClick={() => setShowNav(!showNav)}
            >
              <Link href="/home" passHref>
                About
              </Link>
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("projects");
              }}
              className={
                "cursor-pointer" +
                (activeLink === "projects"
                  ? " text-teal-800"
                  : " hover:text-teal-800")
              }
              onClick={() => setShowNav(!showNav)}
            >
              <Link href="/home" passHref>
                Projects
              </Link>
            </LinkScroll>

            <LinkScroll
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("skills");
              }}
              className={
                "cursor-pointer" +
                (activeLink === "skills"
                  ? " text-teal-800"
                  : " hover:text-teal-800")
              }
              onClick={() => setShowNav(!showNav)}
            >
              <Link href="/home" passHref>
                Skills
              </Link>
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("contact");
              }}
              className={
                "cursor-pointer" +
                (activeLink === "contact"
                  ? " text-teal-800"
                  : " hover:text-teal-800 ")
              }
              onClick={() => setShowNav(!showNav)}
            >
              Contact
            </LinkScroll>
            <Link
              href="https://docs.google.com/document/d/1vkBP21wrInZFTraoOIYLdvQL9y9irU9eR4HwX5IWbpc/edit?usp=sharing"
              passHref
            >
              <a target="_blank">
                <button
                  className="font-medium tracking-wide py-2 px-5 sm:px-8 border-teal-500 text-teal-500 md:border-teal-500 md:text-teal-500 border-2 rounded capitalize hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all duration-500"
                  onClick={() => setShowNav(!showNav)}
                >
                  Resume
                </button>
              </a>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
