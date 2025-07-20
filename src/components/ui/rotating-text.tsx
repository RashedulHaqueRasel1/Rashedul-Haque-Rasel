"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface RotatingTextProps {
    texts: string[]
    interval?: number
    className?: string
}

export default function RotatingText({ texts, interval = 3000, className = "" }: RotatingTextProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }, interval)

        return () => clearInterval(timer)
    }, [texts.length, interval])

    return (
        <div className={`relative ${className}`}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                    transition={{
                        duration: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="block"
                >
                    {texts[currentIndex]}
                </motion.span>
            </AnimatePresence>
        </div>
    )
}
