import React from 'react'
import Image from 'next/image'

const images = [
  { src: '/photogallary1.avif', title: 'Project Alpha' },
  { src: '/photogallary2.avif', title: 'Creative Space' },
  { src: '/photogallary3.avif', title: 'Modern Design' },
  { src: '/photogallary4.avif', title: 'Studio Vibe' },
  { src: '/photogallary5.avif', title: 'Urban Touch' },
  { src: '/photogallary6.jpg', title: 'Digital Realm' },
]

const Section2 = () => {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Photo Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative w-full h-64 rounded-xl overflow-hidden shadow-md group"
            >
              {/* Background Image */}
              <Image
                src={img.src}
                alt={img.title}
                layout="fill"
                objectFit="cover"
                className="rounded-xl transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white text-xl font-semibold">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section2
