'use client';

import React from 'react';

const ProfileSection = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white">
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        {/* Left Side */}
        <div>
          <p className="text-xl font-semibold text-gray-800">
            OUR <b>PROFILE</b>
          </p>
          <div className="mt-4 space-y-4">
            <p className="text-lg font-medium text-gray-700">We are Professionals</p>
            <p className="text-sm text-gray-600">
              Don’t hesitate to contact us for any kind of information
            </p>
            <div className="text-sm text-gray-700 mt-4 space-y-3">
              <p>
                DCB 115/116 1st Floor, DLF Cyber City, Idco Info Park, Technology Corridor, <br />
                Chandaka Industrial Estate, Patia, Bhubaneswar - 751024.
              </p>
              <p>+91 **********</p>
              <p>
                <a href="mailto:contact@panchsofttechnologies.com" className="text-blue-500 underline">
                  contact@panchsofttechnologies.com
                </a>
              </p>
              <p>
                <a href="https://www.panchsofttechnologies.com" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                  www.panchsofttechnologies.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <p className="text-gray-500 text-sm mb-2">For Every Type of Business</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Entrust Your Project to Our Best Team of Professionals
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
