import React from 'react'
import CareerBanner from './components/CareerBanner'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'

export default function page() {
  return (
    <div>
      <CareerBanner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  )
}
