"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    gender: "",
    dateOfBirth: "",
    phone: "",
    country: "",
    city: "",
    profileFor: "",
    maritalStatus: "",
    religion: "",
    sect: "",
    motherTongue: "",
    education: "",
    occupation: "",
    income: "",
    height: "",
    weight: "",
    familyType: "",
    familyValues: "",
    aboutMe: "",
    partnerPreferences: "",
    agreeToTerms: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-4 font-semibold">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-2 rounded-full">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              NikahMinSunnati
            </h1>
          </div>
          <p className="text-gray-600 font-medium">Join our Islamic matrimony community</p>
        </div>

        <Card className="shadow-xl border-rose-200 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-800">Create Your Profile - Step {step} of 4</CardTitle>
            <CardDescription className="text-gray-600 font-medium">
              {step === 1 && "Let's start with your basic information"}
              {step === 2 && "Tell us about your personal details"}
              {step === 3 && "Share your family and lifestyle information"}
              {step === 4 && "Complete your profile with preferences"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Basic Information */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName" className="text-gray-700 font-semibold">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="border-rose-200 focus:border-rose-400 font-medium"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-semibold">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="border-rose-200 focus:border-rose-400 font-medium"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="password" className="text-gray-700 font-semibold">
                      Password *
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="border-rose-200 focus:border-rose-400 font-medium"
                      placeholder="Create a strong password"
                    />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword" className="text-gray-700 font-semibold">
                      Confirm Password *
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      className="border-rose-200 focus:border-rose-400 font-medium"
                      placeholder="Confirm your password"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="gender" className="text-gray-700 font-semibold">
                      Gender *
                    </Label>
                    <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                      <SelectTrigger className="border-rose-200 focus:border-rose-400">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="dateOfBirth" className="text-gray-700 font-semibold">
                      Date of Birth *
                    </Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                      className="border-rose-200 focus:border-rose-400 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-semibold">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="border-rose-200 focus:border-rose-400 font-medium"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Personal Details */}
            {step === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="country" className="text-gray-700 font-semibold">
                      Country *
                    </Label>
                    <Input
                      id="country"
                      value={formData.country}
                      onChange={(e) => handleInputChange("country", e.target.value)}
                      className="border-rose-200 focus:border-rose-400 font-medium"
                      placeholder="Your country"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city" className="text-gray-700 font-semibold">
                      City *
                    </Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      className="border-rose-200 focus:border-rose-400 font-medium"
                      placeholder="Your city"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="maritalStatus" className="text-gray-700 font-semibold">
                      Marital Status *
                    </Label>
                    <Select
                      value={formData.maritalStatus}
                      onValueChange={(value) => handleInputChange("maritalStatus", value)}
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
                    <Label htmlFor="sect" className="text-gray-700 font-semibold">
                      Islamic Sect *
                    </Label>
                    <Select value={formData.sect} onValueChange={(value) => handleInputChange("sect", value)}>
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="education" className="text-gray-700 font-semibold">
                      Education *
                    </Label>
                    <Select value={formData.education} onValueChange={(value) => handleInputChange("education", value)}>
                      <SelectTrigger className="border-rose-200 focus:border-rose-400">
                        <SelectValue placeholder="Select education" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high-school">High School</SelectItem>
                        <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                        <SelectItem value="masters">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="occupation" className="text-gray-700 font-semibold">
                      Occupation *
                    </Label>
                    <Input
                      id="occupation"
                      value={formData.occupation}
                      onChange={(e) => handleInputChange("occupation", e.target.value)}
                      className="border-rose-200 focus:border-rose-400 font-medium"
                      placeholder="Your profession"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="height" className="text-gray-700 font-semibold">
                      Height
                    </Label>
                    <Input
                      id="height"
                      value={formData.height}
                      onChange={(e) => handleInputChange("height", e.target.value)}
                      className="border-rose-200 focus:border-rose-400 font-medium"
                      placeholder="e.g., 5'8&quot;"
                    />
                  </div>
                  <div>
                    <Label htmlFor="motherTongue" className="text-gray-700 font-semibold">
                      Mother Tongue
                    </Label>
                    <Input
                      id="motherTongue"
                      value={formData.motherTongue}
                      onChange={(e) => handleInputChange("motherTongue", e.target.value)}
                      className="border-rose-200 focus:border-rose-400 font-medium"
                      placeholder="Your native language"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Family & Lifestyle */}
            {step === 3 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="familyType" className="text-gray-700 font-semibold">
                      Family Type
                    </Label>
                    <Select
                      value={formData.familyType}
                      onValueChange={(value) => handleInputChange("familyType", value)}
                    >
                      <SelectTrigger className="border-rose-200 focus:border-rose-400">
                        <SelectValue placeholder="Select family type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nuclear">Nuclear Family</SelectItem>
                        <SelectItem value="joint">Joint Family</SelectItem>
                        <SelectItem value="extended">Extended Family</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="familyValues" className="text-gray-700 font-semibold">
                      Family Values
                    </Label>
                    <Select
                      value={formData.familyValues}
                      onValueChange={(value) => handleInputChange("familyValues", value)}
                    >
                      <SelectTrigger className="border-rose-200 focus:border-rose-400">
                        <SelectValue placeholder="Select values" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="traditional">Traditional</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="liberal">Liberal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="aboutMe" className="text-gray-700 font-semibold">
                    About Me
                  </Label>
                  <Textarea
                    id="aboutMe"
                    value={formData.aboutMe}
                    onChange={(e) => handleInputChange("aboutMe", e.target.value)}
                    className="border-rose-200 focus:border-rose-400 font-medium min-h-[120px]"
                    placeholder="Tell us about yourself, your interests, and what makes you unique..."
                  />
                </div>

                <div>
                  <Label htmlFor="partnerPreferences" className="text-gray-700 font-semibold">
                    Partner Preferences
                  </Label>
                  <Textarea
                    id="partnerPreferences"
                    value={formData.partnerPreferences}
                    onChange={(e) => handleInputChange("partnerPreferences", e.target.value)}
                    className="border-rose-200 focus:border-rose-400 font-medium min-h-[120px]"
                    placeholder="Describe your ideal life partner and what you're looking for in a relationship..."
                  />
                </div>
              </div>
            )}

            {/* Step 4: Final Details */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Almost Done!</h3>
                  <p className="text-gray-600 font-medium">Review your information and complete your registration</p>
                </div>

                <div className="bg-rose-50 p-6 rounded-lg border border-rose-200">
                  <h4 className="font-bold text-gray-800 mb-3">Profile Summary</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700">Name:</span> {formData.fullName}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Gender:</span> {formData.gender}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Location:</span> {formData.city}, {formData.country}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Education:</span> {formData.education}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                  />
                  <Label htmlFor="agreeToTerms" className="text-sm text-gray-700 font-medium">
                    I agree to the{" "}
                    <Link href="/terms" className="text-rose-600 hover:text-rose-700 underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-rose-600 hover:text-rose-700 underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              {step > 1 && (
                <Button
                  onClick={prevStep}
                  variant="outline"
                  className="border-rose-300 text-rose-600 hover:bg-rose-50 font-semibold"
                >
                  Previous
                </Button>
              )}

              {step < 4 ? (
                <Button
                  onClick={nextStep}
                  className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold ml-auto"
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  disabled={!formData.agreeToTerms}
                  className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold ml-auto disabled:opacity-50"
                >
                  Create Profile
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-gray-600 font-medium">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-rose-600 hover:text-rose-700 underline font-semibold">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
