import React from 'react'
import ServiceBanner from './components/ServiceBanner';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

const page = () => {
  return (
    <div>
      <ServiceBanner />
      <Section1 />
      <Section2 />
    </div>
  )
}

export default page
