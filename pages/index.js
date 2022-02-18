import react, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LinkScroll from "react-scroll/modules/components/Link";
import StickyBox from "react-sticky-box";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import SocialSidebar from "../components/SocialSidebar";
import Layout from "../components/Layout";
import Landingparticle from "../components/LandingParticle";

export default function Landing() {
  const [showLanding, setShowLanding] = useState(false);

  const handleShow = () => {
    setShowLanding(!showLanding);
  };
  const particlesInit = (main) => {
    console.log(main);

    // initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page of Aru's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landingparticle init={particlesInit} loaded={particlesLoaded} />
      <div
        className="max-w-screen-xl max-h-screen mt-8 mb-6 sm:mt-28 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
        id="home"
      >
        <div className=" py-32 flex flex-col justify-center items-center ">
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
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("home");
              }}
            >
              <Link href="/home" passHref>
                <button
                  onClick={handleShow}
                  className=" mr-4 font-medium tracking-wide py-2 px-5 sm:px-8 border-teal-500 text-teal-500  border-2 rounded capitalize hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all duration-500"
                >
                  Home
                </button>
              </Link>
            </LinkScroll>
          </div>
        </div>
      </div>
    </div>
  );
}
