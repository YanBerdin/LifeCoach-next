export interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  available: boolean;
}

export interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
  description: string;
}

export const services: Service[] = [
  {
    id: "coaching-individuel",
    name: "Coaching Individuel",
    duration: 60,
    price: 8000, // 80€ in cents
    description: "Séance individuelle de coaching personnalisé"
  },
  {
    id: "bilan-initial",
    name: "Bilan Initial",
    duration: 90,
    price: 12000, // 120€ in cents
    description: "Première séance approfondie pour définir vos objectifs"
  },
  {
    id: "suivi-mensuel",
    name: "Suivi Mensuel",
    duration: 45,
    price: 6000, // 60€ in cents
    description: "Séance de suivi et d'ajustement mensuel"
  }
];

// Simulate available time slots for the next 7 days
export function getAvailableTimeSlots(date: Date): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const startHour = 9; // 9AM
  const endHour = 17; // 5PM

  for (let hour = startHour; hour <= endHour; hour++) {
    const startTime = new Date(date);
    startTime.setHours(hour, 0, 0, 0);

    // Skip weekends
    if (startTime.getDay() === 0 || startTime.getDay() === 6) {
      continue;
    }

    slots.push({
      id: `slot-${startTime.toISOString()}`,
      startTime: startTime.toISOString(),
      endTime: new Date(startTime.getTime() + 60 * 60 * 1000).toISOString(),
      available: Math.random() > 0.3 // Randomly mark some slots as unavailable
    });
  }

  return slots;
}