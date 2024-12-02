"use client";

import { Navbar } from "@/components/layout/navbar";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { MissionCard } from "@/components/about/mission-card";
import { Stats } from "@/components/about/stats";
import { Heart, Users, Target, Sparkles } from "lucide-react";
import Image from "next/image";

const missions = [
  {
    title: "Accompagnement Personnalisé",
    description: "Chaque parcours est unique. Notre approche s'adapte à vos besoins spécifiques pour vous accompagner vers vos objectifs.",
    icon: Heart,
  },
  {
    title: "Développement Continu",
    description: "Nous vous guidons dans un processus de croissance continue, avec des outils et méthodes éprouvés.",
    icon: Target,
  },
  {
    title: "Approche Holistique",
    description: "Notre méthode prend en compte tous les aspects de votre vie pour un développement harmonieux et durable.",
    icon: Sparkles,
  },
  {
    title: "Communauté Bienveillante",
    description: "Rejoignez une communauté de personnes partageant les mêmes valeurs et objectifs de développement personnel.",
    icon: Users,
  },
];

const stats = [
  { value: "500+", label: "Clients Accompagnés" },
  { value: "50+", label: "Ateliers Réalisés" },
  { value: "98%", label: "Taux de Satisfaction" },
  { value: "10+", label: "Années d'Expérience" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="À Propos"
        description="Découvrez notre approche du développement personnel et notre mission."
      />

      {/* Coach Introduction */}
      <Container className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000"
              alt="Marie Laurent - Coach en développement personnel"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Marie Laurent</h2>
            <p className="text-xl text-gray-600">Coach Certifiée en Développement Personnel</p>
            <div className="space-y-4">
              <p className="text-gray-600">
                Passionnée par le développement personnel depuis plus de 10 ans, j'accompagne
                les personnes dans leur transformation et leur épanouissement.
              </p>
              <p className="text-gray-600">
                Certifiée en coaching, PNL et diverses approches complémentaires, je mets
                mon expertise au service de votre développement personnel et professionnel.
              </p>
              <p className="text-gray-600">
                Ma mission est de vous aider à révéler votre plein potentiel et à créer
                la vie qui vous correspond vraiment.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <Container>
          <Stats stats={stats} />
        </Container>
      </section>

      {/* Mission & Values */}
      <Container className="py-16">
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
            <p className="text-gray-600">
              Nous nous engageons à vous accompagner dans votre développement personnel
              avec bienveillance, professionnalisme et authenticité.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missions.map((mission) => (
              <MissionCard key={mission.title} {...mission} />
            ))}
          </div>
        </div>
      </Container>

      {/* Certifications */}
      <section className="bg-gray-50 py-16">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Certifications</h2>
            <p className="text-gray-600 mb-8">
              Notre expertise est reconnue par les plus grands organismes de certification
              en développement personnel et coaching.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="h-24 bg-white rounded-lg shadow-sm flex items-center justify-center"
                >
                  <div className="text-gray-400">Logo {index + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}