"use client"

import { motion } from "framer-motion"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiRedux,
  SiMongoose,
  SiZod,
  SiGit,
  SiGithub,
  SiFigma,
  SiCanva,
  SiGooglechrome,
  SiPostman,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

import {
  FaComments,
  FaClock,
  FaPuzzlePiece,
  FaUsers,
  FaBrain,
  FaBalanceScale,
  FaUserTie,
  FaHandshake,
} from "react-icons/fa";

import { Code, Server, Wrench, Users, Sparkles } from "lucide-react";
import Head from "next/head";



const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500 text-xl" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500 text-xl" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-xl" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-xl" /> },
      { name: "React.js", icon: <SiReact className="text-cyan-400 text-xl" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-600 text-xl" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-xl" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400 text-xl" /> },
    ],
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600 text-xl" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-600 text-xl" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-xl" /> },
      { name: "Mongoose", icon: <SiMongoose className="text-red-500 text-xl" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-xl" /> },
      { name: "MySQL (Basic)", icon: <SiMysql className="text-blue-600 text-xl" /> },
      { name: "Zod", icon: <SiZod className="text-fuchsia-500 text-xl" /> },
    ],
    icon: Server,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: <SiGit className="text-red-500 text-xl" /> },
      { name: "GitHub", icon: <SiGithub className="text-gray-800 dark:text-white text-xl" /> },
      // { name: "npm", icon: <SiNpm className="text-red-600 text-xl" /> },
      // { name: "pnpm", icon: <SiPnpm className="text-yellow-500 text-xl" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500 text-xl" /> },
      { name: "Canva", icon: <SiCanva className="text-blue-400 text-xl" /> },
      { name: "Chrome Dev Tools", icon: <SiGooglechrome className="text-yellow-500 text-xl" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500 text-xl" /> },
      { name: "Vercel", icon: <SiVercel className="text-black dark:text-white text-xl" /> },
      { name: "Netlify", icon: <SiNetlify className="text-cyan-600 text-xl" /> },
    ],
    icon: Wrench,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Communication", icon: <FaComments className="text-blue-400 text-xl" /> },
      { name: "Time Management", icon: <FaClock className="text-yellow-600 text-xl" /> },
      { name: "Problem Solving", icon: <FaPuzzlePiece className="text-green-600 text-xl" /> },
      { name: "Team Work", icon: <FaUsers className="text-indigo-500 text-xl" /> },
      { name: "Creativity", icon: <FaBrain className="text-pink-500 text-xl" /> },
      { name: "Leadership", icon: <FaUserTie className="text-purple-600 text-xl" /> },
      { name: "Decision Making", icon: <FaBalanceScale className="text-blue-700 text-xl" /> },
      { name: "Conflict Resolution", icon: <FaHandshake className="text-orange-500 text-xl" /> },
    ],
    icon: Users,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
  },
];



export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 relative">

      {/* Head */}
      <Head>
        {/* General Meta Tags */}
        <title>Rashedul Haque Rasel - Full Stack Web Developer</title>
        <meta name="title" content="Rashedul Haque Rasel - Full Stack Web Developer" />
        <meta
          name="description"
          content="Explore the portfolio of Rashedul Haque Rasel, a full-stack web developer skilled in React, Next.js, Node.js, MongoDB, and more. Passionate about creating modern web applications."
        />
        <meta
          name="keywords"
          content="Rashedul Haque Rasel, web developer, full stack developer, React.js, Next.js, Node.js, Tailwind CSS, MongoDB, portfolio, Bangladesh developer"
        />
        <meta name="author" content="Rashedul Haque Rasel" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://rashedul-haque-rasel.vercel.app/" />

        {/* Favicon (optional) */}
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rashedul-haque-rasel.vercel.app/" />
        <meta property="og:title" content="Rashedul Haque Rasel - Full Stack Developer Portfolio" />
        <meta
          property="og:description"
          content="Explore Rashedul's skills, education, and projects in web development, blending modern frontend and backend technologies."
        />
        <meta property="og:image" content="https://i.postimg.cc/qBNdJcLg/Rashedul-Haque-Rasel.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://rashedul-haque-rasel.vercel.app/" />
        <meta name="twitter:title" content="Rashedul Haque Rasel - Full Stack Developer Portfolio" />
        <meta
          name="twitter:description"
          content="Passionate full-stack developer with experience in React, Next.js, Node.js, and MongoDB. Check out my latest work!"
        />
        <meta name="twitter:image" content="https://i.postimg.cc/qBNdJcLg/Rashedul-Haque-Rasel.jpg" />

        {/* Social Profiles (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rashedul Haque Rasel",
              "url": "https://rashedul-haque-rasel.vercel.app/",
              "image": "https://i.postimg.cc/qBNdJcLg/Rashedul-Haque-Rasel.jpg",
              "sameAs": [
                "https://www.facebook.com/Rashedul.haque.Rase1/",
                "https://www.linkedin.com/in/rashedul-haque-rasel/",
                "https://github.com/RashedulHaqueRasel1",
                "https://wa.link/9ch9lg"
              ],
              "jobTitle": "Full Stack Web Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Web Wizards"
              }
            }),
          }}
        />
      </Head>


      {/* Skills Section */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            <span className="text-purple-300 font-medium text-sm sm:text-base">Skills & Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">What I Bring to the Table</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            A comprehensive skill set spanning modern web technologies and professional capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300" />

              {/* Content */}
              <div className="relative p-4 sm:p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className={`p-2 sm:p-3 rounded-xl ${category.bgColor} border border-white/10`}>
                    <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{category.title}</h3>
                    <div className={`h-1 w-12 sm:w-16 bg-gradient-to-r ${category.color} rounded-full mt-2`} />
                  </div>
                </div>

                {/* Skills Grid - Responsive columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/skill"
                    >
                      <span className="text-xl sm:text-2xl flex-shrink-0">{skill.icon}</span>
                      <span className="text-white font-medium text-sm sm:text-base group-hover/skill:text-purple-300 transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats - Responsive grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto"
        >
          {[
            // { number: "3+", label: "Years Experience" },
            { number: "10+", label: "Projects Completed" },
            { number: "10+", label: "Technologies" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
