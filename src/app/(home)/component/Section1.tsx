'use client';

import React from 'react';

const Section1 = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/our-vision.webp" // Place your image in /public/images/
            alt="Bookshelf"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Vision</h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, fugit harum eaque esse possimus vero doloremque enim quos pariatur molestias vitae modi blanditiis numquam delectus minus ipsum dolorum recusandae maiores. 
          </p>
          <p className="text-gray-700">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorum debitis excepturi quod dolore earum numquam error ullam id accusamus, alias consequatur, dicta, quis rem dolores ipsam deleniti esse vel.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Section1;

