"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TimeSlot, getAvailableTimeSlots } from "@/lib/booking";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { motion } from "framer-motion";

interface BookingCalendarProps {
  onSelectSlot: (slot: TimeSlot) => void;
}

export function BookingCalendar({ onSelectSlot }: BookingCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      setTimeSlots(getAvailableTimeSlots(date));
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Choisissez une date et un horaire</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              locale={fr}
              className="rounded-md border"
            />
          </div>
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {selectedDate && (
              <div className="text-sm text-gray-500 mb-4">
                Horaires disponibles pour le{" "}
                {format(selectedDate, "d MMMM yyyy", { locale: fr })}
              </div>
            )}
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((slot) => (
                <Button
                  key={slot.id}
                  variant={slot.available ? "outline" : "ghost"}
                  disabled={!slot.available}
                  onClick={() => slot.available && onSelectSlot(slot)}
                  className="justify-start"
                >
                  <Clock className="mr-2 h-4 w-4" />
                  {format(new Date(slot.startTime), "HH:mm")}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
}