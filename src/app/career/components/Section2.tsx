import React from 'react'
import { Button } from "@/components/ui/button"

export default function Section2() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Current Openings</h2>
          <p className="text-gray-600 mt-2">
            Explore roles where your talent can make an impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Job Card */}
          {[
            { title: 'Frontend Developer', location: 'Remote', type: 'Full-time' },
            { title: 'UX/UI Designer', location: 'Bangalore', type: 'Contract' },
            { title: 'Project Manager', location: 'Remote', type: 'Full-time' },
            { title: 'QA Engineer', location: 'Mumbai', type: 'Full-time' },
          ].map((job, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {job.location} • {job.type}
              </p>
              <Button className="mt-4">Apply Now</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
