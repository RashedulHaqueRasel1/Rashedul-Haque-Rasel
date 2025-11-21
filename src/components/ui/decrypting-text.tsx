"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-+=[]{}|;:,.<>?";

interface DecryptingTextProps {
  targetText: string;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DecryptingText: React.FC<DecryptingTextProps> = ({
  targetText,
  speed = 8,
  className = "",
  style,
}) => {
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let animationFrameId: number;
    let iteration = 0;
    let isMounted = true;
    const animationSpeed = Math.max(1, speed);

    const scramble = () => {
      if (!isMounted) return;
      const newText = targetText
        .split("")
        .map((char, index) => {
          if (iteration / animationSpeed > index) return targetText[index];
          if (char === " ") return " ";
          return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        })
        .join("");
      setCurrentText(newText);

      if (iteration < targetText.length * animationSpeed) {
        iteration += 1;
        animationFrameId = requestAnimationFrame(scramble);
      } else {
        setCurrentText(targetText);
      }
    };

    // Start animation after a small delay
    const timeoutId = setTimeout(() => {
      scramble();
    }, 600);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [targetText, speed]);

  return (
    <motion.span
      className={className}
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
    </motion.span>
  );
};

export default DecryptingText;
