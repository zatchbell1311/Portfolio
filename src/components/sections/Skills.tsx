import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../ui/Badge';
import { staggerContainer, fadeInUp } from '../../utils/animations';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs']
  },
  {
    title: 'Languages',
    skills: ['C++', 'Swift', 'JavaScript', 'Python']
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'Docker', 'AWS', 'Figma']
  }
];

export function Skills() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-8"
    >
      {skillCategories.map((category, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, i) => (
              <Badge key={i}>{skill}</Badge>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}