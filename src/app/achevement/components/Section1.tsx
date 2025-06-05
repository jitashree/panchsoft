import React from 'react'
import Image from 'next/image'

const images = [
  '/certificate1.avif',
  '/certificate2.avif',
  '/certificate3.avif',
  '/certificate4.avif',
  '/certificate5.avif',
  '/certificate6.avif',
  '/certificate7.avif',

   '/certificate1.avif',
  '/certificate2.avif',
  '/certificate3.avif',
  '/certificate4.avif',
  '/certificate5.avif',
  '/certificate6.avif',
  '/certificate7.avif',
]

const Section1 = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Gallery</h2>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {images.map((src, index) => (
            <div key={index} className="min-w-[250px] relative h-64 flex-shrink-0 rounded-lg overflow-hidden shadow">
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section1
