// ============================================================
// Page d'accueil – Élevage du Bernilapin
//
// Cette page assemble les sections du site.
// Pour ajouter une section, importer le composant et l'ajouter
// dans le <main> ci-dessous.
// ============================================================

import HeroSection from "@/components/HeroSection";
import PhilosophieSection from "@/components/PhilosophieSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* Section hero principale */}
      <HeroSection />

      {/* Section philosophie / bien-être animal */}
      <PhilosophieSection />

      {/* Pied de page */}
      <Footer />
    </main>
  );
}

