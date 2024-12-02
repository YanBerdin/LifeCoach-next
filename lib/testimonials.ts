export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  service: string;
  imageUrl?: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marie Dubois",
    role: "Entrepreneure",
    content: "Le coaching m'a permis de prendre confiance en moi et de développer mon entreprise. Les séances sont structurées et les résultats sont rapidement visibles.",
    rating: 5,
    service: "Coaching Individuel",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    date: "2024-03-10"
  },
  {
    id: "2",
    name: "Thomas Laurent",
    role: "Manager",
    content: "Les ateliers collectifs ont transformé ma façon de communiquer avec mon équipe. L'ambiance est bienveillante et les échanges sont enrichissants.",
    rating: 5,
    service: "Ateliers Collectifs",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    date: "2024-03-05"
  },
  {
    id: "3",
    name: "Sophie Martin",
    role: "Consultante RH",
    content: "La formation intensive a été un véritable tournant dans ma carrière. Le programme est complet et l'accompagnement est personnalisé.",
    rating: 5,
    service: "Formation Intensive",
    date: "2024-02-28"
  },
  {
    id: "4",
    name: "Pierre Durand",
    role: "Directeur Commercial",
    content: "Le coaching objectifs m'a aidé à structurer mes projets et à atteindre mes objectifs plus rapidement. Une approche pragmatique et efficace.",
    rating: 4,
    service: "Coaching Objectifs",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    date: "2024-02-20"
  }
];