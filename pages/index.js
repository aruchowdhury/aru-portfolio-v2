import react, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import Landingparticle from "../components/Particles/LandingParticle";

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
          <p className="text-teal-500 mt-8 mb-2 ">Hi, I am </p>
          <h1 className=" text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-200 leading-normal">
            Arunava Chowdhury.
          </h1>
          <p className=" text-3xl lg:text-4xl xl:text-5xl text-gray-200 mt-4 mb-6">
            A Full Stack Developer.
          </p>
          <p className=" text-gray-300 text-xl mb-10 text-center">
            I am experienced full stack software developer, love to create
            interactive web applications.
          </p>

          <Link href="/home" passHref>
            <button
              onClick={handleShow}
              className=" mr-4 font-medium tracking-wide py-2 px-5 sm:px-8 md:px-10 lg:px-12 border-teal-500 text-teal-500  border-2 rounded capitalize hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all duration-500"
            >
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
