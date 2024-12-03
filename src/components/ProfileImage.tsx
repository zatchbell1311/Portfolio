import React, { useState } from 'react';

export function ProfileImage() {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div className="relative w-64 h-64">
      <div 
        className={`w-full h-full rounded-full transition-transform duration-700 transform preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* Front - Profile Image */}
        <div className="absolute w-full h-full rounded-full backface-hidden">
          <img
            src="/profile.jpg"
            alt="Dhruv Dubey"
            className="w-full h-full rounded-full object-cover border-4 border-blue-500"
          />
        </div>
        
        {/* Back - Skills */}
        <div className="absolute w-full h-full rounded-full backface-hidden rotate-y-180 bg-blue-600 p-4">
          <div className="flex flex-col items-center justify-center h-full text-white">
            <h3 className="font-bold text-lg mb-2">Skills</h3>
            <ul className="text-sm text-center">
              <li>React & TypeScript</li>
              <li>Node.js & Express</li>
              <li>C++ & Swift</li>
              <li>AI & Machine Learning</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}