"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import DecryptingText from "@/components/ui/decrypting-text"
import RotatingText from "@/components/ui/rotating-text"

const techStack = [
    { name: "JavaScript", icon: "🟨", shouldAnimate: false },
    { name: "Next.js", icon: "⚫", shouldAnimate: false },
    { name: "React", icon: "⚛️", shouldAnimate: false },
    { name: "Express", icon: "🚀", shouldAnimate: false },
    { name: "Node.js", icon: "🟢", shouldAnimate: false },
    { name: "TailwindCSS", icon: "🎨", shouldAnimate: false },
    { name: "MongoDB", icon: "🍃", shouldAnimate: false },
    { name: "Firebase", icon: "🔥", shouldAnimate: false },
]

// Background floating icons
const floatingIcons = [
    { icon: "🟢", name: "Node.js", x: "10%", y: "20%" },
    { icon: "🚀", name: "Express", x: "85%", y: "15%" },
    { icon: "🍃", name: "MongoDB", x: "15%", y: "70%" },
    { icon: "⚫", name: "Next.js", x: "80%", y: "65%" },
    { icon: "🟨", name: "JavaScript", x: "90%", y: "40%" },
    { icon: "⚛️", name: "React", x: "5%", y: "45%" },
]

const developerTitles = ["MERN Stack Developer", "Frontend Developer", "Web Developer", "Full Stack Developer"]

export default function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
            {/* Floating Background Icons */}
            <div className="absolute inset-0 pointer-events-none">
                {floatingIcons.map((item, index) => (
                    <motion.div
                        key={`${item.name}-${index}`}
                        className="absolute text-6xl opacity-50"
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
                            duration: 8 + index * 0.5, // Varying duration for each icon
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 1 + index * 0.3, // Staggered delays
                            ease: "easeInOut",
                        }}
                    >
                        {item.icon}
                    </motion.div>
                ))}
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Profile Image */}
                    <div className="mb-8">
                        <img
                            src="https://i.postimg.cc/d31q0rXz/Rashedul-Haque-Rasel1.png?height=200&width=200"
                            alt="Rashedul Haque Rasel"
                            className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-purple-500 shadow-2xl"
                        />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Hi, I'm{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            <DecryptingText
                                targetText="Rashedul Haque"
                                speed={6}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                            />
                        </span>
                    </h1>

                    <div className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 h-12 flex items-center justify-center">
                        <RotatingText texts={developerTitles} interval={5000} />
                    </div>

                    <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Passionate full-stack developer creating modern web applications with cutting-edge technologies. Let's build
                        something amazing together!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white border-0">
                            <Mail className="w-5 h-5 mr-2" />
                            Hire Me
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent"
                        >
                            <Download className="w-5 h-5 mr-2" />
                            Download Resume
                        </Button>
                    </div>

                    {/* Tech Stack - Keeping exactly as it was */}
                    <div className="mb-12">
                        <h3 className="text-xl font-semibold text-white mb-6">Technologies I Work With</h3>
                        <div className="flex flex-wrap justify-center gap-4">
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
                                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-white/15 transition-all border border-white/10"
                                >
                                    <span className="text-2xl">{tech.icon}</span>
                                    <span className="text-sm font-medium text-gray-200">{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Scroll Down Animation */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
