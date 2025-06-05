import React from 'react'

const ContactBanner = () => {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/contact.avif" // 🔁 Replace with your image path
          alt="Contact Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          We&apos;re here to answer your questions. Reach out and our team will get back to you promptly.
        </p>
      </div>
    </section>
  )
}

export default ContactBanner
