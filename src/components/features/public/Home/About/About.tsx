"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { motion } from "framer-motion"

const personalInfo = [
    { label: "Name", value: "Rashedul Haque Rasel", icon: "👤" },
    { label: "Email", value: "rasel@example.com", icon: "📧" },
    { label: "Location", value: "Dhaka, Bangladesh", icon: "📍" },
    { label: "Languages", value: "Bengali, English", icon: "🌐" },
]

const education = [
    {
        year: "2020-2024",
        degree: "Bachelor of Science in Computer Science",
        institution: "University of Dhaka",
        description: "Focused on software engineering and web development",
    },
    {
        year: "2018-2020",
        degree: "Higher Secondary Certificate",
        institution: "Dhaka College",
        description: "Science background with mathematics and physics",
    },
]

export default function AboutSection() {
    return (
        <section id="about" className="py-12 sm:py-16 md:py-20 relative">
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
                        <img
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
                                I'm a passionate MERN stack developer with over 3 years of experience in creating modern web
                                applications. My journey started with curiosity about how websites work, and it has evolved into a deep
                                love for crafting digital experiences.
                            </p>
                            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                                I specialize in building scalable web applications using React, Node.js, and MongoDB. I'm always eager
                                to learn new technologies and take on challenging projects that push my skills to the next level.
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
                                            <p className="text-sm sm:text-base font-medium text-white">{info.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
                            <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            Download Resume
                        </Button>
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
                                    <p className="text-gray-200 font-medium mb-2 text-sm sm:text-base">{edu.institution}</p>
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
