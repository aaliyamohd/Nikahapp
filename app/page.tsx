import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, MessageCircle, Shield, Star, Sparkles } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundBlendMode: "overlay",
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-rose-200 opacity-30">
        <Heart className="w-16 h-16" />
      </div>
      <div className="absolute top-20 right-20 text-pink-200 opacity-30">
        <Sparkles className="w-12 h-12" />
      </div>
      <div className="absolute bottom-20 left-20 text-purple-200 opacity-30">
        <Star className="w-14 h-14" />
      </div>

      <div className="relative z-10">
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
              <div className="flex space-x-4">
                <Link href="/auth/login">
                  <Button variant="outline" className="border-rose-300 text-rose-600 hover:bg-rose-50 font-semibold">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold shadow-lg">
                    Join Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Find Your Perfect
                <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent block">
                  Islamic Life Partner
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
                Connect with compatible Muslim singles in a halal environment. Build meaningful relationships based on
                Islamic values and traditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth/register">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold text-lg px-8 py-4 shadow-xl"
                  >
                    Start Your Journey
                  </Button>
                </Link>
                <Link href="/profiles">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-rose-300 text-rose-600 hover:bg-rose-50 font-bold text-lg px-8 py-4"
                  >
                    Browse Profiles
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto">
            <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose NikahMinSunnati?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-rose-200 shadow-lg hover:shadow-xl transition-shadow bg-white/90">
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-3 rounded-full w-16 h-16 mx-auto mb-4">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">Islamic Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center font-medium leading-relaxed">
                    Platform built on Islamic principles with halal interaction guidelines and Sunnah-based matchmaking.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-rose-200 shadow-lg hover:shadow-xl transition-shadow bg-white/90">
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-3 rounded-full w-16 h-16 mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">Verified Profiles</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center font-medium leading-relaxed">
                    All profiles are verified for authenticity. Connect with genuine people looking for serious
                    relationships.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-rose-200 shadow-lg hover:shadow-xl transition-shadow bg-white/90">
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-3 rounded-full w-16 h-16 mx-auto mb-4">
                    <MessageCircle className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">Secure Chat</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center font-medium leading-relaxed">
                    Safe and monitored chat system with AI assistance for guidance on Islamic relationship principles.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Membership Plans */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">Choose Your Membership Plan</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-gray-200 shadow-lg bg-white/90">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-800">Basic</CardTitle>
                  <CardDescription className="text-3xl font-bold text-rose-600">Free</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-gray-600 font-medium">
                    <li>✓ Create profile</li>
                    <li>✓ Browse limited profiles</li>
                    <li>✓ Basic chat (5 messages/day)</li>
                    <li>✓ AI assistant access</li>
                  </ul>
                  <Button className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold">Get Started</Button>
                </CardContent>
              </Card>

              <Card className="border-rose-300 shadow-xl bg-gradient-to-b from-white to-rose-50 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl font-bold text-gray-800">Premium</CardTitle>
                  <CardDescription className="text-3xl font-bold text-rose-600">$29/month</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-gray-600 font-medium">
                    <li>✓ Unlimited profile views</li>
                    <li>✓ Unlimited messaging</li>
                    <li>✓ Advanced search filters</li>
                    <li>✓ Priority customer support</li>
                    <li>✓ Location sharing</li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold">
                    Choose Premium
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-purple-200 shadow-lg bg-white/90">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-800">VIP</CardTitle>
                  <CardDescription className="text-3xl font-bold text-purple-600">$59/month</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-gray-600 font-medium">
                    <li>✓ All Premium features</li>
                    <li>✓ Profile highlighting</li>
                    <li>✓ Dedicated matchmaker</li>
                    <li>✓ Video call feature</li>
                    <li>✓ Family verification</li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold">
                    Go VIP
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-2 rounded-full">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold">NikahMinSunnati</h4>
                </div>
                <p className="text-gray-300 font-medium">Connecting hearts through Islamic values and traditions.</p>
              </div>
              <div>
                <h5 className="font-bold mb-4">Quick Links</h5>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link href="/about" className="hover:text-rose-400 font-medium">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-it-works" className="hover:text-rose-400 font-medium">
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link href="/success-stories" className="hover:text-rose-400 font-medium">
                      Success Stories
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-4">Support</h5>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link href="/help" className="hover:text-rose-400 font-medium">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-rose-400 font-medium">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/chat-support" className="hover:text-rose-400 font-medium">
                      AI Assistant
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-4">Legal</h5>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link href="/privacy" className="hover:text-rose-400 font-medium">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-rose-400 font-medium">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/guidelines" className="hover:text-rose-400 font-medium">
                      Islamic Guidelines
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-300 font-medium">
                © 2024 NikahMinSunnati. All rights reserved. Built with Islamic values and modern technology.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
