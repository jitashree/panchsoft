'use client';

import React from 'react';
import Image from 'next/image';
// import { cn } from '@/lib/utils';

const Banner = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/banner1.jpg" // <-- Replace with your image path (in public/)
        alt="Banner Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl text-center px-6">
        <p className="text-white text-lg mb-2">Summary Overview</p>
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
          We provide Online & Offline Examination Auxiliary Services
        </h1>
        <p className="text-white text-sm md:text-base leading-relaxed">
          We provide infrastructure for online and offline examinations, catering to both recruitment and entrance exams.
          Our extensive network of verified testing nodes spans various locations across India, providing accessibility and convenience.
          Additionally, our PAN India association enables us to deliver corporate training facilities nationwide.
          We specialize in high-quality online and offline examination solutions, making large-scale assessments effortless.
          Our seasoned professionals are committed to delivering integrated and comprehensive services, ensuring the seamless
          organization of top-tier examinations.
        </p>
      </div>
    </section>
  );
};

export default Banner;
