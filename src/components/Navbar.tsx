'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-md bg-white/80 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-2xl font-bold text-gray-900">
          <Link href="/">
            <span>
              Panchsoft
              <span className="text-indigo-600"> Technologies</span>
            </span>
          </Link>
        </div>

        {/* Right: Nav Links */}
        <div className="hidden md:flex space-x-6 text-white font-medium">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Achievements', path: '/achevement' },
            { name: 'Career', path: '/career' },
            { name: 'Contact', path: '/contact' },
          ].map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className="hover:text-indigo-600 transition"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
