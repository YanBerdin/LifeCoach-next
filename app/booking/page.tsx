"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { BookingCalendar } from "@/components/booking/booking-calendar";
import { ServiceSelector } from "@/components/booking/service-selector";
import { PaymentForm } from "@/components/booking/payment-form";
import { Service, TimeSlot, services } from "@/lib/booking";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
  const [activeTab, setActiveTab] = useState("service");

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setActiveTab("calendar");
  };

  const handleTimeSlotSelect = (slot: TimeSlot) => {
    setSelectedTimeSlot(slot);
    setActiveTab("payment");
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Réservation"
        description="Réservez votre séance en quelques clics"
      />
      
      <Container className="py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="service">Service</TabsTrigger>
            <TabsTrigger 
              value="calendar" 
              disabled={!selectedService}
            >
              Calendrier
            </TabsTrigger>
            <TabsTrigger 
              value="payment"
              disabled={!selectedService || !selectedTimeSlot}
            >
              Paiement
            </TabsTrigger>
          </TabsList>

          <TabsContent value="service">
            <ServiceSelector
              services={services}
              selectedService={selectedService}
              onSelectService={handleServiceSelect}
            />
          </TabsContent>

          <TabsContent value="calendar">
            {selectedService && (
              <BookingCalendar onSelectSlot={handleTimeSlotSelect} />
            )}
          </TabsContent>

          <TabsContent value="payment">
            {selectedService && selectedTimeSlot && (
              <PaymentForm
                service={selectedService}
                timeSlot={selectedTimeSlot}
              />
            )}
          </TabsContent>
        </Tabs>
      </Container>
    </main>
  );
}