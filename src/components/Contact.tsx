import React from 'react';
import { Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Contact Me
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg mb-8">
            If you'd like to get in touch, please send your message to:
          </p>
          <div className="space-y-4">
            <a
              href="mailto:dhruvdubey1311@gmail.com"
              className="flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Mail className="w-5 h-5" />
              dhruvdubey1311@gmail.com
            </a>
            <a
              href="mailto:dhruvdubeywork@gmail.com"
              className="flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Mail className="w-5 h-5" />
              dhruvdubeywork@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}