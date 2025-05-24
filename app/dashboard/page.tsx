"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Heart, MessageCircle, Users, Star, Settings, Bell, MapPin, Calendar, BookOpen, Crown } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const recentMatches = [
    {
      id: 1,
      name: "Aisha Rahman",
      age: 26,
      location: "London, UK",
      education: "Master's in Computer Science",
      compatibility: 92,
      lastActive: "2 hours ago",
    },
    {
      id: 2,
      name: "Fatima Ali",
      age: 24,
      location: "Toronto, Canada",
      education: "Bachelor's in Medicine",
      compatibility: 88,
      lastActive: "1 day ago",
    },
    {
      id: 3,
      name: "Zainab Ahmed",
      age: 28,
      location: "Dubai, UAE",
      education: "MBA in Finance",
      compatibility: 85,
      lastActive: "3 hours ago",
    },
  ]

  const recentMessages = [
    {
      id: 1,
      name: "Sarah Khan",
      message: "Assalamu alaikum! Thank you for your interest...",
      time: "10 minutes ago",
      unread: true,
    },
    {
      id: 2,
      name: "Mariam Hassan",
      message: "I'd love to know more about your family...",
      time: "2 hours ago",
      unread: false,
    },
    {
      id: 3,
      name: "Khadija Omar",
      message: "MashAllah, your profile is very impressive...",
      time: "1 day ago",
      unread: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-lg border-b border-rose-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-2 rounded-full">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                NikahMinSunnati
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Button>
              <Link href="/chat-support">
                <Button variant="outline" className="border-rose-300 text-rose-600 hover:bg-rose-50 font-semibold">
                  AI Assistant
                </Button>
              </Link>
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold">
                  AH
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-rose-200 bg-white/95 backdrop-blur-sm">
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarFallback className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-2xl font-bold">
                    AH
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl font-bold text-gray-800">Ahmed Hassan</CardTitle>
                <CardDescription className="text-gray-600 font-medium">Software Engineer, 29</CardDescription>
                <Badge className="bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold">
                  <Crown className="w-4 h-4 mr-1" />
                  Premium Member
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-rose-500" />
                    <span className="font-medium">New York, USA</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-rose-500" />
                    <span className="font-medium">Joined Dec 2024</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <BookOpen className="w-4 h-4 mr-2 text-rose-500" />
                    <span className="font-medium">Sunni Muslim</span>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <Button
                    variant={activeTab === "overview" ? "default" : "ghost"}
                    className="w-full justify-start font-semibold"
                    onClick={() => setActiveTab("overview")}
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Overview
                  </Button>
                  <Link href="/profiles">
                    <Button variant="ghost" className="w-full justify-start font-semibold">
                      <Heart className="w-4 h-4 mr-2" />
                      Browse Profiles
                    </Button>
                  </Link>
                  <Link href="/messages">
                    <Button variant="ghost" className="w-full justify-start font-semibold">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Messages
                    </Button>
                  </Link>
                  <Link href="/settings">
                    <Button variant="ghost" className="w-full justify-start font-semibold">
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card className="shadow-lg border-rose-200 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-3 rounded-full w-12 h-12 mx-auto mb-3">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">24</h3>
                  <p className="text-gray-600 font-medium">Profile Views</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-rose-200 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full w-12 h-12 mx-auto mb-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">12</h3>
                  <p className="text-gray-600 font-medium">Matches</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-rose-200 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full w-12 h-12 mx-auto mb-3">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">8</h3>
                  <p className="text-gray-600 font-medium">Messages</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-rose-200 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-full w-12 h-12 mx-auto mb-3">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">92%</h3>
                  <p className="text-gray-600 font-medium">Compatibility</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Recent Matches */}
              <Card className="shadow-lg border-rose-200 bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-rose-500" />
                    Recent Matches
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-medium">
                    Profiles that match your preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentMatches.map((match) => (
                      <div
                        key={match.id}
                        className="flex items-center justify-between p-4 bg-rose-50 rounded-lg border border-rose-100"
                      >
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold">
                              {match.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-bold text-gray-800">{match.name}</h4>
                            <p className="text-sm text-gray-600 font-medium">
                              {match.age} years • {match.location}
                            </p>
                            <p className="text-xs text-gray-500">{match.education}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-green-100 text-green-800 font-semibold mb-2">
                            {match.compatibility}% Match
                          </Badge>
                          <p className="text-xs text-gray-500">{match.lastActive}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href="/profiles">
                    <Button className="w-full mt-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold">
                      View All Matches
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Recent Messages */}
              <Card className="shadow-lg border-rose-200 bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2 text-rose-500" />
                    Recent Messages
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-medium">Your latest conversations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentMessages.map((message) => (
                      <div
                        key={message.id}
                        className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer"
                      >
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold">
                            {message.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="font-bold text-gray-800 truncate">{message.name}</h4>
                            {message.unread && (
                              <span className="bg-rose-500 text-white text-xs rounded-full w-2 h-2"></span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 truncate font-medium">{message.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{message.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href="/messages">
                    <Button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold">
                      View All Messages
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Islamic Quote of the Day */}
            <Card className="shadow-lg border-rose-200 bg-white/95 backdrop-blur-sm mt-8">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800 text-center">Islamic Wisdom of the Day</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-gray-700 font-medium italic text-lg leading-relaxed">
                    "The world is green and beautiful, and Allah has appointed you as His stewards over it. The whole
                    world is a place of worship, pure and clean."
                  </p>
                  <p className="text-rose-600 font-bold mt-4">- Prophet Muhammad (PBUH)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
