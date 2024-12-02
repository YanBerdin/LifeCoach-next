import { Navbar } from "@/components/layout/navbar";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function BookingSuccessPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Réservation confirmée"
        description="Votre réservation a été effectuée avec succès"
      />
      
      <Container className="py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold mb-4">
            Merci pour votre réservation !
          </h2>
          <p className="text-gray-600 mb-8">
            Vous recevrez prochainement un email de confirmation avec tous les
            détails de votre rendez-vous.
          </p>
          <div className="space-x-4">
            <Button asChild>
              <Link href="/">Retour à l&apos;accueil</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}