"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ChefHat, Send, ArrowLeft, User, Mic, MicOff, Volume2, VolumeX, Clock, MapPin, Thermometer } from "lucide-react"
import Link from "next/link"
import { recipeDatabase } from "../data/recipes"

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content:
        "Hello! I'm ChefBot, your personal AI cooking assistant! 👨‍🍳 I have over 100 recipes from around the world including Indian, Italian, Chinese, Mexican, Arabian, Turkish, and Middle Eastern cuisines. I can help you find the perfect recipe based on your mood, weather, ingredients, or dietary preferences. What would you like to cook today?",
      timestamp: new Date().toLocaleTimeString(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [currentWeather, setCurrentWeather] = useState("sunny")
  const [userLocation, setUserLocation] = useState("New York")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const quickSuggestions = [
    "Show me Italian pasta recipes",
    "I want something spicy and Indian",
    "Quick 15-minute meals",
    "Healthy vegetarian options",
    "Comfort food for rainy weather",
    "Arabian rice dishes",
    "Chinese stir-fry recipes",
    "Mexican street food",
    "Turkish desserts",
    "What can I make with chicken and rice?",
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: "bot",
        content: generateAIResponse(inputMessage),
        timestamp: new Date().toLocaleTimeString(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (question: string) => {
    const lowerQuestion = question.toLowerCase()

    // Weather-based suggestions
    if (lowerQuestion.includes("weather") || lowerQuestion.includes("rainy") || lowerQuestion.includes("cold")) {
      return `Perfect! For ${currentWeather} weather in ${userLocation}, I recommend some comforting recipes:\n\n🍲 **Chicken Tikka Masala** (Indian)\n- Creamy, warming spices perfect for cold weather\n- Cook time: 45 minutes\n- YouTube: https://youtube.com/watch?v=tikka-masala\n\n🍜 **Tom Yum Soup** (Thai)\n- Spicy and warming\n- Cook time: 30 minutes\n\n💡 **Chef's Tip**: Add extra ginger and garlic for extra warmth! Would you like the full recipe for any of these?`
    }

    // Cuisine-specific responses
    if (lowerQuestion.includes("italian") || lowerQuestion.includes("pasta")) {
      const italianRecipes = recipeDatabase.filter((r) => r.cuisine === "Italian")
      const recipe = italianRecipes[Math.floor(Math.random() * italianRecipes.length)]
      return `🇮🇹 **${recipe.name}** sounds perfect!\n\n**Ingredients:**\n${recipe.ingredients.map((ing) => `• ${ing}`).join("\n")}\n\n**Instructions:**\n${recipe.instructions.map((inst, i) => `${i + 1}. ${inst}`).join("\n")}\n\n⏱️ **Cook Time:** ${recipe.cookTime}\n👥 **Serves:** ${recipe.servings}\n🌶️ **Difficulty:** ${recipe.difficulty}\n\n📹 **Video Tutorial:** ${recipe.videoUrl}\n\n💡 **Chef's Tip:** ${recipe.tips}\n\nWould you like more Italian recipes or need help with any cooking techniques?`
    }

    if (lowerQuestion.includes("indian") || lowerQuestion.includes("spicy") || lowerQuestion.includes("curry")) {
      const indianRecipes = recipeDatabase.filter((r) => r.cuisine === "Indian")
      const recipe = indianRecipes[Math.floor(Math.random() * indianRecipes.length)]
      return `🇮🇳 **${recipe.name}** - A delicious Indian classic!\n\n**Ingredients:**\n${recipe.ingredients.map((ing) => `• ${ing}`).join("\n")}\n\n**Instructions:**\n${recipe.instructions.map((inst, i) => `${i + 1}. ${inst}`).join("\n")}\n\n⏱️ **Cook Time:** ${recipe.cookTime}\n👥 **Serves:** ${recipe.servings}\n🌶️ **Spice Level:** ${recipe.spiceLevel || "Medium"}\n\n📹 **Video Tutorial:** ${recipe.videoUrl}\n\n💡 **Chef's Tip:** ${recipe.tips}\n\nFor authentic flavor, toast your whole spices before grinding! Need any ingredient substitutions?`
    }

    if (lowerQuestion.includes("chinese") || lowerQuestion.includes("stir")) {
      const chineseRecipes = recipeDatabase.filter((r) => r.cuisine === "Chinese")
      const recipe = chineseRecipes[Math.floor(Math.random() * chineseRecipes.length)]
      return `🇨🇳 **${recipe.name}** - A classic Chinese dish!\n\n**Ingredients:**\n${recipe.ingredients.map((ing) => `• ${ing}`).join("\n")}\n\n**Instructions:**\n${recipe.instructions.map((inst, i) => `${i + 1}. ${inst}`).join("\n")}\n\n⏱️ **Cook Time:** ${recipe.cookTime}\n👥 **Serves:** ${recipe.servings}\n\n📹 **Video Tutorial:** ${recipe.videoUrl}\n\n💡 **Chef's Tip:** ${recipe.tips}\n\nHigh heat and quick cooking are key to perfect stir-fry! What vegetables do you have available?`
    }

    if (lowerQuestion.includes("mexican") || lowerQuestion.includes("taco") || lowerQuestion.includes("spicy")) {
      const mexicanRecipes = recipeDatabase.filter((r) => r.cuisine === "Mexican")
      const recipe = mexicanRecipes[Math.floor(Math.random() * mexicanRecipes.length)]
      return `🇲🇽 **${recipe.name}** - Authentic Mexican flavors!\n\n**Ingredients:**\n${recipe.ingredients.map((ing) => `• ${ing}`).join("\n")}\n\n**Instructions:**\n${recipe.instructions.map((inst, i) => `${i + 1}. ${inst}`).join("\n")}\n\n⏱️ **Cook Time:** ${recipe.cookTime}\n👥 **Serves:** ${recipe.servings}\n\n📹 **Video Tutorial:** ${recipe.videoUrl}\n\n💡 **Chef's Tip:** ${recipe.tips}\n\nFresh lime juice makes all the difference! Would you like salsa recipes to go with this?`
    }

    if (lowerQuestion.includes("arabian") || lowerQuestion.includes("middle east") || lowerQuestion.includes("rice")) {
      const arabianRecipes = recipeDatabase.filter((r) => r.cuisine === "Arabian")
      const recipe = arabianRecipes[Math.floor(Math.random() * arabianRecipes.length)]
      return `🇸🇦 **${recipe.name}** - A fragrant Arabian delight!\n\n**Ingredients:**\n${recipe.ingredients.map((ing) => `• ${ing}`).join("\n")}\n\n**Instructions:**\n${recipe.instructions.map((inst, i) => `${i + 1}. ${inst}`).join("\n")}\n\n⏱️ **Cook Time:** ${recipe.cookTime}\n👥 **Serves:** ${recipe.servings}\n\n📹 **Video Tutorial:** ${recipe.videoUrl}\n\n💡 **Chef's Tip:** ${recipe.tips}\n\nSoak your rice for 30 minutes before cooking for perfect texture! Need any spice blend recipes?`
    }

    if (lowerQuestion.includes("turkish") || lowerQuestion.includes("kebab")) {
      const turkishRecipes = recipeDatabase.filter((r) => r.cuisine === "Turkish")
      const recipe = turkishRecipes[Math.floor(Math.random() * turkishRecipes.length)]
      return `🇹🇷 **${recipe.name}** - Traditional Turkish cuisine!\n\n**Ingredients:**\n${recipe.ingredients.map((ing) => `• ${ing}`).join("\n")}\n\n**Instructions:**\n${recipe.instructions.map((inst, i) => `${i + 1}. ${inst}`).join("\n")}\n\n⏱️ **Cook Time:** ${recipe.cookTime}\n👥 **Serves:** ${recipe.servings}\n\n📹 **Video Tutorial:** ${recipe.videoUrl}\n\n💡 **Chef's Tip:** ${recipe.tips}\n\nMarinating overnight gives the best flavor! Would you like Turkish side dish suggestions?`
    }

    // Quick meal suggestions
    if (lowerQuestion.includes("quick") || lowerQuestion.includes("15") || lowerQuestion.includes("fast")) {
      return `⚡ **Quick 15-Minute Meals:**\n\n🍝 **Aglio e Olio** (Italian)\n- Spaghetti with garlic and olive oil\n- 12 minutes\n\n🥘 **Chicken Fried Rice** (Chinese)\n- Use leftover rice for best results\n- 15 minutes\n\n🌮 **Quesadillas** (Mexican)\n- Cheese and your choice of fillings\n- 10 minutes\n\n💡 **Speed Tips:**\n- Prep ingredients while pan heats\n- Use pre-cooked proteins\n- Keep frozen vegetables handy\n\nWhich one sounds good to you?`
    }

    // Ingredient-based suggestions
    if (lowerQuestion.includes("chicken") && lowerQuestion.includes("rice")) {
      return `🍗🍚 **Perfect Chicken & Rice Combos:**\n\n🇮🇳 **Chicken Biryani**\n- Fragrant basmati rice with spiced chicken\n- 1 hour cook time\n\n🇸🇦 **Chicken Kabsa**\n- Arabian spiced rice with tender chicken\n- 45 minutes\n\n🇨🇳 **Chicken Fried Rice**\n- Quick stir-fried rice with vegetables\n- 15 minutes\n\n🇲🇽 **Chicken Burrito Bowl**\n- Cilantro lime rice with seasoned chicken\n- 30 minutes\n\nWhich cuisine are you in the mood for? I can provide the full recipe!`
    }

    // Mood-based suggestions
    if (lowerQuestion.includes("comfort") || lowerQuestion.includes("cozy")) {
      return `🤗 **Comfort Food Recommendations:**\n\nBased on the current weather in ${userLocation}, here are some soul-warming dishes:\n\n🍲 **Butter Chicken** (Indian)\n- Creamy tomato curry that hugs your soul\n- 40 minutes\n\n🍝 **Carbonara** (Italian)\n- Rich, creamy pasta perfection\n- 20 minutes\n\n🥘 **Beef Stew** (International)\n- Slow-cooked comfort in a bowl\n- 2 hours (worth the wait!)\n\n💡 **Comfort Cooking Tips:**\n- Cook with love and patience\n- Taste and adjust seasonings\n- Make extra for leftovers\n\nWhat type of comfort are you craving?`
    }

    // Default response with suggestions
    return `I'd love to help you cook something delicious! 👨‍🍳\n\nI can suggest recipes based on:\n🌍 **Cuisine:** Italian, Indian, Chinese, Mexican, Arabian, Turkish, Lebanese\n🌤️ **Weather:** Perfect dishes for ${currentWeather} weather\n⏰ **Time:** Quick meals, slow cooking, or anything in between\n🥘 **Ingredients:** Tell me what you have in your kitchen\n😊 **Mood:** Comfort food, healthy options, or adventurous flavors\n\nI also have cooking tips, video tutorials, and can help with:\n• Ingredient substitutions\n• Cooking techniques\n• Meal planning\n• Dietary restrictions\n\nWhat sounds interesting to you? Or try one of the quick suggestions below!`
  }

  const handleQuickSuggestion = (suggestion: string) => {
    setInputMessage(suggestion)
  }

  const startVoiceRecognition = () => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new (window as any).webkitSpeechRecognition()
      recognition.continuous = false
      recognition.interimResults = false
      recognition.lang = "en-US"

      recognition.onstart = () => {
        setIsListening(true)
      }

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setInputMessage(transcript)
        setIsListening(false)
      }

      recognition.onerror = () => {
        setIsListening(false)
      }

      recognition.onend = () => {
        setIsListening(false)
      }

      recognition.start()
    }
  }

  const speakMessage = (text: string) => {
    if ("speechSynthesis" in window) {
      setIsSpeaking(true)
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.8
      utterance.pitch = 1
      utterance.volume = 0.8

      utterance.onend = () => {
        setIsSpeaking(false)
      }

      speechSynthesis.speak(utterance)
    }
  }

  const stopSpeaking = () => {
    speechSynthesis.cancel()
    setIsSpeaking(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Background Food Pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
        }}
      />

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-lg border-b border-orange-100 relative z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/" className="text-orange-600 hover:text-orange-700">
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full">
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                ChefBot AI
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold">
                <MapPin className="w-3 h-3 mr-1" />
                {userLocation}
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold">
                <Thermometer className="w-3 h-3 mr-1" />
                {currentWeather}
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Quick Suggestions Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-orange-200 bg-white/95 backdrop-blur-sm sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800">Quick Suggestions</CardTitle>
                <CardDescription className="text-gray-600 font-medium">
                  Click any suggestion to get started
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {quickSuggestions.map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full text-left justify-start h-auto p-3 text-sm font-medium hover:bg-orange-50 hover:text-orange-700"
                      onClick={() => handleQuickSuggestion(suggestion)}
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recipe Stats */}
            <Card className="shadow-lg border-orange-200 bg-white/95 backdrop-blur-sm mt-6">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800">Recipe Database</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Total Recipes:</span>
                    <span className="font-bold text-orange-600">100+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Cuisines:</span>
                    <span className="font-bold text-orange-600">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Video Tutorials:</span>
                    <span className="font-bold text-orange-600">80+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="shadow-xl border-orange-200 bg-white/95 backdrop-blur-sm h-[600px] flex flex-col">
              <CardHeader className="border-b border-orange-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                        <ChefHat className="w-6 h-6" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800">ChefBot AI</CardTitle>
                      <CardDescription className="text-gray-600 font-medium">
                        Your Personal Cooking Assistant
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={
                        isSpeaking ? stopSpeaking : () => speakMessage(messages[messages.length - 1]?.content || "")
                      }
                      className="text-orange-600 hover:bg-orange-50"
                    >
                      {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`flex items-start space-x-3 max-w-[85%] ${message.type === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                    >
                      <Avatar className="w-8 h-8">
                        <AvatarFallback
                          className={`${message.type === "user" ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-gradient-to-r from-orange-500 to-red-500"} text-white`}
                        >
                          {message.type === "user" ? <User className="w-4 h-4" /> : <ChefHat className="w-4 h-4" />}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`p-4 rounded-lg ${message.type === "user" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "bg-gray-100 text-gray-800"}`}
                      >
                        <div className="font-medium leading-relaxed whitespace-pre-line">{message.content}</div>
                        <div className={`text-xs mt-2 ${message.type === "user" ? "text-blue-100" : "text-gray-500"}`}>
                          <Clock className="w-3 h-3 inline mr-1" />
                          {message.timestamp}
                        </div>
                      </div>
                      {message.type === "bot" && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => speakMessage(message.content)}
                          className="text-orange-600 hover:bg-orange-50 mt-2"
                        >
                          <Volume2 className="w-3 h-3" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-3 max-w-[80%]">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                          <ChefHat className="w-4 h-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="p-4 rounded-lg bg-gray-100">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </CardContent>

              {/* Input */}
              <div className="border-t border-orange-100 p-4">
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={startVoiceRecognition}
                    disabled={isListening}
                    className={`border-orange-300 ${isListening ? "bg-red-100 text-red-600" : "text-orange-600 hover:bg-orange-50"}`}
                  >
                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </Button>
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask me about recipes, cooking tips, or say 'I want something spicy'..."
                    className="flex-1 border-orange-200 focus:border-orange-400 font-medium"
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold"
                    disabled={!inputMessage.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  🎤 Use voice commands • 🌍 Ask about any cuisine • 💡 Get cooking tips
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
