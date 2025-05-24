"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChefHat, Search, Filter, Clock, Users, ArrowLeft, Play } from "lucide-react"
import Link from "next/link"
import { recipeDatabase } from "../data/recipes"

export default function RecipesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCuisine, setSelectedCuisine] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const cuisines = ["all", "Indian", "Italian", "Chinese", "Mexican", "Arabian", "Turkish", "Lebanese"]
  const difficulties = ["all", "Easy", "Medium", "Hard"]
  const categories = ["all", "Main Course", "Appetizer", "Dessert", "Salad"]

  const filteredRecipes = recipeDatabase.filter((recipe) => {
    const matchesSearch =
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some((ing) => ing.toLowerCase().includes(searchTerm.toLowerCase())) ||
      recipe.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCuisine = selectedCuisine === "all" || recipe.cuisine === selectedCuisine
    const matchesDifficulty = selectedDifficulty === "all" || recipe.difficulty === selectedDifficulty
    const matchesCategory = selectedCategory === "all" || recipe.category === selectedCategory

    return matchesSearch && matchesCuisine && matchesDifficulty && matchesCategory
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Hard":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCuisineFlag = (cuisine: string) => {
    const flags: { [key: string]: string } = {
      Indian: "🇮🇳",
      Italian: "🇮🇹",
      Chinese: "🇨🇳",
      Mexican: "🇲🇽",
      Arabian: "🇸🇦",
      Turkish: "🇹🇷",
      Lebanese: "🇱🇧",
    }
    return flags[cuisine] || "🍽️"
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
                Recipe Collection
              </h1>
            </div>
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold">
              {filteredRecipes.length} Recipes Found
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Search and Filters */}
        <Card className="shadow-lg border-orange-200 bg-white/95 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
              <Filter className="w-5 h-5 mr-2 text-orange-500" />
              Search & Filter Recipes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search recipes, ingredients, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-orange-200 focus:border-orange-400 font-medium"
                  />
                </div>
              </div>
              <Select value={selectedCuisine} onValueChange={setSelectedCuisine}>
                <SelectTrigger className="border-orange-200 focus:border-orange-400">
                  <SelectValue placeholder="Cuisine" />
                </SelectTrigger>
                <SelectContent>
                  {cuisines.map((cuisine) => (
                    <SelectItem key={cuisine} value={cuisine}>
                      {cuisine === "all" ? "All Cuisines" : `${getCuisineFlag(cuisine)} ${cuisine}`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="border-orange-200 focus:border-orange-400">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  {difficulties.map((difficulty) => (
                    <SelectItem key={difficulty} value={difficulty}>
                      {difficulty === "all" ? "All Levels" : difficulty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="border-orange-200 focus:border-orange-400">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Recipe Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <Card
              key={recipe.id}
              className="shadow-lg border-orange-200 bg-white/95 backdrop-blur-sm hover:shadow-xl transition-shadow"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl">{getCuisineFlag(recipe.cuisine)}</span>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800 font-semibold">
                        {recipe.cuisine}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">{recipe.name}</CardTitle>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-orange-500" />
                    <span className="font-medium">{recipe.cookTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1 text-orange-500" />
                    <span className="font-medium">{recipe.servings} servings</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Recipe Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center">
                  <ChefHat className="w-16 h-16 text-orange-300" />
                </div>

                {/* Difficulty and Category */}
                <div className="flex items-center justify-between">
                  <Badge className={getDifficultyColor(recipe.difficulty)}>{recipe.difficulty}</Badge>
                  <Badge variant="outline" className="border-orange-300 text-orange-700">
                    {recipe.category}
                  </Badge>
                </div>

                {/* Ingredients Preview */}
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Key Ingredients:</h4>
                  <p className="text-gray-600 text-sm font-medium">
                    {recipe.ingredients.slice(0, 3).join(", ")}
                    {recipe.ingredients.length > 3 && "..."}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {recipe.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-800 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Chef's Tip Preview */}
                <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                  <h5 className="font-bold text-yellow-800 text-sm mb-1">💡 Chef's Tip:</h5>
                  <p className="text-yellow-700 text-sm font-medium">
                    {recipe.tips.length > 80 ? `${recipe.tips.substring(0, 80)}...` : recipe.tips}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold">
                    View Recipe
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-orange-300 text-orange-600 hover:bg-orange-50"
                    onClick={() => window.open(recipe.videoUrl, "_blank")}
                  >
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredRecipes.length === 0 && (
          <Card className="shadow-lg border-orange-200 bg-white/95 backdrop-blur-sm">
            <CardContent className="text-center py-12">
              <ChefHat className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">No Recipes Found</h3>
              <p className="text-gray-600 font-medium mb-4">
                Try adjusting your search terms or filters to find more recipes.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCuisine("all")
                  setSelectedDifficulty("all")
                  setSelectedCategory("all")
                }}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold"
              >
                Clear All Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          <Card className="shadow-lg border-orange-200 bg-white/95 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">{recipeDatabase.length}+</div>
              <div className="text-gray-700 font-semibold">Total Recipes</div>
            </CardContent>
          </Card>
          <Card className="shadow-lg border-orange-200 bg-white/95 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
              <div className="text-gray-700 font-semibold">Cuisines</div>
            </CardContent>
          </Card>
          <Card className="shadow-lg border-orange-200 bg-white/95 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">80+</div>
              <div className="text-gray-700 font-semibold">Video Tutorials</div>
            </CardContent>
          </Card>
          <Card className="shadow-lg border-orange-200 bg-white/95 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-700 font-semibold">AI Support</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
