"use client"

import { useState, useEffect } from "react"
import { Check, ArrowRight } from "lucide-react"

export default function PlansContent() {
  const [darkMode, setDarkMode] = useState(true)

  // Check for dark mode from localStorage or document class
  useEffect(() => {
    if (typeof window !== "undefined") {
      setDarkMode(document.documentElement.classList.contains("dark"))
    }
  }, [])

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">Choose Your Fitness Plan</h1>
          <p className={`max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Select the perfect plan to achieve your fitness goals. All plans include access to our mobile app and
            personalized support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <PlanCard
            title="Basic"
            price={9.99}
            description="Perfect for beginners looking to start their fitness journey"
            features={[
              "Personalized workout plans",
              "Basic nutrition tracking",
              "Access to workout library",
              "Progress tracking",
              "Community forum access",
            ]}
            darkMode={darkMode}
            popular={false}
            image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
          />
          <PlanCard
            title="Premium"
            price={19.99}
            description="Our most popular plan for serious fitness enthusiasts"
            features={[
              "Everything in Basic",
              "Advanced workout customization",
              "Detailed nutrition analysis",
              "Video exercise guides",
              "Weekly progress reports",
              "Priority support",
            ]}
            darkMode={darkMode}
            popular={true}
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
          />
          <PlanCard
            title="Elite"
            price={29.99}
            description="The ultimate fitness experience with personal coaching"
            features={[
              "Everything in Premium",
              "1-on-1 virtual coaching sessions",
              "Custom meal plans",
              "Advanced performance analytics",
              "Exclusive content and challenges",
              "24/7 priority support",
            ]}
            darkMode={darkMode}
            popular={false}
            image="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
          />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Compare Plans</h2>
          <div
            className={`rounded-xl shadow-sm overflow-hidden ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border`}
          >
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                    >
                      Feature
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider"
                    >
                      Basic
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-blue-400 uppercase tracking-wider"
                    >
                      Premium
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider"
                    >
                      Elite
                    </th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${darkMode ? "divide-gray-700" : "divide-gray-200"}`}>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Workout Plans</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Basic Plans</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Advanced Plans</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Custom Plans</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Nutrition Tracking</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Basic</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Advanced</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Custom Meal Plans</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Progress Tracking</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Exercise Library</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">100+ Exercises</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">300+ Exercises</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">500+ Exercises</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Video Guides</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      <span className="inline-block h-5 w-5 text-red-500 mx-auto">✕</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Personal Coaching</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      <span className="inline-block h-5 w-5 text-red-500 mx-auto">✕</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      <span className="inline-block h-5 w-5 text-red-500 mx-auto">✕</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Support</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Email Support</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Priority Support</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">24/7 Support</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border`}
            >
              <h3 className="font-bold text-lg mb-2">Can I change plans later?</h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Yes, you can upgrade or downgrade your plan at any time. Changes will be applied at the start of your
                next billing cycle.
              </p>
            </div>
            <div
              className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border`}
            >
              <h3 className="font-bold text-lg mb-2">Is there a free trial?</h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                We offer a 7-day free trial for all new users. You can try any plan and cancel anytime during the trial
                period.
              </p>
            </div>
            <div
              className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border`}
            >
              <h3 className="font-bold text-lg mb-2">How do I cancel my subscription?</h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                You can cancel your subscription at any time from your account settings. Your access will continue until
                the end of your current billing period.
              </p>
            </div>
            <div
              className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border`}
            >
              <h3 className="font-bold text-lg mb-2">Do you offer refunds?</h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                We offer a 30-day money-back guarantee if you're not satisfied with our service. Contact our support
                team to process your refund.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`rounded-xl shadow-sm p-8 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border text-center`}
        >
          <h2 className="text-2xl font-bold mb-2">Still have questions?</h2>
          <p className={`max-w-2xl mx-auto mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Our team is here to help you choose the right plan for your fitness journey. Contact us for personalized
            assistance.
          </p>
          <button
            className={`px-6 py-3 rounded-lg font-medium ${darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-600 hover:bg-blue-700"} text-white`}
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  )
}

interface PlanCardProps {
  title: string
  price: number
  description: string
  features: string[]
  darkMode: boolean
  popular: boolean
  image: string
}

function PlanCard({ title, price, description, features, darkMode, popular, image }: PlanCardProps) {
  return (
    <div
      className={`rounded-xl shadow-sm overflow-hidden ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border relative ${popular ? "border-blue-500 transform scale-105 z-10" : ""}`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          MOST POPULAR
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-4xl font-extrabold">${price}</span>
          <span className={`ml-1 text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>/month</span>
        </div>
        <p className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{description}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className={`h-5 w-5 ${popular ? "text-blue-500" : "text-green-500"} mr-2 flex-shrink-0 mt-0.5`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button
          className={`w-full py-3 rounded-lg font-medium ${popular ? "bg-blue-600 hover:bg-blue-700 text-white" : darkMode ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-800"} flex items-center justify-center`}
        >
          Choose Plan
          <ArrowRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  )
}

