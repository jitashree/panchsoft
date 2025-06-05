'use client';

import React from 'react';

const Section2 = () => {
  return (
    <section
      className="relative w-full h-[80vh] bg-fixed bg-center bg-cover flex items-center justify-center px-6 text-center"
      style={{ backgroundImage: "url('/banner2.jpg')" }} // put image in /public
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl text-white">
        <p className="text-blue-400 text-lg mb-2">We are Perfect Solution</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">OUR SUCCESS STORY</h1>
        <p className="text-sm md:text-base leading-relaxed">
          Since 2022, we've excelled in India's competitive exam sector, offering comprehensive infrastructure and skilled personnel. Our services now encompass security solutions, biometric authentication, and technical support. We're OMR exam pioneers with a nationwide network and advanced features like live CCTV and signal jamming. We prioritize safety during the pandemic with COVID-19 kits and venue sanitization. Proudly supporting government competitive exams, we've helped countless candidates succeed.
        </p>
      </div>
    </section>
  );
};

export default Section2;
