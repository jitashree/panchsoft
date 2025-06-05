import React from 'react'

export default function Section1() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 text-center space-y-6">
        <h2 className="text-4xl font-bold text-gray-800">Build Your Career With Us</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          At our company, we believe in empowering individuals to grow, innovate, and make meaningful contributions. Whether you&apos;re starting out or leveling up, we have a place for you.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <div className="bg-gray-100 rounded-xl p-6 w-full sm:w-64 shadow-md">
            <h4 className="text-xl font-semibold text-gray-800">Growth Culture</h4>
            <p className="text-sm text-gray-600 mt-2">We invest in your learning, development, and career path.</p>
          </div>
          <div className="bg-gray-100 rounded-xl p-6 w-full sm:w-64 shadow-md">
            <h4 className="text-xl font-semibold text-gray-800">Collaborative Teams</h4>
            <p className="text-sm text-gray-600 mt-2">Work with people who care and create meaningful impact together.</p>
          </div>
          <div className="bg-gray-100 rounded-xl p-6 w-full sm:w-64 shadow-md">
            <h4 className="text-xl font-semibold text-gray-800">Flexible Environment</h4>
            <p className="text-sm text-gray-600 mt-2">Enjoy work-life balance with hybrid or remote options.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
