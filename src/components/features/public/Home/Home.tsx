"use client"

import ScrollToTop from "@/components/ui/scroll-to-top"
import About from "./About/About"
import Contact from "./Contact/Contact"
import HeroSection from "./HeroSection/HeroSection"
import Projects from "./Projects/Projects"
import Skills from "./Skills/Skills"

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      {/* <Blogs /> */}
      <Contact />
      <ScrollToTop />
    </>
  )
}
