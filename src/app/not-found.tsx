"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeBackground from "@/components/ui/theme-background";
import { motion } from "framer-motion";
import { Home, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <ThemeBackground>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden">
        
        {/* Animated Background Glow specifically for 404 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-[100px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-10 md:p-16 max-w-lg w-full text-center shadow-2xl relative"
        >
          <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="p-4 bg-red-500/10 rounded-full border border-red-500/20">
              <AlertCircle className="w-12 h-12 text-red-400" />
            </div>
          </motion.div>

          <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent mb-4 tracking-tighter">
            404
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Page Not Found
          </h2>

          <p className="text-gray-400 mb-8 max-w-sm mx-auto leading-relaxed">
            Oops! The page you are looking for seems to have wandered off into the digital void.
          </p>

          <Link href="/">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white border-none py-6 px-8 cursor-pointer rounded-full shadow-lg shadow-purple-500/25 transition-all group">
              <Home className="w-5 h-5 mr-2 group-hover:-translate-y-0.5 transition-transform" />
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </ThemeBackground>
  );
}