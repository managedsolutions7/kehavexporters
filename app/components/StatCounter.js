"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const StatCounter = ({ end, label, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCount(prev => {
          if (prev < end) {
            const increment = Math.ceil((end - prev) / 20);
            return Math.min(prev + increment, end);
          }
          clearInterval(timer);
          return end;
        });
      }, duration * 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-[#348E4E] mb-2">
        {count}+
      </div>
      <div className="text-lg text-[#1A3A5A] font-medium">
        {label}
      </div>
    </motion.div>
  );
};

export default StatCounter;