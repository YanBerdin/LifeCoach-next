"use client"
import { Navbar } from "@/components/layout/navbar";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { ServiceCard } from "@/components/services/service-card";
import { Heart, Users, Sparkles, Target } from "lucide-react";

const services = [
  {
    title: "Coaching Individuel",
    description: "Un accompagnement personnalisé pour atteindre vos objectifs",
    icon: Heart,
    price: "À partir de 80€/séance",
    features: [
      "Séances individuelles de 1h",
      "Plan d'action personnalisé",
      "Suivi entre les séances",
      "Exercices pratiques",
      "Première séance découverte offerte"
    ],
    href: "/contact?service=coaching-individuel"
  },
  {
    title: "Ateliers Collectifs",
    description: "Développez-vous au sein d'un groupe bienveillant",
    icon: Users,
    price: "À partir de 45€/atelier",
    features: [
      "Sessions de 2h en petit groupe",
      "Matériel pédagogique inclus",
      "Exercices pratiques",
      "Partage d'expériences",
      "Support post-atelier"
    ],
    href: "/contact?service=ateliers-collectifs"
  },
  {
    title: "Formation Intensive",
    description: "Programme complet de transformation personnelle",
    icon: Sparkles,
    price: "À partir de 497€",
    features: [
      "Programme de 3 mois",
      "8 modules thématiques",
      "Supports vidéo et audio",
      "Accompagnement personnalisé",
      "Communauté privée"
    ],
    href: "/contact?service=formation-intensive"
  },
  {
    title: "Coaching Objectifs",
    description: "Atteignez vos objectifs avec méthode et structure",
    icon: Target,
    price: "À partir de 95€/séance",
    features: [
      "Définition d'objectifs SMART",
      "Plan d'action détaillé",
      "Suivi hebdomadaire",
      "Outils et ressources",
      "Bilan mensuel"
    ],
    href: "/contact?service=coaching-objectifs"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="Nos Services"
        description="Découvrez nos différentes formules d'accompagnement adaptées à vos besoins et objectifs."
      />
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Container>
    </main>
  );
}