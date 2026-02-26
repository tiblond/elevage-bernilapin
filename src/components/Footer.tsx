// ============================================================
// Composant Footer – Élevage du Bernilapin
//
// Pied de page du site avec informations de contact,
// liens de navigation et mention légale.
//
// Pour modifier :
//   • L'adresse et coordonnées → chercher "COORDONNÉES"
//   • Les liens footer         → chercher "LIENS FOOTER"
//   • La mention légale        → chercher "MENTION LÉGALE"
// ============================================================

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-vert-profond-dark text-creme py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

          {/* ------------------------------------------------
              BRANDING & DESCRIPTION
              ------------------------------------------------ */}
          <div>
            <h3 className="text-lg font-bold text-creme mb-2">
              Élevage du Bernilapin
            </h3>
            <p className="text-sm text-creme-dark opacity-75 leading-relaxed">
              {/* Modifier ce texte de présentation */}
              Élevage familial de lapins de boucherie responsable et éthique.
              Fondé avec passion, conduit avec respect.
            </p>
          </div>

          {/* ------------------------------------------------
              LIENS FOOTER – modifier les hrefs et labels ici
              ------------------------------------------------ */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-bois-light mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { href: "#accueil", label: "Accueil" },
                { href: "#methodes", label: "Nos Méthodes" },
                { href: "#produits", label: "Produits" },
                { href: "#contact", label: "Contact" },
              ].map((lien) => (
                <li key={lien.href}>
                  <Link
                    href={lien.href}
                    className="text-sm text-creme-dark opacity-75 hover:opacity-100 hover:text-bois-light transition-all"
                  >
                    {lien.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ------------------------------------------------
              COORDONNÉES – modifier l'adresse et les contacts ici
              ------------------------------------------------ */}
          <div id="contact">
            <h3 className="text-sm font-bold uppercase tracking-widest text-bois-light mb-4">
              Contact
            </h3>
            <address className="not-italic flex flex-col gap-2 text-sm text-creme-dark opacity-75">
              {/* Adresse – modifier ici */}
              <span>123 Chemin des Champs, 12345 Votre Commune</span>
              {/* Téléphone – modifier ici */}
              <a href="tel:+33600000000" className="hover:text-bois-light hover:opacity-100 transition-all">
                06 00 00 00 00
              </a>
              {/* Email – modifier ici */}
              <a href="mailto:contact@bernilapin.fr" className="hover:text-bois-light hover:opacity-100 transition-all">
                contact@bernilapin.fr
              </a>
            </address>
          </div>
        </div>

        {/* ------------------------------------------------
            SÉPARATEUR
            ------------------------------------------------ */}
        <div className="border-t border-vert-profond-light pt-6 text-center">
          {/* ------------------------------------------------
              MENTION LÉGALE – modifier l'année et le nom ici
              ------------------------------------------------ */}
          <p className="text-xs text-creme-dark opacity-50">
            © {new Date().getFullYear()} Élevage du Bernilapin. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
