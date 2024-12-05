"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BlogPost } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48 w-full">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <div className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full mb-2">
            {post.category}
          </div>
          <h3 className="text-xl font-semibold line-clamp-2 mb-2">
            {post.title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 line-clamp-2 mb-4">{post.excerpt}</p>
          <div className="flex items-center text-sm text-gray-500 gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString("fr-FR")}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}