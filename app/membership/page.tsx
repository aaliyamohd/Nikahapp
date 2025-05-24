"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Heart, ArrowLeft, Check, Crown, Star, Zap, Shield } from "lucide-react"
import Link from "next/link"

export default function MembershipPage() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "Basic",
      price: { monthly: 0, yearly: 0 },
      description: "Perfect for getting started",
      features: [
        "Create profile",
        "Browse limited profiles (10/day)",
        "Basic chat (5 messages/day)",
        "AI assistant access",
        "Basic search filters",
        "Community guidelines",
      ],
      limitations: ["Limited profile views", "Restricted messaging", "No advanced features"],
      color: "gray",
      icon: Shield,
      popular: false,
    },
    {
      name: "Premium",
      price: { monthly: 29, yearly: 290 },
      description: "Most popular for serious seekers",
      features: [
        "Unlimited profile views",
        "Unlimited messaging",
        "Advanced search filters",
        "Priority customer support",
        "Location sharing",
        "Read receipts",
        "Profile boost (2x visibility)",
        "Islamic compatibility scoring",
        "Family verification badge",
      ],
      limitations: [],
      color: "rose",
      icon: Star,
      popular: true,
    },
    {
      name: "VIP",
      price: { monthly: 59, yearly: 590 },
      description: "Ultimate matrimony experience",
      features: [
        "All Premium features",
        "Profile highlighting",
        "Dedicated matchmaker",
        "Video call feature",
        "Family verification",
        "Priority profile placement",
        "Exclusive VIP events",
        "Personal relationship advisor",
        "Background verification",
        "24/7 premium support",
      ],
      limitations: [],
      color: "purple",
      icon: Crown,
      popular: false,
    },
  ]

  const getPrice = (plan: (typeof plans)[0]) => {
    return isYearly ? plan.price.yearly : plan.price.monthly
  }

  const getSavings = (plan: (typeof plans)[0]) => {
    if (plan.price.monthly === 0) return 0
    return plan.price.monthly * 12 - plan.price.yearly
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-lg border-b border-rose-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/dashboard" className="text-rose-600 hover:text-rose-700">
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-2 rounded-full">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Membership Plans
              </h1>
            </div>
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold">
              <Zap className="w-4 h-4 mr-1" />
              Special Offer
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Billing Toggle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Perfect Plan</h2>
          <p className="text-xl text-gray-600 mb-8 font-medium">
            Find your life partner with the right membership for your journey
          </p>

          <div className="flex items-center justify-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full p-2 border border-rose-200 w-fit mx-auto">
            <span className={`font-semibold ${!isYearly ? "text-rose-600" : "text-gray-600"}`}>Monthly</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} className="data-[state=checked]:bg-rose-500" />
            <span className={`font-semibold ${isYearly ? "text-rose-600" : "text-gray-600"}`}>Yearly</span>
            {isYearly && <Badge className="bg-green-100 text-green-800 font-semibold">Save up to 17%</Badge>}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => {
            const IconComponent = plan.icon
            const price = getPrice(plan)
            const savings = getSavings(plan)

            return (
              <Card
                key={plan.name}
                className={`shadow-xl border-2 bg-white/95 backdrop-blur-sm relative ${
                  plan.popular
                    ? "border-rose-300 scale-105"
                    : plan.color === "purple"
                      ? "border-purple-200"
                      : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 text-sm font-bold">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pt-8">
                  <div
                    className={`p-3 rounded-full w-16 h-16 mx-auto mb-4 ${
                      plan.color === "rose"
                        ? "bg-gradient-to-r from-rose-500 to-pink-500"
                        : plan.color === "purple"
                          ? "bg-gradient-to-r from-purple-500 to-pink-500"
                          : "bg-gray-500"
                    }`}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 font-medium">{plan.description}</CardDescription>

                  <div className="mt-4">
                    <div className="text-4xl font-bold text-gray-800">
                      {price === 0 ? "Free" : `$${price}`}
                      {price > 0 && (
                        <span className="text-lg text-gray-600 font-medium">/{isYearly ? "year" : "month"}</span>
                      )}
                    </div>
                    {isYearly && savings > 0 && (
                      <p className="text-green-600 font-semibold text-sm mt-1">Save ${savings} per year</p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Features Included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 font-medium text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.limitations.length > 0 && (
                    <div>
                      <h4 className="font-bold text-gray-800 mb-3">Limitations:</h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0">×</span>
                            <span className="text-gray-600 font-medium text-sm">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Button
                    className={`w-full font-semibold text-lg py-3 ${
                      plan.color === "rose"
                        ? "bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white"
                        : plan.color === "purple"
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                          : "bg-gray-500 hover:bg-gray-600 text-white"
                    }`}
                  >
                    {plan.name === "Basic" ? "Get Started" : `Choose ${plan.name}`}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Features Comparison */}
        <div className="mt-16">
          <Card className="shadow-lg border-rose-200 bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-800">Why Upgrade Your Membership?</CardTitle>
              <CardDescription className="text-gray-600 font-medium">
                Unlock powerful features to find your perfect match faster
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Better Matches</h3>
                  <p className="text-gray-600 font-medium">
                    Advanced algorithms and filters help you find more compatible partners based on Islamic values and
                    preferences.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Faster Results</h3>
                  <p className="text-gray-600 font-medium">
                    Premium features like profile boosts and priority placement help you connect with potential matches
                    quicker.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Enhanced Security</h3>
                  <p className="text-gray-600 font-medium">
                    Verification badges and background checks ensure you're connecting with genuine, serious
                    individuals.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Islamic Quote */}
        <div className="mt-12 text-center">
          <Card className="shadow-lg border-rose-200 bg-white/95 backdrop-blur-sm max-w-3xl mx-auto">
            <CardContent className="p-8">
              <p className="text-gray-700 font-medium italic text-lg leading-relaxed">
                "And among His signs is that He created for you mates from among yourselves, that you may dwell in
                tranquility with them, and He has put love and mercy between your hearts."
              </p>
              <p className="text-rose-600 font-bold mt-4">- Quran 30:21</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
