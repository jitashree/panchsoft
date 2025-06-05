import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Achievement = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/banner1.jpg" // Make sure this image exists in /public/images/
        alt="Achievement Banner"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Our Achievements</h1>
        <p className="max-w-2xl text-lg md:text-xl">
          Celebrating milestones, success stories, and the impact we’ve made together.
        </p>
        <Button className="bg-white text-black hover:bg-gray-100 transition">
          Learn More
        </Button>
      </div>
    </section>
  )
}

export default Achievement
