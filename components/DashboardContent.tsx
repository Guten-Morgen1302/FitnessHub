"use client"

import { useState, useEffect } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"
import { Calendar, Clock, TrendingUp, Dumbbell, Utensils, Heart } from "lucide-react"

export default function DashboardContent() {
  const [darkMode, setDarkMode] = useState(true)

  // Check for dark mode from localStorage or document class
  useEffect(() => {
    if (typeof window !== "undefined") {
      setDarkMode(document.documentElement.classList.contains("dark"))
    }
  }, [])

  // Sample data for charts
  const workoutData = [
    { name: "Mon", minutes: 45 },
    { name: "Tue", minutes: 30 },
    { name: "Wed", minutes: 60 },
    { name: "Thu", minutes: 0 },
    { name: "Fri", minutes: 45 },
    { name: "Sat", minutes: 90 },
    { name: "Sun", minutes: 30 },
  ]

  const calorieData = [
    { name: "Mon", calories: 2100 },
    { name: "Tue", calories: 1950 },
    { name: "Wed", calories: 2200 },
    { name: "Thu", calories: 2050 },
    { name: "Fri", calories: 2300 },
    { name: "Sat", calories: 2500 },
    { name: "Sun", calories: 2150 },
  ]

  const nutritionData = [
    { name: "Protein", value: 30 },
    { name: "Carbs", value: 45 },
    { name: "Fat", value: 25 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"]

  const progressData = [
    { name: "Week 1", progress: 65 },
    { name: "Week 2", progress: 70 },
    { name: "Week 3", progress: 68 },
    { name: "Week 4", progress: 75 },
    { name: "Week 5", progress: 80 },
    { name: "Week 6", progress: 85 },
  ]

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className={`mt-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Welcome back, Harsh! Here's an overview of your fitness journey.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div
            className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border`}
          >
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-500 bg-opacity-10">
                <Dumbbell className="h-6 w-6 text-blue-500" />
              </div>
              <div className="ml-4">
                <h2 className="text-sm font-medium text-gray-400">Weekly Workouts</h2>
                <p className="text-2xl font-semibold">5 / 7</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "71%" }}></div>
              </div>
            </div>
          </div>

          <div
            className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border`}
          >
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-500 bg-opacity-10">
                <TrendingUp className="h-6 w-6 text-green-500" />
              </div>
              <div className="ml-4">
                <h2 className="text-sm font-medium text-gray-400">Active Minutes</h2>
                <p className="text-2xl font-semibold">300 / 400</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>
          </div>

          <div
            className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border`}
          >
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-500 bg-opacity-10">
                <Utensils className="h-6 w-6 text-purple-500" />
              </div>
              <div className="ml-4">
                <h2 className="text-sm font-medium text-gray-400">Calorie Goal</h2>
                <p className="text-2xl font-semibold">2150 / 2200</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: "98%" }}></div>
              </div>
            </div>
          </div>

          <div
            className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border`}
          >
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-red-500 bg-opacity-10">
                <Heart className="h-6 w-6 text-red-500" />
              </div>
              <div className="ml-4">
                <h2 className="text-sm font-medium text-gray-400">Avg. Heart Rate</h2>
                <p className="text-2xl font-semibold">72 bpm</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <span className="text-green-500 flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  5% better than last week
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div
            className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border`}
          >
            <h2 className="text-xl font-bold mb-4">Weekly Workout Minutes</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={workoutData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#374151" : "#e5e7eb"} />
                  <XAxis dataKey="name" stroke={darkMode ? "#9ca3af" : "#6b7280"} />
                  <YAxis stroke={darkMode ? "#9ca3af" : "#6b7280"} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: darkMode ? "#1f2937" : "#ffffff",
                      borderColor: darkMode ? "#374151" : "#e5e7eb",
                      color: darkMode ? "#ffffff" : "#000000",
                    }}
                  />
                  <Bar dataKey="minutes" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div
            className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border`}
          >
            <h2 className="text-xl font-bold mb-4">Calorie Intake</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={calorieData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#374151" : "#e5e7eb"} />
                  <XAxis dataKey="name" stroke={darkMode ? "#9ca3af" : "#6b7280"} />
                  <YAxis stroke={darkMode ? "#9ca3af" : "#6b7280"} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: darkMode ? "#1f2937" : "#ffffff",
                      borderColor: darkMode ? "#374151" : "#e5e7eb",
                      color: darkMode ? "#ffffff" : "#000000",
                    }}
                  />
                  <Line type="monotone" dataKey="calories" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div
            className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border`}
          >
            <h2 className="text-xl font-bold mb-4">Nutrition Breakdown</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={nutritionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {nutritionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: darkMode ? "#1f2937" : "#ffffff",
                      borderColor: darkMode ? "#374151" : "#e5e7eb",
                      color: darkMode ? "#ffffff" : "#000000",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div
            className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border`}
          >
            <h2 className="text-xl font-bold mb-4">Progress Tracker</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={progressData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#374151" : "#e5e7eb"} />
                  <XAxis dataKey="name" stroke={darkMode ? "#9ca3af" : "#6b7280"} />
                  <YAxis stroke={darkMode ? "#9ca3af" : "#6b7280"} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: darkMode ? "#1f2937" : "#ffffff",
                      borderColor: darkMode ? "#374151" : "#e5e7eb",
                      color: darkMode ? "#ffffff" : "#000000",
                    }}
                  />
                  <Line type="monotone" dataKey="progress" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div
            className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border`}
          >
            <h2 className="text-xl font-bold mb-4">Upcoming Workouts</h2>
            <div className="space-y-4">
              <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-blue-500 bg-opacity-10 mr-3">
                    <Dumbbell className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Upper Body Strength</h3>
                    <div className="flex items-center text-sm text-gray-400 mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Today</span>
                      <Clock className="h-4 w-4 ml-3 mr-1" />
                      <span>6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-green-500 bg-opacity-10 mr-3">
                    <Dumbbell className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">HIIT Cardio</h3>
                    <div className="flex items-center text-sm text-gray-400 mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Tomorrow</span>
                      <Clock className="h-4 w-4 ml-3 mr-1" />
                      <span>7:30 AM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-purple-500 bg-opacity-10 mr-3">
                    <Dumbbell className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Yoga & Stretching</h3>
                    <div className="flex items-center text-sm text-gray-400 mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Wednesday</span>
                      <Clock className="h-4 w-4 ml-3 mr-1" />
                      <span>6:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div
          className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border mb-8`}
        >
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                  >
                    Activity
                  </th>
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
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-blue-500 bg-opacity-10 mr-3">
                        <Dumbbell className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <div className="font-medium">Strength Training</div>
                        <div className="text-sm text-gray-400">Upper Body</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Today, 10:30 AM</td>
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
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-green-500 bg-opacity-10 mr-3">
                        <Dumbbell className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <div className="font-medium">Running</div>
                        <div className="text-sm text-gray-400">Outdoor</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Yesterday, 7:00 AM</td>
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
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-purple-500 bg-opacity-10 mr-3">
                        <Dumbbell className="h-5 w-5 text-purple-500" />
                      </div>
                      <div>
                        <div className="font-medium">Yoga</div>
                        <div className="text-sm text-gray-400">Flexibility</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">2 days ago, 6:30 PM</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">60 min</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">180</td>
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
      </div>
    </div>
  )
}

