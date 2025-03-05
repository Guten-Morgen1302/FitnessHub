"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Search, Filter, ChevronDown, Plus, ArrowRight, Clock } from "lucide-react"

export default function NutritionContent() {
  const [darkMode, setDarkMode] = useState(true)
  const [activeTab, setActiveTab] = useState("meal-plan")

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
          <h1 className="text-3xl font-bold">Nutrition</h1>
          <p className={`mt-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Track your meals, plan your diet, and reach your nutrition goals.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab("meal-plan")}
            className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
              activeTab === "meal-plan"
                ? `${darkMode ? "text-blue-400 border-blue-400" : "text-blue-600 border-blue-600"} border-b-2`
                : `${darkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"}`
            }`}
          >
            Meal Plan
          </button>
          <button
            onClick={() => setActiveTab("food-diary")}
            className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
              activeTab === "food-diary"
                ? `${darkMode ? "text-blue-400 border-blue-400" : "text-blue-600 border-blue-600"} border-b-2`
                : `${darkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"}`
            }`}
          >
            Food Diary
          </button>
          <button
            onClick={() => setActiveTab("recipes")}
            className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
              activeTab === "recipes"
                ? `${darkMode ? "text-blue-400 border-blue-400" : "text-blue-600 border-blue-600"} border-b-2`
                : `${darkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"}`
            }`}
          >
            Recipes
          </button>
          <button
            onClick={() => setActiveTab("nutrition-goals")}
            className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
              activeTab === "nutrition-goals"
                ? `${darkMode ? "text-blue-400 border-blue-400" : "text-blue-600 border-blue-600"} border-b-2`
                : `${darkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"}`
            }`}
          >
            Nutrition Goals
          </button>
        </div>

        {/* Meal Plan Tab */}
        {activeTab === "meal-plan" && (
          <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h2 className="text-2xl font-bold mb-2 md:mb-0">Today's Meal Plan</h2>
              <div className="flex space-x-2">
                <button
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"}`}
                >
                  <ChevronDown className="h-4 w-4 inline mr-1" />
                  Today
                </button>
                <button
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium ${darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-600 hover:bg-blue-700"} text-white`}
                >
                  <Plus className="h-4 w-4 inline mr-1" />
                  Add Meal
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MealCard
                title="Breakfast"
                time="7:30 AM"
                calories={450}
                image="https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                items={[
                  { name: "Greek Yogurt with Berries", calories: 220 },
                  { name: "Whole Grain Toast", calories: 120 },
                  { name: "Almond Butter", calories: 110 },
                ]}
                darkMode={darkMode}
              />
              <MealCard
                title="Lunch"
                time="12:30 PM"
                calories={650}
                image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                items={[
                  { name: "Grilled Chicken Salad", calories: 350 },
                  { name: "Quinoa", calories: 180 },
                  { name: "Olive Oil Dressing", calories: 120 },
                ]}
                darkMode={darkMode}
              />
              <MealCard
                title="Snack"
                time="3:30 PM"
                calories={200}
                image="https://images.unsplash.com/photo-1568093858174-0f391ea21c45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                items={[
                  { name: "Apple", calories: 80 },
                  { name: "Almonds (1oz)", calories: 120 },
                ]}
                darkMode={darkMode}
              />
              <MealCard
                title="Dinner"
                time="7:00 PM"
                calories={750}
                image="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                items={[
                  { name: "Grilled Salmon", calories: 350 },
                  { name: "Roasted Vegetables", calories: 180 },
                  { name: "Brown Rice", calories: 220 },
                ]}
                darkMode={darkMode}
              />
            </div>

            <div
              className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border mb-8`}
            >
              <h3 className="text-xl font-bold mb-4">Daily Nutrition Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <NutritionSummaryCard
                  title="Calories"
                  value={2050}
                  target={2200}
                  unit="kcal"
                  color="blue"
                  darkMode={darkMode}
                />
                <NutritionSummaryCard
                  title="Protein"
                  value={120}
                  target={140}
                  unit="g"
                  color="red"
                  darkMode={darkMode}
                />
                <NutritionSummaryCard
                  title="Carbs"
                  value={210}
                  target={250}
                  unit="g"
                  color="green"
                  darkMode={darkMode}
                />
                <NutritionSummaryCard title="Fat" value={65} target={70} unit="g" color="yellow" darkMode={darkMode} />
              </div>
            </div>
          </div>
        )}

        {/* Food Diary Tab */}
        {activeTab === "food-diary" && (
          <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h2 className="text-2xl font-bold mb-2 md:mb-0">Food Diary</h2>
              <div className="flex space-x-2">
                <button
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"}`}
                >
                  <ChevronDown className="h-4 w-4 inline mr-1" />
                  Today
                </button>
                <button
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium ${darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-600 hover:bg-blue-700"} text-white`}
                >
                  <Plus className="h-4 w-4 inline mr-1" />
                  Log Food
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
                        Food Item
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                      >
                        Meal
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
                        Protein
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                      >
                        Carbs
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                      >
                        Fat
                      </th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${darkMode ? "divide-y-gray-700" : "divide-y-gray-200"}`}>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium">Greek Yogurt with Berries</div>
                        <div className="text-sm text-gray-400">1 cup</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Breakfast</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">220</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">18g</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">24g</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">6g</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium">Whole Grain Toast</div>
                        <div className="text-sm text-gray-400">2 slices</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Breakfast</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">120</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">4g</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">22g</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">2g</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium">Almond Butter</div>
                        <div className="text-sm text-gray-400">1 tbsp</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Breakfast</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">110</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">3g</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">4g</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">9g</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium">Grilled Chicken Salad</div>
                        <div className="text-sm text-gray-400">1 bowl</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Lunch</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">350</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">35g</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">12g</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">18g</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium">Quinoa</div>
                        <div className="text-sm text-gray-400">1 cup</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Lunch</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">180</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">8g</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">32g</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">3g</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className={`${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                      <td className="px-6 py-3 font-medium">Total</td>
                      <td className="px-6 py-3"></td>
                      <td className="px-6 py-3 font-medium">980</td>
                      <td className="px-6 py-3 font-medium">68g</td>
                      <td className="px-6 py-3 font-medium">94g</td>
                      <td className="px-6 py-3 font-medium">38g</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Recipes Tab */}
        {activeTab === "recipes" && (
          <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h2 className="text-2xl font-bold mb-2 md:mb-0">Healthy Recipes</h2>
              <div className="flex space-x-2">
                <div className={`relative rounded-lg ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search recipes..."
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
              <RecipeCard
                title="Protein-Packed Breakfast Bowl"
                category="Breakfast"
                time="15 min"
                calories={350}
                image="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                rating={4.8}
                reviews={124}
                darkMode={darkMode}
              />
              <RecipeCard
                title="Mediterranean Quinoa Salad"
                category="Lunch"
                time="20 min"
                calories={420}
                image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                rating={4.6}
                reviews={98}
                darkMode={darkMode}
              />
              <RecipeCard
                title="Grilled Salmon with Avocado Salsa"
                category="Dinner"
                time="25 min"
                calories={520}
                image="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                rating={4.9}
                reviews={156}
                darkMode={darkMode}
              />
              <RecipeCard
                title="Vegetarian Buddha Bowl"
                category="Lunch"
                time="20 min"
                calories={380}
                image="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                rating={4.7}
                reviews={112}
                darkMode={darkMode}
              />
              <RecipeCard
                title="Protein Smoothie Bowl"
                category="Breakfast"
                time="10 min"
                calories={320}
                image="https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                rating={4.5}
                reviews={87}
                darkMode={darkMode}
              />
              <RecipeCard
                title="Baked Chicken with Vegetables"
                category="Dinner"
                time="40 min"
                calories={480}
                image="https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                rating={4.8}
                reviews={143}
                darkMode={darkMode}
              />
            </div>
          </div>
        )}

        {/* Nutrition Goals Tab */}
        {activeTab === "nutrition-goals" && (
          <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h2 className="text-2xl font-bold mb-2 md:mb-0">Nutrition Goals</h2>
              <button
                className={`px-3 py-1.5 rounded-lg text-sm font-medium ${darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-600 hover:bg-blue-700"} text-white`}
              >
                <Plus className="h-4 w-4 inline mr-1" />
                Update Goals
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div
                className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border`}
              >
                <h3 className="text-xl font-bold mb-4">Daily Targets</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Calories</span>
                      <span className="text-sm font-medium">2200 kcal</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Protein</span>
                      <span className="text-sm font-medium">140g (25%)</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "25%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Carbohydrates</span>
                      <span className="text-sm font-medium">250g (45%)</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "45%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Fat</span>
                      <span className="text-sm font-medium">70g (30%)</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Fiber</span>
                      <span className="text-sm font-medium">30g</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Sugar</span>
                      <span className="text-sm font-medium">&lt; 50g</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-pink-500 h-2.5 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border`}
              >
                <h3 className="text-xl font-bold mb-4">Nutrition Plan</h3>
                <div className="space-y-4">
                  <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                    <h4 className="font-medium">Weight Management</h4>
                    <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} mt-1`}>
                      Your current plan is set to maintain weight with a balanced macronutrient distribution.
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                    <h4 className="font-medium">Meal Frequency</h4>
                    <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} mt-1`}>
                      4 meals per day (Breakfast, Lunch, Snack, Dinner)
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                    <h4 className="font-medium">Dietary Preferences</h4>
                    <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} mt-1`}>
                      No specific restrictions. Focus on whole foods with minimal processed ingredients.
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? "bg-blue-900 bg-opacity-30" : "bg-blue-50"}`}>
                    <h4 className={`font-medium ${darkMode ? "text-blue-300" : "text-blue-800"}`}>Recommendation</h4>
                    <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} mt-1`}>
                      Consider increasing protein intake to support your strength training goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

interface MealCardProps {
  title: string
  time: string
  calories: number
  image: string
  items: { name: string; calories: number }[]
  darkMode: boolean
}

function MealCard({ title, time, calories, image, items, darkMode }: MealCardProps) {
  return (
    <div
      className={`rounded-xl shadow-sm overflow-hidden ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border`}
    >
      <div className="relative h-40">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-white font-bold text-lg">{title}</h3>
          <p className="text-gray-300 text-sm">{time}</p>
        </div>
        <div className="absolute top-0 right-0 m-3 px-2 py-1 bg-blue-600 rounded-full text-xs font-medium text-white">
          {calories} cal
        </div>
      </div>
      <div className="p-4">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{item.name}</span>
              <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{item.calories} cal</span>
            </li>
          ))}
        </ul>
        <button
          className={`mt-4 w-full py-2 rounded-lg text-sm font-medium ${darkMode ? "bg-gray-700 hover:bg-gray-600 text-gray-300" : "bg-gray-100 hover:bg-gray-200 text-gray-700"} flex items-center justify-center`}
        >
          <Plus className="h-4 w-4 mr-1" />
          Add/Edit Items
        </button>
      </div>
    </div>
  )
}

interface NutritionSummaryCardProps {
  title: string
  value: number
  target: number
  unit: string
  color: string
  darkMode: boolean
}

function NutritionSummaryCard({ title, value, target, unit, color, darkMode }: NutritionSummaryCardProps) {
  const percentage = Math.min(Math.round((value / target) * 100), 100)

  const getColorClass = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-500"
      case "red":
        return "bg-red-500"
      case "green":
        return "bg-green-500"
      case "yellow":
        return "bg-yellow-500"
      default:
        return "bg-blue-500"
    }
  }

  return (
    <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-medium">{title}</h4>
        <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
          {value} / {target} {unit}
        </span>
      </div>
      <div className="w-full bg-gray-600 rounded-full h-2.5 mb-2">
        <div className={`${getColorClass(color)} h-2.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
      </div>
      <div className="text-right text-xs font-medium">{percentage}%</div>
    </div>
  )
}

interface RecipeCardProps {
  title: string
  category: string
  time: string
  calories: number
  image: string
  rating: number
  reviews: number
  darkMode: boolean
}

function RecipeCard({ title, category, time, calories, image, rating, reviews, darkMode }: RecipeCardProps) {
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
            <Clock className="h-4 w-4 mr-1 text-gray-400" />
            <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{time}</span>
          </div>
          <div className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{calories} calories</div>
        </div>
        <div className="flex items-center mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-500"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.0340 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-sm font-medium">{rating}</span>
          <span className={`ml-2 text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>({reviews} reviews)</span>
        </div>
        <button
          className={`w-full py-2 rounded-lg text-sm font-medium ${darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-600 hover:bg-blue-700"} text-white flex items-center justify-center`}
        >
          View Recipe
          <ArrowRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  )
}

