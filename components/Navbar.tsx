"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, User, Bell, ChevronDown, Moon, Sun } from 'lucide-react'

export default function Navbar({
  darkMode,
  setDarkMode,
}: { darkMode: boolean; setDarkMode: (value: boolean) => void }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className={`${darkMode ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-900 border-gray-200"} shadow-md sticky top-0 z-50 border-b`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <svg
                className="w-8 h-8 mr-2 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 4V20M7 12L19 12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z"
                  stroke="currentColor"
                  strokeWidth="2"
                ></path>
                <path
                  d="M19 16C19 17.6569 17.6569 19 16 19C14.3431 19 13 17.6569 13 16C13 14.3431 14.3431 13 16 13C17.6569 13 19 14.3431 19 16Z"
                  stroke="currentColor"
                  strokeWidth="2"
                ></path>
              </svg>
              <span className="text-blue-600 font-bold text-xl">FitTrack</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                href="/dashboard"
                className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-blue-600"} px-3 py-2 rounded-md text-sm font-medium`}
              >
                Dashboard
              </Link>
              <Link
                href="/workouts"
                className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-blue-600"} px-3 py-2 rounded-md text-sm font-medium`}
              >
                Workouts
              </Link>
              <Link
                href="/nutrition"
                className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-blue-600"} px-3 py-2 rounded-md text-sm font-medium`}
              >
                Nutrition
              </Link>
              <Link
                href="/plans"
                className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-blue-600"} px-3 py-2 rounded-md text-sm font-medium`}
              >
                Plans
              </Link>
              <Link
                href="/community"
                className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-blue-600"} px-3 py-2 rounded-md text-sm font-medium`}
              >
                Community
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-3 relative">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`${darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"} p-2 rounded-full hover:text-gray-800 focus:outline-none`}
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                <button
                  className={`${darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"} p-2 rounded-full hover:text-gray-800 focus:outline-none`}
                >
                  <Bell className="h-5 w-5" />
                </button>
                <div className="relative">
                  <button
                    className={`flex items-center space-x-1 ${darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"} px-3 py-1 rounded-full hover:text-gray-800 focus:outline-none`}
                  >
                    <User className="h-5 w-5" />
                    <span className="text-sm font-medium">Profile</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${darkMode ? "text-gray-300 hover:text-white hover:bg-gray-700" : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"} focus:outline-none`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/dashboard"
              className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? "text-gray-300 hover:text-white hover:bg-gray-700" : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"}`}
            >
              Dashboard
            </Link>
            <Link
              href="/workouts"
              className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? "text-gray-300 hover:text-white hover:bg-gray-700" : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"}`}
            >
              Workouts
            </Link>
            <Link
              href="/nutrition"
              className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? "text-gray-300 hover:text-white hover:bg-gray-700" : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"}`}
            >
              Nutrition
            </Link>
            <Link
              href="/plans"
              className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? "text-gray-300 hover:text-white hover:bg-gray-700" : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"}`}
            >
              Plans
            </Link>
            <Link
              href="/community"
              className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? "text-gray-300 hover:text-white hover:bg-gray-700" : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"}`}
            >
              Community
            </Link>
          </div>
          <div className={`pt-4 pb-3 border-t ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">AJ</div>
              </div>
              <div className="ml-3">
                <div className={`text-base font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>Harsh Patil</div>
                <div className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  harshabhaypatil@gmail.com
                </div>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`ml-auto ${darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"} flex-shrink-0 p-1 rounded-full focus:outline-none`}
              >
                {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
              </button>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <a
                href="#"
                className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? "text-gray-300 hover:text-white hover:bg-gray-700" : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"}`}
              >
                Your Profile
              </a>
              <a
                href="#"
                className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? "text-gray-300 hover:text-white hover:bg-gray-700" : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"}`}
              >
                Settings
              </a>
              <a
                href="#"
                className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? "text-gray-300 hover:text-white hover:bg-gray-700" : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"}`}
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

