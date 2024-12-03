import React from 'react';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { ProfileImage } from './ProfileImage';

export function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Dhruv_Dubey_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <ProfileImage />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dhruv Dubey
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Prompt Engineer & Software Developer
              <span className="block mt-2 text-blue-400">
                Crafting Ideas into Solutions
              </span>
            </p>
            <div className="flex gap-4 justify-center md:justify-start mb-8">
              <a 
                href="https://github.com/zatchbell1311" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/d-dubeyofficialwork" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:dhruvdubey1311@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <button 
              onClick={handleDownloadResume}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 mx-auto md:mx-0 transition-colors"
            >
              <FileDown className="w-5 h-5" />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}