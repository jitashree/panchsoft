'use client';

import React from 'react';
import Image from 'next/image';
// import { cn } from '@/lib/utils';

const Banner = () => {
  return (
   <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
         {/* Background Image */}
         <Image
           src="/aboutbanner1.avif" // <-- Replace with your image path (in public/)
           alt="Banner Background"
           layout="fill"
           objectFit="cover"
           className="z-0"
         />
   
         {/* Overlay */}
         <div className="absolute inset-0 bg-black/60 z-10"></div>
   
         {/* Content */}
         <div className="relative z-20 max-w-4xl text-center px-6">
           <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
             Overview
           </h1>
           <p className="text-white text-sm md:text-base leading-relaxed">
             we started our journey from ........... and try to serve our nation with quality and reliable deliveries. sit amet consectetur adipisicing elit. Facilis velit totam eius cumque inventore doloribus, excepturi debitis et ea nam fugit nihil ipsa pariatur tempora, consequatur iste quae voluptas aperiam cupiditate cum quisquam reiciendis, ullam voluptate modi. Aut sunt, soluta numquam deserunt cum dignissimos eum odio repudiandae consequuntur vel officia?


           </p>
         </div>
       </section>

  )
};

export default Banner;
