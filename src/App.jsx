import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Experience from "./Sections/Experience";
import Projects from "./Sections/Projects";
import Gallery from "./Sections/Gallery";
import Contact from "./Sections/Contact";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <About />
      <Experience />
      <Projects />
      <Gallery />
      <Contact />
    </>
  );
}

export default App;
