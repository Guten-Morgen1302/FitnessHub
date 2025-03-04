"use client"

import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl md:text-6xl">
                <span className="block">Your Ultimate</span>
                <span className="block text-blue-200">Fitness Journey</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Track workouts, monitor nutrition, connect with fitness enthusiasts, and achieve your health goals with
                FitTrack.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <Link
                    href="/dashboard"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                  </Link>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Link
                    href="/plans"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 md:py-4 md:text-lg md:px-10"
                  >
                    View Plans
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1"></div>
            <div className="flex-1 w-full bg-gray-800"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <Image
              className="relative rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1551927336-09d50efd69cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="App screenshot"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-400 tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Everything you need for your fitness journey
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
              FitTrack provides comprehensive tools to help you reach your fitness goals.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-gray-700 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Workout Tracking</h3>
                    <p className="mt-5 text-base text-gray-300">
                      Log and track your workouts with detailed metrics. Monitor your progress over time with visual
                      charts and analytics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-700 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Nutrition Planning</h3>
                    <p className="mt-5 text-base text-gray-300">
                      Plan and track your meals with our comprehensive nutrition database. Set calorie and macro goals
                      to optimize your diet.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-700 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Community Support</h3>
                    <p className="mt-5 text-base text-gray-300">
                      Connect with like-minded fitness enthusiasts. Share your progress, join challenges, and stay
                      motivated together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-900 py-16 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative py-16 bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="relative px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Trusted by fitness enthusiasts worldwide
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  See what our users are saying about their experience with FitTrack
                </p>
              </div>
              <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-1 bg-gray-700 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-blue-400">Weight Loss Journey</p>
                      <div className="block mt-2">
                        <p className="text-xl font-semibold text-white">Sarah K.</p>
                        <p className="mt-3 text-base text-gray-300">
                          "I lost 25 pounds and gained so much strength with FitTrack's Premium Plan! The personalized
                          nutrition coaching made all the difference for me."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-1 bg-gray-700 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-blue-400">Marathon Training</p>
                      <div className="block mt-2">
                        <p className="text-xl font-semibold text-white">Robert T.</p>
                        <p className="mt-3 text-base text-gray-300">
                          "The workout tracking features helped me prepare for my first marathon. I could see my
                          progress week by week and stay motivated."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-1 bg-gray-700 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-blue-400">Strength Building</p>
                      <div className="block mt-2">
                        <p className="text-xl font-semibold text-white">Alex J.</p>
                        <p className="mt-3 text-base text-gray-300">
                          "The community challenges keep me motivated. I've gained significant muscle mass and improved
                          my overall fitness level."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to start your fitness journey?</span>
            <span className="block">Get started today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Join thousands of users who have transformed their lives with FitTrack.
          </p>
          <Link
            href="/plans"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 sm:w-auto"
          >
            View Plans
          </Link>
        </div>
      </div>
    </div>
  )
}

