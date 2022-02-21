import react, { useState } from "react";
import Head from "next/head";
import StickyBox from "react-sticky-box";
import About from "../components/HomePage/About";
import Contact from "../components/HomePage/Contact";
import Projects from "../components/HomePage/Projects";
import Skills from "../components/HomePage/Skills";
import SocialSidebar from "../components/SocialSidebar";
import Layout from "../components/Layout";
import HomeParticle from "../components/Particles/HomeParticle";

export default function Home() {
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
      <HomeParticle init={particlesInit} loaded={particlesLoaded} />

      <Layout>
        <div className="max-w-screen relative flex" id="home">
          <div className="w-full">
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
          <div className=" absolute top-20 bottom-20 right-0">
            <StickyBox offsetTop={20} offsetBottom={20}>
              <SocialSidebar />
            </StickyBox>
          </div>
        </div>
      </Layout>
    </div>
  );
}
