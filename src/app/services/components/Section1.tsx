import React from 'react';
import { Button } from "@/components/ui/button";

const Section1 = () => {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="container mx-auto px-4 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover what we offer to help you grow and succeed.
          </p>
        </div>

        {/* Services List */}
        <div className="grid md:grid-cols-3 gap-8" id="services">
          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Web Development</h3>
            <p className="text-gray-600 mb-4">Modern and responsive websites using the latest technologies.</p>
            <Button variant="outline">Learn More</Button>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">UI/UX Design</h3>
            <p className="text-gray-600 mb-4">User-first design principles to create intuitive experiences.</p>
            <Button variant="outline">Learn More</Button>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Consulting</h3>
            <p className="text-gray-600 mb-4">Expert advice to streamline your digital strategy.</p>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
         {/* Services List */}
        <div className="grid md:grid-cols-3 gap-8" id="services">
          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Web Development</h3>
            <p className="text-gray-600 mb-4">Modern and responsive websites using the latest technologies.</p>
            <Button variant="outline">Learn More</Button>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">UI/UX Design</h3>
            <p className="text-gray-600 mb-4">User-first design principles to create intuitive experiences.</p>
            <Button variant="outline">Learn More</Button>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Consulting</h3>
            <p className="text-gray-600 mb-4">Expert advice to streamline your digital strategy.</p>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
