import React from 'react'

const Section3 = () => {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Left Content Block */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Milestone Achievements</h3>
            <p className="text-gray-600">
  Over the past year, we&apos;ve successfully launched 30+ projects, expanded into 3 new markets, and grown our team by 50%.
</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>30+ Projects Delivered</li>
              <li>Global Expansion</li>
              <li>Team Growth</li>
            </ul>
          </div>

          {/* Right Content Block */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Recognitions & Awards</h3>
            <p className="text-gray-600">
              Our commitment to innovation and excellence has earned us recognition in the industry.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Top Innovator 2024 - TechWorld</li>
              <li>Best Startup of the Year</li>
              <li>Customer Satisfaction Award</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Section3
