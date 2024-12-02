"use client";

import { BlogPost } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface BlogRelatedProps {
  posts: BlogPost[];
}

export function BlogRelated({ posts }: BlogRelatedProps) {
  if (posts.length === 0) return null;

  return (
    <motion.div 
      className="bg-gray-50 p-6 rounded-lg"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h3 className="text-lg font-semibold mb-4">Articles similaires</h3>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 * index }}
          >
            <Link
              href={`/blog/${post.id}`}
              className="flex gap-4 group hover:bg-gray-100 p-2 rounded-lg transition-colors"
            >
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h4 className="font-medium group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {new Date(post.date).toLocaleDateString("fr-FR")}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}