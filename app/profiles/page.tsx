"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Heart,
  Search,
  Filter,
  MapPin,
  GraduationCap,
  Briefcase,
  Calendar,
  ArrowLeft,
  MessageCircle,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function ProfilesPage() {
  const [searchFilters, setSearchFilters] = useState({
    ageMin: "",
    ageMax: "",
    location: "",
    education: "",
    occupation: "",
    maritalStatus: "",
    sect: "",
  })

  const profiles = [
    {
      id: 1,
      name: "Aisha Rahman",
      age: 26,
      location: "London, UK",
      education: "Master's in Computer Science",
      occupation: "Software Engineer",
      maritalStatus: "Never Married",
      sect: "Sunni",
      compatibility: 92,
      lastActive: "2 hours ago",
      bio: "Practicing Muslim seeking a life partner who shares Islamic values and modern outlook.",
      interests: ["Technology", "Reading", "Volunteering", "Travel"],
    },
    {
      id: 2,
      name: "Fatima Ali",
      age: 24,
      location: "Toronto, Canada",
      education: "Bachelor's in Medicine",
      occupation: "Medical Student",
      maritalStatus: "Never Married",
      sect: "Sunni",
      compatibility: 88,
      lastActive: "1 day ago",
      bio: "Aspiring doctor with strong family values looking for a caring and understanding partner.",
      interests: ["Medicine", "Cooking", "Family Time", "Islamic Studies"],
    },
    {
      id: 3,
      name: "Zainab Ahmed",
      age: 28,
      location: "Dubai, UAE",
      education: "MBA in Finance",
      occupation: "Financial Analyst",
      maritalStatus: "Never Married",
      sect: "Sunni",
      compatibility: 85,
      lastActive: "3 hours ago",
      bio: "Career-oriented Muslim woman seeking a balanced life with the right person.",
      interests: ["Finance", "Fitness", "Art", "Community Service"],
    },
    {
      id: 4,
      name: "Mariam Hassan",
      age: 25,
      location: "New York, USA",
      education: "Bachelor's in Education",
      occupation: "Teacher",
      maritalStatus: "Never Married",
      sect: "Sunni",
      compatibility: 90,
      lastActive: "5 hours ago",
      bio: "Dedicated educator with a passion for nurturing young minds and building a loving family.",
      interests: ["Education", "Children", "Books", "Nature"],
    },
    {
      id: 5,
      name: "Khadija Omar",
      age: 27,
      location: "Manchester, UK",
      education: "Master's in Psychology",
      occupation: "Counselor",
      maritalStatus: "Never Married",
      sect: "Sunni",
      compatibility: 87,
      lastActive: "1 hour ago",
      bio: "Mental health advocate seeking a supportive partner for a meaningful Islamic marriage.",
      interests: ["Psychology", "Counseling", "Hiking", "Photography"],
    },
    {
      id: 6,
      name: "Amina Khan",
      age: 29,
      location: "Sydney, Australia",
      education: "Bachelor's in Nursing",
      occupation: "Registered Nurse",
      maritalStatus: "Never Married",
      sect: "Sunni",
      compatibility: 83,
      lastActive: "4 hours ago",
      bio: "Compassionate healthcare worker looking for a kind-hearted partner to share life's journey.",
      interests: ["Healthcare", "Volunteering", "Gardening", "Cooking"],
    },
  ]

  const handleFilterChange = (field: string, value: string) => {
    setSearchFilters((prev) => ({ ...prev, [field]: value }))
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
                Browse Profiles
              </h1>
            </div>
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold">
              {profiles.length} Active Profiles
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Search Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-rose-200 bg-white/95 backdrop-blur-sm sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800 flex items-center">
                  <Filter className="w-5 h-5 mr-2 text-rose-500" />
                  Search Filters
                </CardTitle>
                <CardDescription className="text-gray-600 font-medium">Find your perfect match</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="ageMin" className="text-gray-700 font-semibold text-sm">
                      Min Age
                    </Label>
                    <Input
                      id="ageMin"
                      type="number"
                      value={searchFilters.ageMin}
                      onChange={(e) => handleFilterChange("ageMin", e.target.value)}
                      className="border-rose-200 focus:border-rose-400 font-medium"
                      placeholder="18"
                    />
                  </div>
                  <div>
                    <Label htmlFor="ageMax" className="text-gray-700 font-semibold text-sm">
                      Max Age
                    </Label>
                    <Input
                      id="ageMax"
                      type="number"
                      value={searchFilters.ageMax}
                      onChange={(e) => handleFilterChange("ageMax", e.target.value)}
                      className="border-rose-200 focus:border-rose-400 font-medium"
                      placeholder="35"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="location" className="text-gray-700 font-semibold text-sm">
                    Location
                  </Label>
                  <Input
                    id="location"
                    value={searchFilters.location}
                    onChange={(e) => handleFilterChange("location", e.target.value)}
                    className="border-rose-200 focus:border-rose-400 font-medium"
                    placeholder="City or Country"
                  />
                </div>

                <div>
                  <Label htmlFor="education" className="text-gray-700 font-semibold text-sm">
                    Education
                  </Label>
                  <Select
                    value={searchFilters.education}
                    onValueChange={(value) => handleFilterChange("education", value)}
                  >
                    <SelectTrigger className="border-rose-200 focus:border-rose-400">
                      <SelectValue placeholder="Select education" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-school">High School</SelectItem>
                      <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                      <SelectItem value="masters">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="maritalStatus" className="text-gray-700 font-semibold text-sm">
                    Marital Status
                  </Label>
                  <Select
                    value={searchFilters.maritalStatus}
                    onValueChange={(value) => handleFilterChange("maritalStatus", value)}
                  >
                    <SelectTrigger className="border-rose-200 focus:border-rose-400">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="never-married">Never Married</SelectItem>
                      <SelectItem value="divorced">Divorced</SelectItem>
                      <SelectItem value="widowed">Widowed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="sect" className="text-gray-700 font-semibold text-sm">
                    Islamic Sect
                  </Label>
                  <Select value={searchFilters.sect} onValueChange={(value) => handleFilterChange("sect", value)}>
                    <SelectTrigger className="border-rose-200 focus:border-rose-400">
                      <SelectValue placeholder="Select sect" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sunni">Sunni</SelectItem>
                      <SelectItem value="shia">Shia</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold">
                  <Search className="w-4 h-4 mr-2" />
                  Apply Filters
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-rose-300 text-rose-600 hover:bg-rose-50 font-semibold"
                >
                  Clear All
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Profiles Grid */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-6">
              {profiles.map((profile) => (
                <Card
                  key={profile.id}
                  className="shadow-lg border-rose-200 bg-white/95 backdrop-blur-sm hover:shadow-xl transition-shadow"
                >
                  <CardHeader className="text-center">
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarFallback className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-2xl font-bold">
                        {profile.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl font-bold text-gray-800">{profile.name}</CardTitle>
                    <CardDescription className="text-gray-600 font-medium">{profile.age} years old</CardDescription>
                    <Badge className="bg-green-100 text-green-800 font-semibold mx-auto">
                      <Star className="w-3 h-3 mr-1" />
                      {profile.compatibility}% Match
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-rose-500" />
                        <span className="font-medium">{profile.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <GraduationCap className="w-4 h-4 mr-2 text-rose-500" />
                        <span className="font-medium">{profile.education}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Briefcase className="w-4 h-4 mr-2 text-rose-500" />
                        <span className="font-medium">{profile.occupation}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-rose-500" />
                        <span className="font-medium">Active {profile.lastActive}</span>
                      </div>
                    </div>

                    <div className="bg-rose-50 p-3 rounded-lg border border-rose-100">
                      <p className="text-gray-700 text-sm font-medium leading-relaxed">{profile.bio}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Interests</h4>
                      <div className="flex flex-wrap gap-2">
                        {profile.interests.map((interest, index) => (
                          <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-800 font-medium">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3 pt-4">
                      <Button className="flex-1 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold">
                        <Heart className="w-4 h-4 mr-2" />
                        Show Interest
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-rose-300 text-rose-600 hover:bg-rose-50 font-semibold"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3">
                Load More Profiles
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
