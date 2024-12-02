"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Service, TimeSlot } from "@/lib/booking";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { loadStripe } from "@stripe/stripe-js";
import { motion } from "framer-motion";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface PaymentFormProps {
  service: Service;
  timeSlot: TimeSlot;
}

export function PaymentForm({ service, timeSlot }: PaymentFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          serviceId: service.id,
          timeSlotId: timeSlot.id,
        }),
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;
      await stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error("Payment error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Récapitulatif de la réservation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Service sélectionné</h4>
              <p className="text-gray-600">{service.name}</p>
            </div>
            <div>
              <h4 className="font-medium">Date et heure</h4>
              <p className="text-gray-600">
                {format(new Date(timeSlot.startTime), "d MMMM yyyy 'à' HH'h'mm", {
                  locale: fr,
                })}
              </p>
            </div>
            <div>
              <h4 className="font-medium">Prix</h4>
              <p className="text-2xl font-bold">
                {(service.price / 100).toFixed(2)}€
              </p>
            </div>
            <Button
              className="w-full"
              onClick={handlePayment}
              disabled={isLoading}
            >
              {isLoading ? "Traitement en cours..." : "Procéder au paiement"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}