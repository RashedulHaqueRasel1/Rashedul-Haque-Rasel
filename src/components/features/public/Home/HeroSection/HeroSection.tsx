"use client";

import { Button } from "@/components/ui/button";
import { Download, Mail, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import DecryptingText from "@/components/ui/decrypting-text";
import RotatingText from "@/components/ui/rotating-text";
import { RiNodejsFill } from "react-icons/ri";
import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiRedux,
  SiMongoose,
} from "react-icons/si";
import Head from "next/head";

const techStack = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />, // #F7DF1E
    shouldAnimate: false,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />, // black or white
    shouldAnimate: false,
  },
  {
    name: "React",
    icon: <SiReact className="text-cyan-400" />, // #61DAFB
    shouldAnimate: false,
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-purple-500" />, // Redux purple
    shouldAnimate: false,
  },
  {
    name: "Express",
    icon: <SiExpress className="text-gray-600" />, // typically gray
    shouldAnimate: false,
  },
  {
    name: "Node.js",
    icon: <RiNodejsFill className="text-green-600" />, // #3C873A
    shouldAnimate: false,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-sky-400" />, // #38BDF8
    shouldAnimate: false,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500" />, // #47A248
    shouldAnimate: false,
  },
  {
    name: "Mongoose",
    icon: <SiMongoose className="text-red-500" />, // Mongoose red
    shouldAnimate: false,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-500" />, // #FFCA28
    shouldAnimate: false,
  },
];

const floatingIcons = [
  {
    icon: <RiNodejsFill className="text-green-600 text-5xl" />, // 🟢 Node.js
    name: "Node.js",
    x: "10%",
    y: "20%",
  },
  {
    icon: <SiExpress className="text-gray-600 text-5xl" />, // 🚀 Express
    name: "Express",
    x: "85%",
    y: "15%",
  },
  {
    icon: <SiMongodb className="text-green-500 text-5xl" />, // 🍃 MongoDB
    name: "MongoDB",
    x: "15%",
    y: "70%",
  },
  {
    icon: <SiTailwindcss className="text-sky-400 dark:text-white text-5xl" />, // ⚫ TailwindCSS
    name: "TailwindCSS",
    x: "80%",
    y: "65%",
  },
  {
    icon: <SiJavascript className="text-yellow-400 text-5xl" />, // 🟨 JavaScript
    name: "JavaScript",
    x: "90%",
    y: "40%",
  },
  {
    icon: <SiReact className="text-cyan-400 text-5xl" />, // ⚛️ React
    name: "React",
    x: "5%",
    y: "45%",
  },
];
const developerTitles = [
  "MERN Stack Developer",
  "Frontend Developer",
  "Web Developer",
  "Full Stack Developer",
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 pb-8 px-4 overflow-hidden"
    >
      {/* Head */}
      <Head>
        {/* Basic Meta */}
        <title>Rashedul Haque Rasel — Full Stack Developer | Portfolio</title>
        <meta
          name="description"
          content="Rashedul Haque Rasel is a passionate MERN Stack Developer building full-stack web apps with modern technologies like React, Next.js, Node.js, and MongoDB."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://rashedul-haque-rasel.vercel.app/"
        />
        <meta
          property="og:title"
          content="Rashedul Haque Rasel — MERN Stack Developer"
        />
        <meta
          property="og:description"
          content="Explore the portfolio of Rashedul Haque Rasel — a Full Stack Developer skilled in React, Node.js, Express, MongoDB, Firebase & more."
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/rs253wmT/Rashedul-Haque-Rasel.png"
        />
        <meta
          property="og:site_name"
          content="Rashedul Haque Rasel Portfolio"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://rashedul-haque-rasel.vercel.app/"
        />
        <meta
          name="twitter:title"
          content="Rashedul Haque Rasel — MERN Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Full Stack Developer crafting blazing fast websites & web apps using MERN stack."
        />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/rs253wmT/Rashedul-Haque-Rasel.png"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://rashedul-haque-rasel.vercel.app/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Author */}
        <meta name="author" content="Rashedul Haque Rasel" />

        {/* Social Profile links for search engine */}
        <meta property="profile:username" content="Rashedul Haque Rasel" />
        <meta property="profile:first_name" content="Rashedul" />
        <meta property="profile:last_name" content="Haque Rasel" />

        {/* Optional WhatsApp Link Meta (not supported by all) */}
        <meta name="contact" content="+8801772582460" />
      </Head>

      {/* Floating Background Icons - Responsive */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={`${item.name}-${index}`}
            className="absolute text-4xl sm:text-5xl lg:text-6xl opacity-50"
            style={{
              left: item.x,
              top: item.y,
            }}
            animate={{
              x: [0, -15, 15, -10, 10, 0],
              y: [0, -10, 10, -15, 15, 0],
              rotate: [0, -5, 5, -3, 3, 0],
            }}
            transition={{
              duration: 8 + index * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 1 + index * 0.3,
              ease: "easeInOut",
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          {/* Profile Image - Responsive sizing */}
          <div className="mb-6 sm:mb-8">
            <Image
              src="https://i.postimg.cc/rs253wmT/Rashedul-Haque-Rasel.png"
              alt="Rashedul Haque Rasel"
              width={192} // or 200
              height={192}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mx-auto object-cover border-4 border-purple-500 shadow-2xl"
            />
          </div>

          {/* Main Heading - Responsive text sizing */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Hi, I&#39;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 block sm:inline">
              <DecryptingText
                targetText="Rashedul Haque"
                speed={6}
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                // style={{
                //   fontFamily: "var(--font-cinzel)",
                //   fontWeight: "700",
                // }}
              />  
            </span>
          </h1>

          {/* Dynamic Title - Responsive */}
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 mb-4 sm:mb-6 h-8 sm:h-10 md:h-12 flex items-center justify-center">
            <RotatingText texts={developerTitles} interval={5000} />
          </div>

          {/* Description - Responsive */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Passionate full-stack developer creating modern web applications
            with cutting-edge technologies. Let&#39;s build something amazing
            together!
          </p>

          {/* CTA Buttons - Responsive layout */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
            <a href="mailto:rashedulhaquerasel1@gmail.com">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white border-0 w-full sm:w-auto cursor-pointer"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Hire Me
              </Button>
            </a>
            {/* <Button
                            size="lg"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent w-full sm:w-auto cursor-pointer"
                        >
                            <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            Download Resume
                        </Button> */}

            <a href="/Rashedul_Haque_Rasel.pdf" download>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent w-full sm:w-auto cursor-pointer"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Tech Stack - Responsive grid */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto px-2 sm:px-0">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-md hover:shadow-lg hover:bg-white/15 transition-all border border-white/10"
                >
                  <span className="text-lg sm:text-xl md:text-2xl">
                    {tech.icon}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-gray-200">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scroll Down Animation - Hidden on mobile */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="hidden sm:flex flex-col items-center"
          >
            <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
