import React from 'react'
import { BadgeCheck, Users, Lightbulb, Heart } from 'lucide-react'

const values = [
  {
    title: 'Supportive Team Culture',
    description: 'We value collaboration, open communication, and respect across all departments.',
    icon: <Users className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: 'Innovation Driven',
    description: 'We encourage bold ideas, continuous learning, and curiosity.',
    icon: <Lightbulb className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: 'Work-Life Balance',
    description: 'We offer flexibility and trust to help you thrive in and out of work.',
    icon: <Heart className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: 'Recognition & Growth',
    description: 'We recognize hard work and offer real growth opportunities.',
    icon: <BadgeCheck className="w-6 h-6 text-indigo-600" />,
  },
]

const WhyWorkWithUs = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Work With Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We don’t just offer jobs, we offer meaningful careers where your impact matters. Here’s what sets us apart.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition text-left">
              <div className="flex items-start gap-4">
                {value.icon}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">{value.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyWorkWithUs
