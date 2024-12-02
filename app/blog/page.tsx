import { Navbar } from "@/components/layout/navbar";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { BlogCard } from "@/components/blog/blog-card";
import { FeaturedPost } from "@/components/blog/featured-post";
import { blogPosts } from "@/lib/blog";

export default function BlogPage() {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="Blog"
        description="Découvrez nos articles sur le développement personnel, le bien-être et la croissance personnelle."
      />
      <Container className="py-16">
        <div className="space-y-16">
          <FeaturedPost post={featuredPost} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}