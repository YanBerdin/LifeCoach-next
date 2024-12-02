import { Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Nos coordonnées</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
            <div>
              <p className="font-medium">Adresse</p>
              <p className="text-gray-600">123 Avenue des Lumières</p>
              <p className="text-gray-600">75001 Paris, France</p>
            </div>
          </div>
          <div className="flex items-start">
            <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
            <div>
              <p className="font-medium">Téléphone</p>
              <p className="text-gray-600">01 23 45 67 89</p>
            </div>
          </div>
          <div className="flex items-start">
            <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-gray-600">contact@leclatdeletre.fr</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Horaires d&apos;ouverture</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Lundi - Vendredi</span>
            <span className="text-gray-900">9h00 - 19h00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Samedi</span>
            <span className="text-gray-900">10h00 - 17h00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Dimanche</span>
            <span className="text-gray-900">Fermé</span>
          </div>
        </div>
      </div>
    </div>
  );
}