"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Head from "next/head"

const personalInfo = [
    { label: "Name", value: "Rashedul Haque Rasel", icon: "👤" },
    { label: "Email", value: "rashedulhaquerasel1@gmail.com", icon: "📧" },
    { label: "Location", value: "Savar, Dhaka, Bangladesh", icon: "📍" },
    { label: "Languages", value: "Bengali, English (Comfortable)", icon: "🌐" },
]

const education = [
    {
        year: "2023-running",
        degree: "Bachelor of Business Administration",
        institution: {
            name: "Savar Government College",
            link: "https://www.savargc.gov.bd/en"
        },
        description:
            "Studying Accounting while learning web development to combine finance knowledge with technical skills for practical solutions..",
    },
    {
        year: "2020-2022",
        degree: "Higher Secondary Certificate",
        institution: {
            name: "Kurigram Government College",
            link: "https://kurigramgc.college.gov.bd/"
        },
        // description: "Completed HSC in Commerce, focusing on foundational subjects related to accounting business, and economics.",
    },
];


export default function AboutSection() {
    return (
        <section id="about" className="py-12 sm:py-16 md:py-20 relative">

            {/* Head */}
            <Head>
                <title>About Rashedul Haque Rasel | MERN Stack Developer</title>
                <meta
                    name="description"
                    content="Get to know Rashedul Haque Rasel – a passionate MERN Stack developer from Bangladesh. Skilled in React, Node.js, Express, and MongoDB. Explore his journey, education, and personal background."
                />
                <meta name="author" content="Rashedul Haque Rasel" />
                <meta name="keywords" content="Rashedul Haque Rasel, MERN Developer, Full Stack Developer, React Developer, Node.js Developer, JavaScript Developer, Bangladeshi Developer, Portfolio" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="About Rashedul Haque Rasel | MERN Stack Developer" />
                <meta property="og:description" content="Meet Rashedul Haque Rasel – a skilled full stack web developer specializing in the MERN stack. Learn about his background, projects, and education." />
                <meta property="og:url" content="https://rashedul-haque-rasel.vercel.app/about" />
                <meta property="og:url" content="https://www.facebook.com/Rashedul.haque.Rase1/" />
                <meta property="og:image" content="https://i.postimg.cc/qBNdJcLg/Rashedul-Haque-Rasel.jpg" />
                <meta property="og:site_name" content="Rashedul Haque Rasel Portfolio" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Rashedul Haque Rasel | MERN Stack Developer" />
                <meta name="twitter:description" content="Explore the personal and professional journey of Rashedul Haque Rasel – a MERN stack developer from Bangladesh." />
                <meta name="twitter:image" content="https://i.postimg.cc/qBNdJcLg/Rashedul-Haque-Rasel.jpg" />
                <meta name="twitter:site" content="https://x.com/Rashedul_Rasel1" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://rashedul-haque-rasel.vercel.app/about" />
            </Head>


            {/* */}
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
                        Get to know more about my background, skills, and journey as a developer
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex justify-center items-center order-2 lg:order-1 min-h-[20rem]"
                    >
                        <Image
                            width={400}
                            height={400}
                            src="https://i.postimg.cc/qBNdJcLg/Rashedul-Haque-Rasel.jpg?height=400&width=400"
                            alt="About Rashedul Haque"
                            className="w-80 h-80 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl object-cover shadow-2xl"
                        />
                    </motion.div>


                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6 sm:space-y-8 order-1 lg:order-2"
                    >
                        {/* Biography */}
                        <div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">My Story</h3>
                            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                                I am Rashedul Haque Rasel, a passionate web developer from Bangladesh with a strong focus on building user-friendly and responsive web applications. I have hands-on experience with front-end technologies like React.js, JavaScript (ES6+), HTML5, Tailwind CSS, and back-end tools like Node.js, Express.js, and MongoDB. I enjoy solving real-world problems through clean, scalable code.

                            </p>
                            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                                I’m confident in my front-end skills, I’m currently exploring backend development more deeply to become a skilled full-stack developer. I am always eager to learn new technologies and contribute to impactful projects.
                            </p>
                        </div>

                        {/* Personal Info */}
                        <div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Personal Info</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {personalInfo.map((info) => (
                                    <div key={info.label} className="flex items-center gap-3">
                                        <span className="text-xl sm:text-2xl">{info.icon}</span>
                                        <div>
                                            <p className="text-xs sm:text-sm text-gray-400">{info.label}</p>
                                            {info.label === "Email" ? (
                                                <a
                                                    href={`mailto:${info.value}`}
                                                    className="text-sm sm:text-base font-medium text-white hover:underline hover:text-purple-400"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-sm sm:text-base font-medium text-white">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                        {/* <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto cursor-pointer">
                            <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            Download Resume
                        </Button> */}

                        <a href="/Rashedul_Haque_Rasel.pdf" download>
                            <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto cursor-pointer">
                                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                Download Resume
                            </Button>
                        </a>
                        
                    </motion.div>
                </div>

                {/* Education Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 sm:mt-20"
                >
                    <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">Education Timeline</h3>
                    <div className="max-w-4xl mx-auto">
                        {education.map((edu, index) => (
                            <div key={index} className="relative flex items-start mb-6 sm:mb-8 last:mb-0">
                                <div className="flex-shrink-0 w-4 h-4 bg-purple-600 rounded-full relative z-10 mt-2"></div>
                                <div className="flex-grow ml-4 sm:ml-6 bg-white/5 backdrop-blur-sm border border-white/10 p-4 sm:p-6 rounded-lg shadow-lg">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-0">{edu.degree}</h4>
                                        <span className="text-purple-400 font-medium text-sm sm:text-base">{edu.year}</span>
                                    </div>
                                    <p className="text-gray-200 font-medium mb-2 text-sm sm:text-base">
                                        {edu.institution.link ? (
                                            <a
                                                href={edu.institution.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="underline hover:text-purple-300"
                                            >
                                                {edu.institution.name}
                                            </a>
                                        ) : (
                                            edu.institution.name
                                        )}
                                    </p>
                                    <p className="text-gray-300 text-sm sm:text-base">{edu.description}</p>
                                </div>
                                {index < education.length - 1 && (
                                    <div className="absolute left-2 top-8 w-0.5 h-12 sm:h-16 bg-gray-600 -z-10"></div>
                                )}
                            </div>
                        ))}

                    </div>
                </motion.div>
            </div>
        </section>
    )
}
