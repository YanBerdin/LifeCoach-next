import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Testimonial } from "@/lib/testimonials";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Card className="h-full">
      <CardHeader className="space-y-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            {testimonial.imageUrl && (
              <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} />
            )}
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">{testimonial.name}</div>
            <div className="text-sm text-gray-600">{testimonial.role}</div>
          </div>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < testimonial.rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <blockquote className="text-gray-600">"{testimonial.content}"</blockquote>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <span>{testimonial.service}</span>
          <span>{new Date(testimonial.date).toLocaleDateString("fr-FR")}</span>
        </div>
      </CardContent>
    </Card>
  );
}