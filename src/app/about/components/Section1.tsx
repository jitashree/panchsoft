'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card'; // Requires shadcn/ui setup
import { Button } from '@/components/ui/button';
const Section1 = () => {
  return (
    <section className="relative py-12 bg-gray-50">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-4 shadow-md">
          <CardContent>
            <h1 className="text-2xl font-bold mb-2">Scalable Solutions</h1>
            <p className="text-gray-600 text-sm">
              Efficiently manage both online and offline exams with our robust platform.
            </p>
          </CardContent>
        </Card>

        <Card className="p-4 shadow-md">
          <CardContent>
            <h1 className="text-2xl font-bold mb-2">Nationwide Coverage</h1>
            <p className="text-gray-600 text-sm">
              Our PAN India network ensures wide accessibility for examination centers.
            </p>
          </CardContent>
        </Card>

        <Card className="p-4 shadow-md">
          <CardContent>
            <h1 className="text-2xl font-bold mb-2">Trusted Support</h1>
            <p className="text-gray-600 text-sm">
              Backed by experienced professionals to ensure smooth operations.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Section1;
