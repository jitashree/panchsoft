import React from 'react';
import { Button } from "@/components/ui/button";

const ServiceBanner = () => {
  return (
    <section className="relative w-full py-24 text-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/servicebanner.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our Services Tailored to Your Needs
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          We provide scalable, user-focused solutions designed to grow with your business. From design to deployment, we’ve got you covered.
        </p>
        <Button className="bg-white text-blue-600 hover:bg-gray-100 transition">
          Explore Services
        </Button>
      </div>
    </section>

    
  );
};

export default ServiceBanner;