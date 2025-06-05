'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const UploadCV = () => {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // handle form submission logic here
    console.log('Submitting CV:', file)
  }

  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-2xl bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Upload Your CV</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input type="text" id="name" placeholder="Your full name" required />
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input type="email" id="email" placeholder="you@example.com" required />
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Write a short message..." rows={4} />
          </div>

          <div>
            <Label htmlFor="cv">Upload CV</Label>
            <Input
              id="cv"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
            />
            {file && <p className="text-sm text-gray-500 mt-2">Selected: {file.name}</p>}
          </div>

          <Button type="submit" className="w-full">Submit Application</Button>
        </form>
      </div>
    </section>
  )
}

export default UploadCV
