"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, User, Bell, Mail, Plus, ThumbsUp, MessageCircle, Share, MoreHorizontal } from 'lucide-react'
import ThemeProvider from '@/components/ThemeProvider'
import CommunityContent from '@/components/CommunityContent'

export default function Community() {
  return (
    <ThemeProvider>
      <CommunityContent />
    </ThemeProvider>
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

