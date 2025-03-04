"use client"

import { useState, useEffect, type ReactNode } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    // Check for user preference
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDarkMode !== null ? isDarkMode : true)
  }, [])

  useEffect(() => {
    // Update localStorage and apply class when darkMode changes
    localStorage.setItem("darkMode", darkMode.toString())
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div className={`${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  )
}

