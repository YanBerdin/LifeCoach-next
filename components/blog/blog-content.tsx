"use client";

import { motion } from "framer-motion";

interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <motion.article 
      className="prose prose-lg max-w-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {content.split('\n').map((paragraph, index) => (
        <motion.p 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
        >
          {paragraph}
        </motion.p>
      ))}
    </motion.article>
  );
}