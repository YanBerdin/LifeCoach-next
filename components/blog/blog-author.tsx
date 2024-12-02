"use client";

import { motion } from "framer-motion";

interface BlogAuthorProps {
  author: string;
}

export function BlogAuthor({ author }: BlogAuthorProps) {
  return (
    <motion.div 
      className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h3 className="text-lg font-semibold mb-2">À propos de l'auteur</h3>
      <p className="text-gray-600">{author}</p>
    </motion.div>
  );
}