"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TestimonialFilterProps {
  services: string[];
  activeFilter: string;
  onFilterChange: (service: string) => void;
}

export function TestimonialFilter({
  services,
  activeFilter,
  onFilterChange,
}: TestimonialFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={activeFilter === "all" ? "default" : "outline"}
        onClick={() => onFilterChange("all")}
        className={cn(
          "rounded-full",
          activeFilter === "all" && "bg-primary text-primary-foreground"
        )}
      >
        Tous
      </Button>
      {services.map((service) => (
        <Button
          key={service}
          variant={activeFilter === service ? "default" : "outline"}
          onClick={() => onFilterChange(service)}
          className={cn(
            "rounded-full",
            activeFilter === service && "bg-primary text-primary-foreground"
          )}
        >
          {service}
        </Button>
      ))}
    </div>
  );
}