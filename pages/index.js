import react, { useState } from "react";
import Head from "next/head";
import About from "../components/HomePage/About";
import Contact from "../components/HomePage/Contact";
import Projects from "../components/HomePage/Projects";
import Skills from "../components/HomePage/Skills";
import SocialSidebar from "../components/SocialSidebar";
import Layout from "../components/Layout";
import HomeParticle from "../components/Particles/HomeParticle";

export default function Home() {
  // initialized the tsParticles instance (main) here
  const particlesInit = (main) => {
    console.log(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page of Aru's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeParticle init={particlesInit} loaded={particlesLoaded} />

      <Layout>
        <div className="max-w-screen relative flex" id="home">
          <div className="w-full">
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
          <div className="fixed right-0">
            <SocialSidebar />
          </div>
        </div>
      </Layout>
    </>
  );
}
