"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Heart, Send, ArrowLeft, Bot, User, Sparkles } from "lucide-react"
import Link from "next/link"

export default function ChatSupportPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content:
        "Assalamu alaikum! I'm Aisha, your AI assistant for NikahMinSunnati. I'm here to help you with any questions about our platform, Islamic marriage guidance, or technical support. How can I assist you today?",
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const quickQuestions = [
    "How do I find compatible matches?",
    "What are the Islamic guidelines for online interaction?",
    "How does the matching algorithm work?",
    "Can you help me improve my profile?",
    "What membership plan is right for me?",
    "How do I report inappropriate behavior?",
  ]

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: inputMessage,
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
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (question: string) => {
    const responses = {
      matches:
        "To find compatible matches, make sure your profile is complete with accurate information about your preferences, education, and values. Our AI algorithm considers Islamic compatibility factors like religious practice level, family values, and life goals. You can also use advanced filters in your search settings.",
      guidelines:
        "Islam encourages respectful communication between potential spouses. Keep conversations focused on getting to know each other's character, values, and compatibility for marriage. Avoid inappropriate topics and maintain proper Islamic etiquette. Consider involving family members when conversations become serious.",
      algorithm:
        "Our matching algorithm considers multiple factors including religious practice level, education, location preferences, family background, and lifestyle choices. It also takes into account your stated preferences and uses machine learning to improve suggestions based on your interactions.",
      profile:
        "A strong profile includes: complete bio information, clear description of your values and goals, honest representation of your lifestyle, specific partner preferences, and regular activity on the platform. Avoid generic descriptions and be authentic about who you are.",
      membership:
        "Choose Basic for casual browsing, Premium for serious searching with unlimited messaging and advanced filters, or VIP for priority support and enhanced visibility. Consider your commitment level and how actively you plan to use the platform.",
      report:
        "You can report any inappropriate behavior by clicking the report button on any profile or message. Our team reviews all reports within 24 hours. We take Islamic values seriously and maintain a safe environment for all members.",
    }

    const lowerQuestion = question.toLowerCase()
    for (const [key, response] of Object.entries(responses)) {
      if (lowerQuestion.includes(key)) {
        return response
      }
    }

    return "Thank you for your question! I'm here to help with any aspect of your NikahMinSunnati experience. Whether you need technical support, guidance on Islamic marriage principles, or help navigating our platform, feel free to ask. You can also contact our human support team for more complex issues."
  }

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question)
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
                AI Assistant
              </h1>
            </div>
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold">
              <Sparkles className="w-4 h-4 mr-1" />
              Online 24/7
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Quick Questions Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-rose-200 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800">Quick Questions</CardTitle>
                <CardDescription className="text-gray-600 font-medium">
                  Click on any question to get instant help
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {quickQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full text-left justify-start h-auto p-3 text-sm font-medium hover:bg-rose-50 hover:text-rose-700"
                      onClick={() => handleQuickQuestion(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Support Info */}
            <Card className="shadow-lg border-rose-200 bg-white/95 backdrop-blur-sm mt-6">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800">Need Human Support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium text-sm mb-4">
                  For complex issues, our human support team is available 24/7.
                </p>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold">
                  Contact Human Support
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="shadow-xl border-rose-200 bg-white/95 backdrop-blur-sm h-[600px] flex flex-col">
              <CardHeader className="border-b border-rose-100">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      <Bot className="w-6 h-6" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800">Aisha - AI Assistant</CardTitle>
                    <CardDescription className="text-gray-600 font-medium">
                      Islamic Marriage & Platform Support
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`flex items-start space-x-3 max-w-[80%] ${message.type === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                    >
                      <Avatar className="w-8 h-8">
                        <AvatarFallback
                          className={`${message.type === "user" ? "bg-gradient-to-r from-rose-500 to-pink-500" : "bg-gradient-to-r from-purple-500 to-pink-500"} text-white`}
                        >
                          {message.type === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`p-4 rounded-lg ${message.type === "user" ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white" : "bg-gray-100 text-gray-800"}`}
                      >
                        <p className="font-medium leading-relaxed">{message.content}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-3 max-w-[80%]">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                          <Bot className="w-4 h-4" />
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
              </CardContent>

              {/* Input */}
              <div className="border-t border-rose-100 p-4">
                <div className="flex space-x-3">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask me anything about NikahMinSunnati or Islamic marriage guidance..."
                    className="flex-1 border-rose-200 focus:border-rose-400 font-medium"
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold"
                    disabled={!inputMessage.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Islamic Guidance Note */}
            <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-medium text-sm">
                <strong>Islamic Reminder:</strong> Remember that all interactions should be conducted with Islamic
                values in mind. Our AI assistant provides guidance based on Quran and Sunnah principles for halal
                relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
