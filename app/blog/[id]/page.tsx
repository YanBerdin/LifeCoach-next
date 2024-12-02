import { Navbar } from "@/components/layout/navbar";
import { Container } from "@/components/layout/container";
import { BlogHeader } from "@/components/blog/blog-header";
import { BlogContent } from "@/components/blog/blog-content";
import { BlogAuthor } from "@/components/blog/blog-author";
import { BlogRelated } from "@/components/blog/blog-related";
import { blogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <BlogHeader post={post} />
      
      <Container className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <BlogContent content={post.content} />
          </div>
          <div className="space-y-8">
            <BlogAuthor author={post.author} />
            <BlogRelated posts={relatedPosts} />
          </div>
        </div>
      </Container>
    </main>
  );
}