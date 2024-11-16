'use client'

import { useState } from 'react'
import { Button } from "@/component/button"
import { Input } from '@/component/input'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter signup logic
    console.log('Signing up with email:', email)
    setEmail('')
  }

  return (
    <div className="bg-green-600 text-white py-[100px] flex flex-col items-center justify-center px-8">
      <div className="max-w-2xl container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">
          Get Ahead of the Line
        </h1>
        <p className="mb-8 text-xm">
          Be the first to enjoy fast, reliable food and grocery delivery with secure digital
          payments and exclusive rewards.
        </p>
        
        <h2 className="text-xl font-semibold mb-6">
          Subscribe to our Newsletter now
        </h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="relative w-full max-w-md">
            <Input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full py-3 px-4 rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  )
}