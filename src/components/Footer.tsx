'use client';

import React from 'react';
// import { Facebook, Twitter, Mail, Linkedin } from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 pb-10">
        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <p>
                DCB 115/116, 1st Floor, DLF Cyber City, Idco Info Park, Technology Corridor,
                <br /> Chandaka Industrial Estate, Patia, Bhubaneswar - 751024.
              </p>
            </li>
            <li>
              <a href="tel:+91XXXXXXXXXX" className="hover:underline">
                +91 **********
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@panchsofttechnologies.com"
                className="hover:underline"
              >
                contact@panchsofttechnologies.com
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/career" className="hover:underline">Career</a></li>
            <li><a href="/achievements" className="hover:underline">Achievements</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Google Map */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Reach Us</h3>
          <iframe
            className="rounded-lg w-full h-48 border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.820266958043!2d85.80516117557963!3d20.349042381135686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1908e025984c55%3A0xee1fcd1f11e55141!2sDLF%20CYBER%20CITY!5e0!3m2!1sen!2sin!4v1735802466845!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Company Location"
          ></iframe>
        </div>

        {/* Social Media Icons */}
        {/* <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="mailto:contact@panchsofttechnologies.com" aria-label="Mail" className="hover:text-white">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div> */}
      </div>

      {/* Copyright */}
      <div className="text-center py-6 border-t border-gray-700 text-sm text-gray-400">
        <p>All Rights Reserved. © 2023 PanchSoft Technologies</p>
      </div>
    </footer>
  );
};

export default Footer;
