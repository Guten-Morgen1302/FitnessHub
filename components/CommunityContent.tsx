"use client"

import { useState } from "react"
import Image from "next/image"
import { User, Plus, ThumbsUp, MessageCircle, Share, MoreHorizontal } from "lucide-react"

export default function CommunityContent() {
  const [darkMode, setDarkMode] = useState(true)

  // Check for dark mode from localStorage or document class
  useState(() => {
    if (typeof window !== "undefined") {
      setDarkMode(document.documentElement.classList.contains("dark"))
    }
  })

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div
              className={`rounded-xl ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border shadow-sm p-4 mb-6`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white">AJ</div>
                <div>
                  <h3 className="font-bold">Harsh Patil</h3>
                  <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>@Harsh Patil</p>
                </div>
              </div>
              <div className={`grid grid-cols-2 gap-2 p-2 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"} mb-4`}>
                <div className="text-center">
                  <p className="text-sm font-medium">Followers</p>
                  <p className={`font-bold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>245</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium">Following</p>
                  <p className={`font-bold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>186</p>
                </div>
              </div>
              <button
                className={`w-full py-2 px-4 rounded-lg ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"} flex items-center justify-center space-x-2 transition-colors duration-200`}
              >
                <User size={16} />
                <span className="text-sm font-medium">View Profile</span>
              </button>
            </div>

            <div
              className={`rounded-xl ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border shadow-sm p-4 mb-6`}
            >
              <h3 className="font-bold mb-3">Fitness Groups</h3>
              <div className="space-y-2">
                <FitnessGroup
                  name="Running Club"
                  members={12453}
                  icon="directions_run"
                  bgColor="bg-green-500"
                  textColor="text-white"
                  darkMode={darkMode}
                />
                <FitnessGroup
                  name="Weight Training"
                  members={8976}
                  icon="fitness_center"
                  bgColor="bg-red-500"
                  textColor="text-white"
                  darkMode={darkMode}
                />
                <FitnessGroup
                  name="Yoga & Meditation"
                  members={5432}
                  icon="self_improvement"
                  bgColor="bg-purple-500"
                  textColor="text-white"
                  darkMode={darkMode}
                />
                <FitnessGroup
                  name="Nutrition Tips"
                  members={9821}
                  icon="restaurant"
                  bgColor="bg-yellow-500"
                  textColor="text-white"
                  darkMode={darkMode}
                />
                <FitnessGroup
                  name="Cardio Workouts"
                  members={7654}
                  icon="monitor_heart"
                  bgColor="bg-blue-500"
                  textColor="text-white"
                  darkMode={darkMode}
                />
              </div>
              <button
                className={`w-full mt-3 py-2 px-4 rounded-lg ${darkMode ? "bg-gray-700 hover:bg-gray-600 text-gray-300" : "bg-gray-100 hover:bg-gray-200 text-gray-700"} flex items-center justify-center space-x-2 transition-colors duration-200`}
              >
                <Plus size={16} />
                <span className="text-sm font-medium">Discover More Groups</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div
              className={`rounded-xl ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border shadow-sm p-4 mb-6`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">AJ</div>
                <div className={`flex-1 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"} p-2`}>
                  <input
                    type="text"
                    placeholder="Share your fitness journey..."
                    className={`w-full bg-transparent border-0 focus:ring-0 ${darkMode ? "placeholder-gray-500 text-white" : "placeholder-gray-400 text-gray-900"}`}
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  className={`flex items-center space-x-2 py-1 px-3 rounded-full ${darkMode ? "bg-gray-700 hover:bg-gray-600 text-gray-300" : "bg-gray-100 hover:bg-gray-200 text-gray-700"} transition-colors duration-200`}
                >
                  <span className="material-symbols-outlined text-sm">image</span>
                  <span className="text-sm">Photo</span>
                </button>
                <button
                  className={`flex items-center space-x-2 py-1 px-3 rounded-full ${darkMode ? "bg-gray-700 hover:bg-gray-600 text-gray-300" : "bg-gray-100 hover:bg-gray-200 text-gray-700"} transition-colors duration-200`}
                >
                  <span className="material-symbols-outlined text-sm">videocam</span>
                  <span className="text-sm">Video</span>
                </button>
                <button
                  className={`flex items-center space-x-2 py-1 px-3 rounded-full ${darkMode ? "bg-gray-700 hover:bg-gray-600 text-gray-300" : "bg-gray-100 hover:bg-gray-200 text-gray-700"} transition-colors duration-200`}
                >
                  <span className="material-symbols-outlined text-sm">event</span>
                  <span className="text-sm">Event</span>
                </button>
                <button
                  className={`flex items-center space-x-2 py-1 px-3 rounded-full ${darkMode ? "bg-gray-700 hover:bg-gray-600 text-gray-300" : "bg-gray-100 hover:bg-gray-200 text-gray-700"} transition-colors duration-200`}
                >
                  <span className="material-symbols-outlined text-sm">directions_run</span>
                  <span className="text-sm">Workout</span>
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <SocialPost
                user={{
                  name: "Sarah Williams",
                  image: "/placeholder.svg?height=40&width=40",
                  timeAgo: "2 hours ago",
                }}
                content="Just completed my first 10K run! So proud of my progress over the last few months. The interval training program from FitTrack has been a game changer for my endurance."
                image="/placeholder.svg?height=400&width=600"
                tags={["running", "10K", "fitness", "achievement"]}
                reactions={89}
                comments={24}
                shares={7}
                darkMode={darkMode}
              />

              <SocialPost
                user={{
                  name: "Mike Chen",
                  image: "/placeholder.svg?height=40&width=40",
                  timeAgo: "5 hours ago",
                }}
                content="Today's HIIT session was intense! Pushing my limits with every workout."
                activityData={{
                  type: "HIIT Workout",
                  date: "Today, 9:30 AM",
                  stats: [
                    { label: "Duration", value: "45 min" },
                    { label: "Calories", value: "520" },
                    { label: "Heart Rate", value: "155 bpm" },
                  ],
                  bgColor: "from-blue-50 to-blue-100",
                  iconColor: "text-blue-600",
                  icon: "local_fire_department",
                }}
                tags={["HIIT", "workout", "fitness"]}
                reactions={56}
                comments={12}
                shares={3}
                darkMode={darkMode}
              />

              <SocialPost
                user={{
                  name: "Emma Rodriguez",
                  image: "/placeholder.svg?height=40&width=40",
                  timeAgo: "Yesterday",
                }}
                content="Meal prep Sunday! Preparing healthy meals for the week ahead. What are your favorite meal prep recipes?"
                image="/placeholder.svg?height=400&width=600"
                tags={["mealprep", "nutrition", "healthyeating"]}
                tagColor="text-green-600 bg-green-50 hover:bg-green-100"
                reactions={112}
                comments={43}
                shares={15}
                darkMode={darkMode}
              />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full md:w-80 flex-shrink-0">
            <div
              className={`rounded-xl ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border shadow-sm p-4 mb-6`}
            >
              <h3 className="font-bold mb-3">Upcoming Events</h3>
              <div className="space-y-3">
                <div className={`p-3 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                  <div className="flex justify-between items-start">
                    <div
                      className={`px-2 py-1 rounded-md text-xs font-medium ${darkMode ? "bg-blue-900 text-blue-300" : "bg-blue-100 text-blue-800"}`}
                    >
                      MAR 15
                    </div>
                    <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>10:00 AM</span>
                  </div>
                  <h4 className="font-medium mt-2">Spring Marathon Training</h4>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"} mt-1`}>
                    Join our group for the first training session for the upcoming spring marathon.
                  </p>
                  <div className="flex items-center mt-2">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                        S
                      </div>
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                        M
                      </div>
                      <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs">
                        J
                      </div>
                    </div>
                    <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"} ml-3`}>+18 going</span>
                  </div>
                </div>

                <div className={`p-3 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                  <div className="flex justify-between items-start">
                    <div
                      className={`px-2 py-1 rounded-md text-xs font-medium ${darkMode ? "bg-green-900 text-green-300" : "bg-green-100 text-green-800"}`}
                    >
                      MAR 20
                    </div>
                    <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>6:30 PM</span>
                  </div>
                  <h4 className="font-medium mt-2">Nutrition Workshop</h4>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"} mt-1`}>
                    Learn about optimal nutrition for athletic performance with our expert dietitian.
                  </p>
                  <div className="flex items-center mt-2">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">
                        E
                      </div>
                      <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs">
                        R
                      </div>
                    </div>
                    <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"} ml-3`}>+24 going</span>
                  </div>
                </div>
              </div>
              <button
                className={`w-full mt-3 py-2 px-4 rounded-lg ${darkMode ? "bg-gray-700 hover:bg-gray-600 text-gray-300" : "bg-gray-100 hover:bg-gray-200 text-gray-700"} flex items-center justify-center space-x-2 transition-colors duration-200`}
              >
                <span className="material-symbols-outlined text-sm">calendar_month</span>
                <span className="text-sm font-medium">View All Events</span>
              </button>
            </div>

            <div
              className={`rounded-xl ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border shadow-sm p-4`}
            >
              <h3 className="font-bold mb-3">Trending Challenges</h3>
              <div className="space-y-3">
                <div className={`p-3 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"} relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 -mt-10 -mr-10 bg-blue-500 rounded-full opacity-20"></div>
                  <h4 className="font-medium">30-Day Plank Challenge</h4>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"} mt-1`}>
                    Build core strength with daily planks
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                      1,245 participants
                    </span>
                    <button
                      className={`px-2 py-1 rounded-md text-xs font-medium ${darkMode ? "bg-blue-900 text-blue-300 hover:bg-blue-800" : "bg-blue-100 text-blue-800 hover:bg-blue-200"} transition-colors duration-200`}
                    >
                      Join
                    </button>
                  </div>
                </div>

                <div className={`p-3 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"} relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 -mt-10 -mr-10 bg-green-500 rounded-full opacity-20"></div>
                  <h4 className="font-medium">10K Steps Daily</h4>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"} mt-1`}>
                    Walk 10,000 steps every day for a month
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                      3,782 participants
                    </span>
                    <button
                      className={`px-2 py-1 rounded-md text-xs font-medium ${darkMode ? "bg-green-900 text-green-300 hover:bg-green-800" : "bg-green-100 text-green-800 hover:bg-green-200"} transition-colors duration-200`}
                    >
                      Join
                    </button>
                  </div>
                </div>

                <div className={`p-3 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"} relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 -mt-10 -mr-10 bg-purple-500 rounded-full opacity-20"></div>
                  <h4 className="font-medium">Water Intake Challenge</h4>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"} mt-1`}>
                    Drink 8 glasses of water daily for 2 weeks
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                      2,156 participants
                    </span>
                    <button
                      className={`px-2 py-1 rounded-md text-xs font-medium ${darkMode ? "bg-purple-900 text-purple-300 hover:bg-purple-800" : "bg-purple-100 text-purple-800 hover:bg-purple-200"} transition-colors duration-200`}
                    >
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface FitnessGroupProps {
  name: string
  members: number
  icon: string
  bgColor: string
  textColor: string
  darkMode: boolean
}

function FitnessGroup({ name, members, icon, bgColor, textColor, darkMode }: FitnessGroupProps) {
  return (
    <a
      href="#"
      className={`flex items-center p-2 ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"} rounded-lg transition-colors duration-200`}
    >
      <div className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center ${textColor} mr-3`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <p className="font-medium">{name}</p>
        <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{members.toLocaleString()} members</p>
      </div>
    </a>
  )
}

interface SocialPostProps {
  user: {
    name: string
    image: string
    timeAgo: string
  }
  content: string
  image?: string
  activityData?: {
    type: string
    date: string
    stats: { label: string; value: string }[]
    bgColor?: string
    iconColor?: string
    icon?: string
  }
  tags: string[]
  tagColor?: string
  reactions: number
  comments: number
  shares: number
  darkMode: boolean
}

function SocialPost({
  user,
  content,
  image,
  activityData,
  tags,
  tagColor = "text-blue-600 bg-blue-50 hover:bg-blue-100",
  reactions,
  comments,
  shares,
  darkMode,
}: SocialPostProps) {
  // Adjust colors for dark mode
  const tagColorClass = darkMode
    ? tagColor.replace("bg-blue-50", "bg-blue-900").replace("hover:bg-blue-100", "hover:bg-blue-800")
    : tagColor

  const activityBgColor =
    darkMode && activityData
      ? activityData.bgColor?.replace("from-blue-50", "from-blue-900").replace("to-blue-100", "to-blue-800")
      : activityData?.bgColor

  return (
    <div
      className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-xl shadow-sm border overflow-hidden`}
    >
      <div className="p-4">
        <div className="flex items-center space-x-3 mb-3">
          <Image
            src={user.image || "/placeholder.svg"}
            alt={user.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-bold">{user.name}</h3>
            <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{user.timeAgo}</p>
          </div>
          <button
            className={`ml-auto ${darkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-400 hover:text-gray-600"}`}
          >
            <MoreHorizontal size={20} />
          </button>
        </div>

        <p className="mb-3">{content}</p>

        {image && (
          <div className="mb-4 rounded-lg overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt="Post image"
              width={600}
              height={400}
              className="w-full h-80 object-cover"
            />
          </div>
        )}

        {activityData && (
          <div
            className={`bg-gradient-to-r ${activityBgColor || (darkMode ? "from-blue-900 to-blue-800" : "from-blue-50 to-blue-100")} rounded-lg p-3 mb-3`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className={`material-symbols-outlined ${activityData.iconColor || "text-blue-600"} mr-2`}>
                  {activityData.icon || "directions_run"}
                </span>
                <span className="font-medium">{activityData.type}</span>
              </div>
              <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{activityData.date}</span>
            </div>
            <div
              className={`grid grid-cols-${activityData.stats.length} gap-${activityData.stats.length > 3 ? "2" : "3"} text-center`}
            >
              {activityData.stats.map((stat, index) => (
                <div key={index} className={`${darkMode ? "bg-gray-700" : "bg-white"} rounded-lg p-2`}>
                  <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{stat.label}</p>
                  <p className={`font-bold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`${tagColorClass} px-2 py-1 rounded-full text-xs font-medium transition-colors duration-200 cursor-pointer`}
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className={`border-t border-b py-2 mb-3 ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
          <div className="flex justify-between text-sm">
            <div className="flex items-center space-x-1">
              <div className="flex -space-x-1">
                <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                  <span className="text-white text-xs">❤️</span>
                </div>
                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-xs">👍</span>
                </div>
              </div>
              <span>{reactions} reactions</span>
            </div>
            <div className={darkMode ? "text-gray-400" : "text-gray-500"}>
              {comments} comments • {shares} shares
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            className={`flex items-center justify-center space-x-2 flex-1 py-1 rounded-lg ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"} transition-colors duration-200`}
          >
            <ThumbsUp className={darkMode ? "text-gray-400" : "text-gray-500"} size={18} />
            <span className="text-sm font-medium">Like</span>
          </button>
          <button
            className={`flex items-center justify-center space-x-2 flex-1 py-1 rounded-lg ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"} transition-colors duration-200`}
          >
            <MessageCircle className={darkMode ? "text-gray-400" : "text-gray-500"} size={18} />
            <span className="text-sm font-medium">Comment</span>
          </button>
          <button
            className={`flex items-center justify-center space-x-2 flex-1 py-1 rounded-lg ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"} transition-colors duration-200`}
          >
            <Share className={darkMode ? "text-gray-400" : "text-gray-500"} size={18} />
            <span className="text-sm font-medium">Share</span>
          </button>
        </div>
      </div>
    </div>
  )
}

