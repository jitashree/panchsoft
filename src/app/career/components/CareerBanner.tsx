import React from 'react'
import Image from 'next/image'

const CareerBanner = () => {
  return (
    <section className="relative w-full h-[500px]">
      {/* Background Image */}
      <Image
        src="/careerbanner1.avif" // Replace with your actual banner image path
        alt="Career Banner"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Explore exciting career opportunities and grow with us in a culture of innovation, collaboration, and impact.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CareerBanner
