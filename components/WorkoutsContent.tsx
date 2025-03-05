"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Search, Filter, ChevronDown, Play, Clock, Calendar, BarChart, Dumbbell, Heart, Plus } from "lucide-react"

export default function WorkoutsContent() {
  const [darkMode, setDarkMode] = useState(true)
  const [activeTab, setActiveTab] = useState("my-workouts")

  // Check for dark mode from localStorage or document class
  useEffect(() => {
    if (typeof window !== "undefined") {
      setDarkMode(document.documentElement.classList.contains("dark"))
    }
  }, [])

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Workouts</h1>
          <p className={`mt-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Discover and track your workouts to reach your fitness goals.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab("my-workouts")}
            className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
              activeTab === "my-workouts"
                ? `${darkMode ? "text-blue-400 border-blue-400" : "text-blue-600 border-blue-600"} border-b-2`
                : `${darkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"}`
            }`}
          >
            My Workouts
          </button>
          <button
            onClick={() => setActiveTab("discover")}
            className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
              activeTab === "discover"
                ? `${darkMode ? "text-blue-400 border-blue-400" : "text-blue-600 border-blue-600"} border-b-2`
                : `${darkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"}`
            }`}
          >
            Discover
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
              activeTab === "history"
                ? `${darkMode ? "text-blue-400 border-blue-400" : "text-blue-600 border-blue-600"} border-b-2`
                : `${darkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"}`
            }`}
          >
            History
          </button>
          <button
            onClick={() => setActiveTab("programs")}
            className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
              activeTab === "programs"
                ? `${darkMode ? "text-blue-400 border-blue-400" : "text-blue-600 border-blue-600"} border-b-2`
                : `${darkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"}`
            }`}
          >
            Programs
          </button>
        </div>

        {/* My Workouts Tab */}
        {activeTab === "my-workouts" && (
          <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h2 className="text-2xl font-bold mb-2 md:mb-0">My Workouts</h2>
              <div className="flex space-x-2">
                <div className={`relative rounded-lg ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search workouts..."
                    className={`block w-full pl-10 pr-3 py-2 rounded-lg text-sm ${
                      darkMode
                        ? "bg-gray-800 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                        : "bg-gray-100 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                    } border-none`}
                  />
                </div>
                <button
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium ${darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-600 hover:bg-blue-700"} text-white`}
                >
                  <Plus className="h-4 w-4 inline mr-1" />
                  Create
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <WorkoutCard
                title="Upper Body Strength"
                category="Strength"
                time="45 min"
                level="Intermediate"
                exercises={8}
                image="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                darkMode={darkMode}
              />
              <WorkoutCard
                title="HIIT Cardio Blast"
                category="Cardio"
                time="30 min"
                level="Advanced"
                exercises={12}
                image="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                darkMode={darkMode}
              />
              <WorkoutCard
                title="Core Crusher"
                category="Strength"
                time="20 min"
                level="Beginner"
                exercises={6}
                image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                darkMode={darkMode}
              />
              <WorkoutCard
                title="Lower Body Focus"
                category="Strength"
                time="40 min"
                level="Intermediate"
                exercises={10}
                image="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                darkMode={darkMode}
              />
              <WorkoutCard
                title="Full Body Circuit"
                category="Circuit"
                time="50 min"
                level="Intermediate"
                exercises={15}
                image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                darkMode={darkMode}
              />
              <WorkoutCard
                title="Yoga Flow"
                category="Flexibility"
                time="35 min"
                level="All Levels"
                exercises={12}
                image="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                darkMode={darkMode}
              />
            </div>
          </div>
        )}

        {/* Discover Tab */}
        {activeTab === "discover" && (
          <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h2 className="text-2xl font-bold mb-2 md:mb-0">Discover Workouts</h2>
              <div className="flex space-x-2">
                <div className={`relative rounded-lg ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search workouts..."
                    className={`block w-full pl-10 pr-3 py-2 rounded-lg text-sm ${
                      darkMode
                        ? "bg-gray-800 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                        : "bg-gray-100 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                    } border-none`}
                  />
                </div>
                <button
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"}`}
                >
                  <Filter className="h-4 w-4 inline mr-1" />
                  Filter
                </button>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Popular Categories</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <CategoryCard title="Strength" icon="fitness_center" color="bg-blue-500" darkMode={darkMode} />
                <CategoryCard title="Cardio" icon="directions_run" color="bg-red-500" darkMode={darkMode} />
                <CategoryCard title="HIIT" icon="timer" color="bg-green-500" darkMode={darkMode} />
                <CategoryCard title="Yoga" icon="self_improvement" color="bg-purple-500" darkMode={darkMode} />
                <CategoryCard title="Pilates" icon="accessibility_new" color="bg-pink-500" darkMode={darkMode} />
                <CategoryCard title="Stretching" icon="sports_gymnastics" color="bg-yellow-500" darkMode={darkMode} />
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Trending Workouts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <WorkoutCard
                  title="30-Day Strength Challenge"
                  category="Program"
                  time="30 days"
                  level="All Levels"
                  exercises={30}
                  image="https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  darkMode={darkMode}
                  trending={true}
                />
                <WorkoutCard
                  title="15-Minute HIIT Burner"
                  category="Cardio"
                  time="15 min"
                  level="Intermediate"
                  exercises={8}
                  image="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  darkMode={darkMode}
                  trending={true}
                />
                <WorkoutCard
                  title="Full Body Dumbbell Workout"
                  category="Strength"
                  time="45 min"
                  level="Beginner"
                  exercises={12}
                  image="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  darkMode={darkMode}
                  trending={true}
                />
              </div>
            </div>
          </div>
        )}

        {/* History Tab */}
        {activeTab === "history" && (
          <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h2 className="text-2xl font-bold mb-2 md:mb-0">Workout History</h2>
              <div className="flex space-x-2">
                <button
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"}`}
                >
                  <ChevronDown className="h-4 w-4 inline mr-1" />
                  This Month
                </button>
                <button
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"}`}
                >
                  <Filter className="h-4 w-4 inline mr-1" />
                  Filter
                </button>
              </div>
            </div>

            <div
              className={`rounded-xl shadow-sm ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border mb-8`}
            >
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                      >
                        Workout
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                      >
                        Duration
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                      >
                        Calories
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${darkMode ? "divide-gray-700" : "divide-gray-200"}`}>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">Today, 10:30 AM</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="p-2 rounded-full bg-blue-500 bg-opacity-10 mr-3">
                            <Dumbbell className="h-5 w-5 text-blue-500" />
                          </div>
                          <div>
                            <div className="font-medium">Upper Body Strength</div>
                            <div className="text-sm text-gray-400">Strength</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">45 min</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">320</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">Yesterday, 7:00 AM</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="p-2 rounded-full bg-red-500 bg-opacity-10 mr-3">
                            <Dumbbell className="h-5 w-5 text-red-500" />
                          </div>
                          <div>
                            <div className="font-medium">HIIT Cardio Blast</div>
                            <div className="text-sm text-gray-400">Cardio</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">30 min</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">280</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">2 days ago, 6:30 PM</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="p-2 rounded-full bg-green-500 bg-opacity-10 mr-3">
                            <Dumbbell className="h-5 w-5 text-green-500" />
                          </div>
                          <div>
                            <div className="font-medium">Core Crusher</div>
                            <div className="text-sm text-gray-400">Strength</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">20 min</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">180</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">3 days ago, 8:00 AM</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="p-2 rounded-full bg-purple-500 bg-opacity-10 mr-3">
                            <Dumbbell className="h-5 w-5 text-purple-500" />
                          </div>
                          <div>
                            <div className="font-medium">Yoga Flow</div>
                            <div className="text-sm text-gray-400">Flexibility</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">35 min</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">150</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Completed
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div
                className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border`}
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-blue-500 bg-opacity-10">
                    <Calendar className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-sm font-medium text-gray-400">This Month</h2>
                    <p className="text-2xl font-semibold">12 Workouts</p>
                  </div>
                </div>
              </div>
              <div
                className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border`}
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-green-500 bg-opacity-10">
                    <Clock className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-sm font-medium text-gray-400">Total Time</h2>
                    <p className="text-2xl font-semibold">8h 45m</p>
                  </div>
                </div>
              </div>
              <div
                className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border`}
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-red-500 bg-opacity-10">
                    <BarChart className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-sm font-medium text-gray-400">Calories Burned</h2>
                    <p className="text-2xl font-semibold">4,320</p>
                  </div>
                </div>
              </div>
              <div
                className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border`}
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-purple-500 bg-opacity-10">
                    <Heart className="h-6 w-6 text-purple-500" />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-sm font-medium text-gray-400">Avg. Heart Rate</h2>
                    <p className="text-2xl font-semibold">142 bpm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Programs Tab */}
        {activeTab === "programs" && (
          <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h2 className="text-2xl font-bold mb-2 md:mb-0">Training Programs</h2>
              <div className="flex space-x-2">
                <div className={`relative rounded-lg ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search programs..."
                    className={`block w-full pl-10 pr-3 py-2 rounded-lg text-sm ${
                      darkMode
                        ? "bg-gray-800 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                        : "bg-gray-100 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                    } border-none`}
                  />
                </div>
                <button
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"}`}
                >
                  <Filter className="h-4 w-4 inline mr-1" />
                  Filter
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <ProgramCard
                title="30-Day Strength Challenge"
                category="Strength"
                duration="4 weeks"
                level="Intermediate"
                workouts={20}
                image="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                progress={65}
                darkMode={darkMode}
              />
              <ProgramCard
                title="Couch to 5K"
                category="Cardio"
                duration="8 weeks"
                level="Beginner"
                workouts={24}
                image="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                progress={0}
                darkMode={darkMode}
              />
              <ProgramCard
                title="Full Body Transformation"
                category="Mixed"
                duration="12 weeks"
                level="Advanced"
                workouts={36}
                image="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                progress={0}
                darkMode={darkMode}
              />
              <ProgramCard
                title="Yoga for Beginners"
                category="Flexibility"
                duration="4 weeks"
                level="Beginner"
                workouts={16}
                image="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                progress={0}
                darkMode={darkMode}
              />
              <ProgramCard
                title="HIIT Fat Burner"
                category="Cardio"
                duration="6 weeks"
                level="Intermediate"
                workouts={18}
                image="https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                progress={0}
                darkMode={darkMode}
              />
              <ProgramCard
                title="Core Strength Builder"
                category="Strength"
                duration="4 weeks"
                level="All Levels"
                workouts={12}
                image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                progress={0}
                darkMode={darkMode}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

interface WorkoutCardProps {
  title: string
  category: string
  time: string
  level: string
  exercises: number
  image: string
  darkMode: boolean
  trending?: boolean
}

function WorkoutCard({ title, category, time, level, exercises, image, darkMode, trending = false }: WorkoutCardProps) {
  return (
    <div
      className={`rounded-xl shadow-sm overflow-hidden ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border relative`}
    >
      {trending && (
        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          TRENDING
        </div>
      )}
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-0 left-0 m-3 px-2 py-1 bg-blue-600 rounded-full text-xs font-medium text-white">
          {category}
        </div>
        <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-200">
          <div className="bg-white bg-opacity-90 rounded-full p-3">
            <Play className="h-8 w-8 text-blue-600" />
          </div>
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-gray-400" />
            <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{time}</span>
          </div>
          <div className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{exercises} exercises</div>
        </div>
        <div className="flex items-center justify-between">
          <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>{level}</span>
          <button
            className={`px-3 py-1 rounded-lg text-xs font-medium ${darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-600 hover:bg-blue-700"} text-white`}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  )
}

interface CategoryCardProps {
  title: string
  icon: string
  color: string
  darkMode: boolean
}

function CategoryCard({ title, icon, color, darkMode }: CategoryCardProps) {
  return (
    <div
      className={`rounded-xl shadow-sm overflow-hidden ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border p-4 text-center cursor-pointer hover:shadow-md transition-shadow duration-200`}
    >
      <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center mx-auto mb-3`}>
        <span className="material-symbols-outlined text-white">{icon}</span>
      </div>
      <h3 className="font-medium text-sm">{title}</h3>
    </div>
  )
}

interface ProgramCardProps {
  title: string
  category: string
  duration: string
  level: string
  workouts: number
  image: string
  progress: number
  darkMode: boolean
}

function ProgramCard({ title, category, duration, level, workouts, image, progress, darkMode }: ProgramCardProps) {
  return (
    <div
      className={`rounded-xl shadow-sm overflow-hidden ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border`}
    >
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-0 left-0 m-3 px-2 py-1 bg-blue-600 rounded-full text-xs font-medium text-white">
          {category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1 text-gray-400" />
            <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{duration}</span>
          </div>
          <div className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{workouts} workouts</div>
        </div>
        {progress > 0 ? (
          <div className="mb-3">
            <div className="flex justify-between text-xs mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-1.5">
              <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        ) : (
          <div className="mb-3">
            <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Level: {level}</span>
          </div>
        )}
        <button
          className={`w-full py-2 rounded-lg text-sm font-medium ${progress > 0 ? "bg-blue-600 hover:bg-blue-700 text-white" : darkMode ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-800"}`}
        >
          {progress > 0 ? "Continue" : "Start Program"}
        </button>
      </div>
    </div>
  )
}

