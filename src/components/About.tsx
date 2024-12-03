import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, GitBranch, Music, BookHeart } from 'lucide-react';
import { Skills } from './sections/Skills';
import { fadeInUp, staggerContainer } from '../utils/animations';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            About Me
          </motion.h2>

          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I'm a passionate software developer and prompt engineer with a keen interest
              in creating elegant solutions to complex problems. My journey in technology
              has equipped me with a diverse skill set and a deep understanding of
              modern development practices.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              {[
                { icon: Code2, text: 'Programming' },
                { icon: Database, text: 'AI Tools' },
                { icon: GitBranch, text: 'Version Control' },
                { icon: Music, text: 'Music Enthusiast' },
                { icon: BookHeart, text: 'Ghost Stories' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
                >
                  <item.icon className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <Skills />
        </motion.div>
      </div>
    </section>
  );
}