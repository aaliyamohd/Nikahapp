"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Heart, Send, ArrowLeft, Search, MoreVertical, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(1)
  const [newMessage, setNewMessage] = useState("")

  const conversations = [
    {
      id: 1,
      name: "Sarah Khan",
      lastMessage: "Assalamu alaikum! Thank you for your interest in my profile...",
      time: "10 min ago",
      unread: 3,
      online: true,
      location: "London, UK",
    },
    {
      id: 2,
      name: "Mariam Hassan",
      lastMessage: "I'd love to know more about your family background...",
      time: "2 hours ago",
      unread: 0,
      online: false,
      location: "New York, USA",
    },
    {
      id: 3,
      name: "Khadija Omar",
      lastMessage: "MashAllah, your profile is very impressive. I think we might be compatible...",
      time: "1 day ago",
      unread: 1,
      online: true,
      location: "Manchester, UK",
    },
    {
      id: 4,
      name: "Amina Khan",
      lastMessage: "Thank you for the thoughtful message. I appreciate your approach...",
      time: "2 days ago",
      unread: 0,
      online: false,
      location: "Sydney, Australia",
    },
  ]

  const messages = [
    {
      id: 1,
      senderId: 2,
      content:
        "Assalamu alaikum! Thank you for your interest in my profile. I've read through yours and I'm impressed by your values and goals.",
      timestamp: "2:30 PM",
      type: "received",
    },
    {
      id: 2,
      senderId: 1,
      content:
        "Wa alaikum assalam! Thank you for your kind words. I really appreciate your thoughtful approach to finding a life partner.",
      timestamp: "2:35 PM",
      type: "sent",
    },
    {
      id: 3,
      senderId: 2,
      content:
        "I'd love to know more about your family background and what you're looking for in a marriage. Would you be comfortable sharing more about your values and expectations?",
      timestamp: "2:40 PM",
      type: "received",
    },
    {
      id: 4,
      senderId: 1,
      content:
        "Of course! I come from a close-knit family that values Islamic principles and education. We believe in maintaining strong family bonds while also supporting individual growth and career aspirations.",
      timestamp: "2:45 PM",
      type: "sent",
    },
    {
      id: 5,
      senderId: 2,
      content:
        "That sounds wonderful! Family is very important to me as well. I'm curious about your thoughts on balancing career and family life in an Islamic marriage.",
      timestamp: "2:50 PM",
      type: "received",
    },
  ]

  const selectedConversation = conversations.find((conv) => conv.id === selectedChat)

  const handleSendMessage = () => {
    if (!newMessage.trim()) return
    // Handle sending message logic here
    setNewMessage("")
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
                Messages
              </h1>
            </div>
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold">
              {conversations.filter((c) => c.unread > 0).length} Unread
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 h-[calc(100vh-120px)]">
        <div className="grid lg:grid-cols-3 gap-6 h-full">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-rose-200 bg-white/95 backdrop-blur-sm h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800">Conversations</CardTitle>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search conversations..."
                    className="pl-10 border-rose-200 focus:border-rose-400 font-medium"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-1 overflow-y-auto p-0">
                <div className="space-y-1">
                  {conversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      onClick={() => setSelectedChat(conversation.id)}
                      className={`p-4 cursor-pointer transition-colors border-b border-gray-100 hover:bg-rose-50 ${
                        selectedChat === conversation.id ? "bg-rose-100 border-l-4 border-l-rose-500" : ""
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="relative">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold">
                              {conversation.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          {conversation.online && (
                            <span className="absolute -bottom-1 -right-1 bg-green-500 border-2 border-white rounded-full w-4 h-4"></span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="font-bold text-gray-800 truncate">{conversation.name}</h4>
                            <div className="flex items-center space-x-2">
                              {conversation.unread > 0 && (
                                <Badge className="bg-rose-500 text-white text-xs">{conversation.unread}</Badge>
                              )}
                              <span className="text-xs text-gray-500">{conversation.time}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 truncate font-medium mt-1">{conversation.lastMessage}</p>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <MapPin className="w-3 h-3 mr-1" />
                            {conversation.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-rose-200 bg-white/95 backdrop-blur-sm h-full flex flex-col">
              {selectedConversation && (
                <>
                  {/* Chat Header */}
                  <CardHeader className="border-b border-rose-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold">
                              {selectedConversation.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          {selectedConversation.online && (
                            <span className="absolute -bottom-1 -right-1 bg-green-500 border-2 border-white rounded-full w-4 h-4"></span>
                          )}
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-gray-800">{selectedConversation.name}</CardTitle>
                          <CardDescription className="text-gray-600 font-medium flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {selectedConversation.location}
                            {selectedConversation.online && (
                              <span className="ml-2 text-green-600 font-semibold">Online</span>
                            )}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon" className="text-rose-600 hover:bg-rose-50">
                          <Phone className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-100">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>

                  {/* Messages */}
                  <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.type === "sent" ? "justify-end" : "justify-start"}`}
                      >
                        <div className={`max-w-[70%] ${message.type === "sent" ? "order-2" : "order-1"}`}>
                          <div
                            className={`p-4 rounded-lg ${
                              message.type === "sent"
                                ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            <p className="font-medium leading-relaxed">{message.content}</p>
                          </div>
                          <p
                            className={`text-xs text-gray-500 mt-1 ${
                              message.type === "sent" ? "text-right" : "text-left"
                            }`}
                          >
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>

                  {/* Message Input */}
                  <div className="border-t border-rose-100 p-4">
                    <div className="flex space-x-3">
                      <Input
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message with Islamic etiquette..."
                        className="flex-1 border-rose-200 focus:border-rose-400 font-medium"
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      />
                      <Button
                        onClick={handleSendMessage}
                        className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold"
                        disabled={!newMessage.trim()}
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      Remember to maintain Islamic etiquette in all conversations
                    </p>
                  </div>
                </>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
