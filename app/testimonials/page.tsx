"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { TestimonialFilter } from "@/components/testimonials/testimonial-filter";
import { testimonials } from "@/lib/testimonials";

export default function TestimonialsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const services = Array.from(
    new Set(testimonials.map((t) => t.service))
  );

  const filteredTestimonials = testimonials.filter(
    (t) => activeFilter === "all" || t.service === activeFilter
  );

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="Témoignages"
        description="Découvrez les retours d'expérience de nos clients et leurs parcours de transformation."
      />
      <Container className="py-16">
        <div className="space-y-12">
          <TestimonialFilter
            services={services}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}