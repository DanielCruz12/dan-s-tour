"use client"

import { useState } from "react"
import { Loader2, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setMessage("Thank you for subscribing!")
    setEmail("")
    setIsLoading(false)
  }

  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-24">
      <div className="absolute inset-0 bg-[url('/futuristic-grid.svg')] bg-center bg-repeat [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stay Updated with Our Newsletter
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Get the latest news and updates delivered straight to your inbox.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-md">
          <div className="flex gap-x-4">
            <Input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-w-0 flex-auto bg-white/10 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-white"
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-white text-black hover:bg-gray-200 focus:ring-2 focus:ring-white"
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Send className="mr-2 h-4 w-4" />
              )}
              Subscribe
            </Button>
          </div>
          {message && (
            <p className="mt-4 text-sm text-center text-green-400">{message}</p>
          )}
        </form>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <div className="h-px w-16 bg-white/20"></div>
          <p className="text-sm leading-6 text-gray-400">
            No spam. Just the good stuff.
          </p>
          <div className="h-px w-16 bg-white/20"></div>
        </div>
      </div>
    </section>
  )
}

