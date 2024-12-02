"use client";

import { Service } from "@/lib/booking";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ServiceSelectorProps {
  services: Service[];
  selectedService: Service | null;
  onSelectService: (service: Service) => void;
}

export function ServiceSelector({
  services,
  selectedService,
  onSelectService,
}: ServiceSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card
            className={`cursor-pointer transition-all ${
              selectedService?.id === service.id
                ? "border-primary shadow-lg"
                : "hover:border-primary/50"
            }`}
            onClick={() => onSelectService(service)}
          >
            <CardHeader>
              <CardTitle className="text-lg">{service.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Durée:</span>
                  <span>{service.duration} minutes</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Prix:</span>
                  <span>{(service.price / 100).toFixed(2)}€</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}