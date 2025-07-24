"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Loader from "@/components/ui/loader"

export default function LoadingLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds loading time

    // Also hide loader when page is fully loaded
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 1000)
    }

    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
    }

    return () => {
      clearTimeout(timer)
      window.removeEventListener("load", handleLoad)
    }
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <Loader key="loader" />}</AnimatePresence>
      {!isLoading && children}
    </>
  )
}
