import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChefHat, MessageCircle, Globe, Mic, Sparkles } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 relative overflow-hidden">
      {/* Background Food Images */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundBlendMode: "overlay",
        }}
      />

      {/* Decorative Food Elements */}
      <div className="absolute top-10 left-10 text-orange-200 opacity-30">
        <ChefHat className="w-16 h-16" />
      </div>
      <div className="absolute top-20 right-20 text-yellow-200 opacity-30">
        <Sparkles className="w-12 h-12" />
      </div>
      <div className="absolute bottom-20 left-20 text-red-200 opacity-30">
        <Globe className="w-14 h-14" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-sm shadow-lg border-b border-orange-100">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full">
                  <ChefHat className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  ChefBot AI
                </h1>
              </div>
              <div className="flex space-x-4">
                <Link href="/recipes">
                  <Button
                    variant="outline"
                    className="border-orange-300 text-orange-600 hover:bg-orange-50 font-semibold"
                  >
                    Browse Recipes
                  </Button>
                </Link>
                <Link href="/chat">
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold shadow-lg">
                    Start Cooking
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
                Your Personal
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent block">
                  AI Chef Assistant
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
                Discover 100+ authentic recipes from around the world. Get personalized cooking guidance, voice
                assistance, and recipe suggestions based on your mood, weather, and location.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/chat">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg px-8 py-4 shadow-xl"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat with ChefBot
                  </Button>
                </Link>
                <Link href="/voice-assistant">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-orange-300 text-orange-600 hover:bg-orange-50 font-bold text-lg px-8 py-4"
                  >
                    <Mic className="w-5 h-5 mr-2" />
                    Voice Assistant
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto">
            <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose ChefBot AI?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-orange-200 shadow-lg hover:shadow-xl transition-shadow bg-white/90">
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full w-16 h-16 mx-auto mb-4">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">Global Cuisines</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center font-medium leading-relaxed">
                    100+ authentic recipes from Indian, Italian, Chinese, Mexican, Arabian, Turkish, and Middle Eastern
                    cuisines.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-orange-200 shadow-lg hover:shadow-xl transition-shadow bg-white/90">
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full w-16 h-16 mx-auto mb-4">
                    <Mic className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">Voice Assistant</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center font-medium leading-relaxed">
                    Hands-free cooking with voice commands. Get step-by-step guidance while your hands are busy cooking.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-orange-200 shadow-lg hover:shadow-xl transition-shadow bg-white/90">
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full w-16 h-16 mx-auto mb-4">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">Smart Suggestions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center font-medium leading-relaxed">
                    AI-powered recommendations based on your mood, weather, season, and location for perfect meal
                    planning.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cuisine Categories */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">Explore World Cuisines</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: "Indian", flag: "🇮🇳", dishes: "Biryani, Curry, Tandoori" },
                { name: "Italian", flag: "🇮🇹", dishes: "Pasta, Pizza, Risotto" },
                { name: "Chinese", flag: "🇨🇳", dishes: "Stir-fry, Dumplings, Noodles" },
                { name: "Mexican", flag: "🇲🇽", dishes: "Tacos, Enchiladas, Quesadillas" },
                { name: "Arabian", flag: "🇸🇦", dishes: "Kabsa, Hummus, Shawarma" },
                { name: "Turkish", flag: "🇹🇷", dishes: "Kebab, Baklava, Dolma" },
                { name: "Lebanese", flag: "🇱🇧", dishes: "Tabbouleh, Fattoush, Kibbeh" },
                { name: "Persian", flag: "🇮🇷", dishes: "Polo, Khoresh, Tahdig" },
              ].map((cuisine) => (
                <Card
                  key={cuisine.name}
                  className="border-orange-200 shadow-lg hover:shadow-xl transition-shadow bg-white/90 cursor-pointer"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{cuisine.flag}</div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{cuisine.name}</h4>
                    <p className="text-gray-600 font-medium text-sm">{cuisine.dishes}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full">
                    <ChefHat className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold">ChefBot AI</h4>
                </div>
                <p className="text-gray-300 font-medium">
                  Your intelligent cooking companion for delicious meals from around the world.
                </p>
              </div>
              <div>
                <h5 className="font-bold mb-4">Features</h5>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link href="/chat" className="hover:text-orange-400 font-medium">
                      AI Chat Assistant
                    </Link>
                  </li>
                  <li>
                    <Link href="/voice-assistant" className="hover:text-orange-400 font-medium">
                      Voice Commands
                    </Link>
                  </li>
                  <li>
                    <Link href="/recipes" className="hover:text-orange-400 font-medium">
                      Recipe Database
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-4">Cuisines</h5>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link href="/cuisines/indian" className="hover:text-orange-400 font-medium">
                      Indian Recipes
                    </Link>
                  </li>
                  <li>
                    <Link href="/cuisines/italian" className="hover:text-orange-400 font-medium">
                      Italian Recipes
                    </Link>
                  </li>
                  <li>
                    <Link href="/cuisines/chinese" className="hover:text-orange-400 font-medium">
                      Chinese Recipes
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-4">Support</h5>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link href="/help" className="hover:text-orange-400 font-medium">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-orange-400 font-medium">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/feedback" className="hover:text-orange-400 font-medium">
                      Feedback
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-300 font-medium">
                © 2024 ChefBot AI. All rights reserved. Cooking made intelligent and delicious.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
