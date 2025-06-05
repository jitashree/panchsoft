import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const Section2 = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">
            Discover the Power of Simplicity
          </h2>
          <p className="text-gray-600 text-lg">
            Build modern applications faster and easier with a clean, efficient design system powered by Tailwind and shadcn/ui.
          </p>
          <Button className="mt-4">Get Started</Button>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <Image
            src="/side1.avif" // make sure this image exists in public/images
            alt="Illustration"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;
