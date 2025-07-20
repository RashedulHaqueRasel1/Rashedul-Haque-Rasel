"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { RiNodejsFill } from "react-icons/ri";
import {
    SiExpress,
    SiMongodb,
    SiNextdotjs,
    SiJavascript,
    SiReact
} from "react-icons/si";

const floatingIcons = [
    {
        icon: <RiNodejsFill className="text-green-600 text-5xl opacity-20" />,
        x: "10%",
        y: "20%",
        delay: 0
    },
    {
        icon: <SiExpress className="text-gray-600 text-5xl opacity-20" />,
        x: "25%",
        y: "80%",
        delay: 0.2
    },
    {
        icon: <SiMongodb className="text-green-500 text-5xl opacity-20" />,
        x: "40%",
        y: "20%",
        delay: 0.4
    },
    {
        icon: <SiNextdotjs className="text-black dark:text-white text-5xl opacity-20" />,
        x: "55%",
        y: "80%",
        delay: 0.6
    },
    {
        icon: <SiJavascript className="text-yellow-400 text-5xl opacity-20" />,
        x: "70%",
        y: "20%",
        delay: 0.8
    },
    {
        icon: <SiReact className="text-cyan-400 text-5xl opacity-20" />,
        x: "85%",
        y: "80%",
        delay: 1.0
    }
];

export default function Loader() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer)
                    return 100
                }
                return prev + Math.random() * 15 + 5
            })
        }, 150)

        return () => clearInterval(timer)
    }, [])

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] bg-[#020617] flex items-center justify-center px-4"
            style={{
                background: "#020617",
                backgroundImage: `
          linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
          radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
        `,
                backgroundSize: "40px 40px, 40px 40px, 100% 100%",
            }}
        >
            <div className="text-center max-w-sm mx-auto">
                {/* Animated Logo/Icon - Responsive */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                    className="mb-6 sm:mb-8"
                >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                        <motion.span
                            animate={{ rotate: [0, -180, -360] }}
                            transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                            }}
                            className="text-2xl sm:text-3xl text-white font-bold"
                        >
                            RH
                        </motion.span>
                    </div>
                </motion.div>

                {/* Loading Text - Responsive */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2"
                >
                    Rashedul Haque
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base"
                >
                    Loading Portfolio...
                </motion.p>

                {/* Progress Bar - Responsive */}
                <div className="w-full max-w-xs mx-auto">
                    <div className="flex justify-between text-xs sm:text-sm text-gray-400 mb-2">
                        <span>Loading</span>
                        <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min(progress, 100)}%` }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                    </div>
                </div>

                {/* Floating Tech Icons - Responsive positioning */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {floatingIcons.map((item, index) => (
                        <motion.div
                            key={index}
                            className="absolute"
                            style={{
                                left: item.x,
                                top: item.y
                            }}
                            animate={{
                                y: [0, -20, 0],
                                x: [0, 10, 0],
                                rotate: [0, 10, 0]
                            }}
                            transition={{
                                duration: 3 + index * 0.5,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: item.delay,
                                ease: "easeInOut"
                            }}
                        >
                            {item.icon}
                        </motion.div>
                    ))}
                </div>

                {/* Loading Dots */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-center space-x-2 mt-6 sm:mt-8"
                >
                    {[0, 1, 2].map((index) => (
                        <motion.div
                            key={index}
                            className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: index * 0.2,
                            }}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}
