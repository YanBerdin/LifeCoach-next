"use client"

import { BlogPost } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

interface FeaturedPostProps {
  post: BlogPost;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative h-64 md:h-full">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <div className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full mb-4">
            {post.category}
          </div>
          <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
          <p className="text-gray-600 mb-6">{post.excerpt}</p>
          <div className="flex items-center text-sm text-gray-500 gap-4 mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString("fr-FR")}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>
          <Button asChild>
            <Link href={`/blog/${post.id}`}>Lire l'article</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}