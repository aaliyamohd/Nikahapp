"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChefHat, Mic, MicOff, Volume2, VolumeX, ArrowLeft, Play, Pause, RotateCcw } from "lucide-react"
import Link from "next/link"

export default function VoiceAssistantPage() {
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [currentCommand, setCurrentCommand] = useState("")
  const [response, setResponse] = useState("")
  const [conversationHistory, setConversationHistory] = useState<Array<{ command: string; response: string }>>([])

  const voiceCommands = [
    "Show me Italian recipes",
    "What can I cook with chicken?",
    "Give me a quick 15-minute meal",
    "I want something spicy",
    "Show me vegetarian options",
    "What's good for cold weather?",
    "Help me with cooking tips",
    "Read the ingredients for pasta",
    "How do I make pizza dough?",
    "What's the next step?",
  ]

  const startListening = () => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new (window as any).webkitSpeechRecognition()
      recognition.continuous = false
      recognition.interimResults = false
      recognition.lang = "en-US"

      recognition.onstart = () => {
        setIsListening(true)
        setCurrentCommand("")
      }

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setCurrentCommand(transcript)
        processVoiceCommand(transcript)
        setIsListening(false)
      }

      recognition.onerror = () => {
        setIsListening(false)
      }

      recognition.onend = () => {
        setIsListening(false)
      }

      recognition.start()
    } else {
      alert("Speech recognition not supported in this browser")
    }
  }

  const processVoiceCommand = (command: string) => {
    const lowerCommand = command.toLowerCase()
    let aiResponse = ""

    if (lowerCommand.includes("italian") || lowerCommand.includes("pasta")) {
      aiResponse =
        "I found some delicious Italian recipes for you! Here's a classic Spaghetti Carbonara. You'll need spaghetti, eggs, pancetta, Pecorino Romano cheese, and black pepper. Would you like me to walk you through the cooking steps?"
    } else if (lowerCommand.includes("chicken")) {
      aiResponse =
        "Great choice! I have several chicken recipes. For something quick, try Chicken Stir-fry with vegetables. For comfort food, Chicken Tikka Masala is perfect. Which style interests you more?"
    } else if (lowerCommand.includes("quick") || lowerCommand.includes("15")) {
      aiResponse =
        "Perfect for busy days! Try Aglio e Olio - spaghetti with garlic and olive oil, ready in 12 minutes. Or make Chicken Fried Rice using leftover rice in just 15 minutes. Both are delicious and fast!"
    } else if (lowerCommand.includes("spicy")) {
      aiResponse =
        "Spice lovers unite! Try Kung Pao Chicken from Chinese cuisine, or go for Indian Chicken Tikka Masala. For Mexican heat, make some spicy Chicken Tacos with jalapeños. How spicy do you like it?"
    } else if (lowerCommand.includes("vegetarian")) {
      aiResponse =
        "Wonderful vegetarian options await! Try Indian Dal Tadka with lentils, Italian Margherita Pizza, or fresh Lebanese Tabbouleh salad. All are packed with flavor and nutrition!"
    } else if (lowerCommand.includes("cold") || lowerCommand.includes("weather")) {
      aiResponse =
        "Perfect comfort food for cold weather! I recommend a warming Chicken Tikka Masala, hearty Beef Stew, or aromatic Chicken Kabsa. These dishes will warm you right up!"
    } else if (lowerCommand.includes("tips") || lowerCommand.includes("help")) {
      aiResponse =
        "Here are my top cooking tips: Always taste as you go, prep all ingredients before cooking, use fresh herbs when possible, and don't be afraid to adjust seasonings. What specific technique would you like help with?"
    } else {
      aiResponse =
        "I'm here to help with recipes and cooking! You can ask me about specific cuisines like Italian, Indian, Chinese, Mexican, Arabian, or Turkish. I can also suggest recipes based on ingredients, cooking time, or your mood. What would you like to cook today?"
    }

    setResponse(aiResponse)
    setConversationHistory((prev) => [...prev, { command, response: aiResponse }])
    speakResponse(aiResponse)
  }

  const speakResponse = (text: string) => {
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

  const clearHistory = () => {
    setConversationHistory([])
    setCurrentCommand("")
    setResponse("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Background Pattern */}
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
                Voice Assistant
              </h1>
            </div>
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold">
              Hands-Free Cooking
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
        {/* Main Voice Interface */}
        <Card className="shadow-xl border-orange-200 bg-white/95 backdrop-blur-sm mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-800">ChefBot Voice Assistant</CardTitle>
            <CardDescription className="text-gray-600 font-medium">
              Speak naturally to get recipe suggestions and cooking guidance
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            {/* Voice Control Button */}
            <div className="flex justify-center">
              <Button
                onClick={startListening}
                disabled={isListening}
                className={`w-32 h-32 rounded-full text-white font-bold text-lg shadow-2xl transition-all ${
                  isListening
                    ? "bg-gradient-to-r from-red-500 to-pink-500 animate-pulse"
                    : "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                }`}
              >
                {isListening ? (
                  <div className="flex flex-col items-center">
                    <MicOff className="w-8 h-8 mb-2" />
                    <span className="text-sm">Listening...</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <Mic className="w-8 h-8 mb-2" />
                    <span className="text-sm">Tap to Speak</span>
                  </div>
                )}
              </Button>
            </div>

            {/* Current Command Display */}
            {currentCommand && (
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <h4 className="font-bold text-blue-800 mb-2">You said:</h4>
                  <p className="text-blue-700 font-medium">"{currentCommand}"</p>
                </CardContent>
              </Card>
            )}

            {/* Response Display */}
            {response && (
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-green-800">ChefBot says:</h4>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => speakResponse(response)}
                        disabled={isSpeaking}
                        className="text-green-600 hover:bg-green-100"
                      >
                        <Play className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={stopSpeaking}
                        disabled={!isSpeaking}
                        className="text-red-600 hover:bg-red-100"
                      >
                        <Pause className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-green-700 font-medium leading-relaxed">{response}</p>
                  {isSpeaking && (
                    <div className="flex items-center mt-2 text-green-600">
                      <Volume2 className="w-4 h-4 mr-2 animate-pulse" />
                      <span className="text-sm">Speaking...</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Control Buttons */}
            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                onClick={clearHistory}
                className="border-orange-300 text-orange-600 hover:bg-orange-50 font-semibold"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Clear History
              </Button>
              <Button
                variant="outline"
                onClick={stopSpeaking}
                disabled={!isSpeaking}
                className="border-red-300 text-red-600 hover:bg-red-50 font-semibold"
              >
                <VolumeX className="w-4 h-4 mr-2" />
                Stop Speaking
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Voice Commands Guide */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg border-orange-200 bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800">Try These Voice Commands</CardTitle>
              <CardDescription className="text-gray-600 font-medium">
                Speak naturally - I understand conversational language!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {voiceCommands.map((command, index) => (
                  <div
                    key={index}
                    className="p-3 bg-orange-50 rounded-lg border border-orange-200 cursor-pointer hover:bg-orange-100 transition-colors"
                    onClick={() => processVoiceCommand(command)}
                  >
                    <p className="text-orange-800 font-medium">"{command}"</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Conversation History */}
          <Card className="shadow-lg border-orange-200 bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800">Conversation History</CardTitle>
              <CardDescription className="text-gray-600 font-medium">Your recent voice interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {conversationHistory.length === 0 ? (
                  <p className="text-gray-500 text-center font-medium">
                    No conversations yet. Start by saying something!
                  </p>
                ) : (
                  conversationHistory
                    .slice(-5)
                    .reverse()
                    .map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                          <p className="text-blue-800 font-medium text-sm">You: "{item.command}"</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                          <p className="text-green-800 font-medium text-sm">
                            ChefBot: {item.response.substring(0, 100)}...
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => speakResponse(item.response)}
                            className="text-green-600 hover:bg-green-100 mt-2"
                          >
                            <Volume2 className="w-3 h-3 mr-1" />
                            Replay
                          </Button>
                        </div>
                      </div>
                    ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tips for Voice Assistant */}
        <Card className="shadow-lg border-orange-200 bg-white/95 backdrop-blur-sm mt-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-800">Voice Assistant Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-3">🎤 Speaking Tips:</h4>
                <ul className="space-y-2 text-gray-700 font-medium">
                  <li>• Speak clearly and at normal pace</li>
                  <li>• Use natural, conversational language</li>
                  <li>• Mention specific cuisines or ingredients</li>
                  <li>• Ask for cooking tips and techniques</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-3">🍳 Cooking Features:</h4>
                <ul className="space-y-2 text-gray-700 font-medium">
                  <li>• Hands-free recipe reading</li>
                  <li>• Step-by-step cooking guidance</li>
                  <li>• Ingredient substitution suggestions</li>
                  <li>• Cooking time and temperature alerts</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
