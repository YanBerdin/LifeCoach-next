export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  newsletter: boolean;
}

export const services = [
  { value: "coaching-individuel", label: "Coaching Individuel" },
  { value: "ateliers-collectifs", label: "Ateliers Collectifs" },
  { value: "formation-intensive", label: "Formation Intensive" },
  { value: "coaching-objectifs", label: "Coaching Objectifs" },
  { value: "autre", label: "Autre" }
];