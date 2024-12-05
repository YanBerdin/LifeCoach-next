"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  const paragraphs = content.split('\n').filter(p => p.trim());

  return (
    <motion.article 
      className={cn(
        "prose prose-lg max-w-none",
        "prose-headings:text-gray-900 prose-headings:font-bold",
        "prose-p:text-gray-600 prose-p:leading-relaxed",
        "prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        "prose-strong:text-gray-900 prose-strong:font-semibold",
        "prose-ul:list-disc prose-ul:pl-6",
        "prose-ol:list-decimal prose-ol:pl-6",
        "prose-blockquote:border-l-4 prose-blockquote:border-primary/20 prose-blockquote:pl-4 prose-blockquote:italic"
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {paragraphs.map((paragraph, index) => (
        <motion.p 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          className="mb-6"
        >
          {paragraph}
        </motion.p>
      ))}
    </motion.article>
  );
}
