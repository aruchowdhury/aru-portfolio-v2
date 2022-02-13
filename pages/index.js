import Head from "next/head";
import Image from "next/image";
import StickyBox from "react-sticky-box";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import SocialSidebar from "../components/SocialSidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page of Aru's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen relative flex">
        <div className="w-full">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
        <div className="absolute top-20 bottom-20 right-0">
          <StickyBox offsetTop={20} offsetBottom={20}>
            <SocialSidebar />
          </StickyBox>
        </div>
      </div>
    </div>
  );
}
