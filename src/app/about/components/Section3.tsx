import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const Section3 = () => {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <Image
            src="/sidetrans.png" // Replace with your actual image in /public/images
            alt="Feature Image"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">
            Powerful Features at Your Fingertips
          </h2>
          <p className="text-gray-600 text-lg">
            Unlock productivity and streamline your workflow with our modern, easy-to-use platform. Built with performance and design in mind.
          </p>
          <Button>Learn More</Button>
        </div>
        
      </div>
    </section>
  );
};

export default Section3;
