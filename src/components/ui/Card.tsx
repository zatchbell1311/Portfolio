import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div
      {...fadeInUp}
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${className}`}
    >
      {children}
    </motion.div>
  );
}