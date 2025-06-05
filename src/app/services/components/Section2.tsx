import React from 'react';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const Section2 = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">

        {/* Range Options (4 buttons) */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Select Range</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline">Basic</Button>
            <Button variant="outline">Standard</Button>
            <Button variant="outline">Premium</Button>
            <Button variant="outline">Enterprise</Button>
          </div>
        </div>

        {/* Dropdown-like Menu (5-6 options) */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Choose Service</h2>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                Choose a service...
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full space-y-2">
              <Button variant="ghost" className="w-full justify-start">Web Development</Button>
              <Button variant="ghost" className="w-full justify-start">UI/UX Design</Button>
              <Button variant="ghost" className="w-full justify-start">Consulting</Button>
              <Button variant="ghost" className="w-full justify-start">SEO Services</Button>
              <Button variant="ghost" className="w-full justify-start">Digital Marketing</Button>
              <Button variant="ghost" className="w-full justify-start">Technical Support</Button>
            </PopoverContent>
          </Popover>
        </div>

      </div>
    </section>
  );
};

export default Section2;
