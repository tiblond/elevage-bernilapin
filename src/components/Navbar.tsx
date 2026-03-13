// ============================================================
// Composant Navbar – Élevage du Bernilapin
//
// Navigation principale du site avec menu mobile responsive.
// Liens de navigation :
//   • Accueil
//   • Nos Méthodes
//   • Produits
//   • Contact
//
// Pour modifier les liens de navigation, éditer le tableau
// `navLinks` ci-dessous.
// Pour modifier le logo ou le nom, cherchez la section "LOGO".
// ============================================================

"use client";

import { useState } from "react";
import Link from "next/link";

// ----------------------------------------------------------
// Définition des liens de navigation
// Ajouter ou supprimer des liens ici
// ----------------------------------------------------------
const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#methodes", label: "Nos Méthodes" },
  { href: "#produits", label: "Produits" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  return (
    <nav className="bg-vert-profond text-creme shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ------------------------------------------------
              LOGO – modifier le nom et le slogan ici
              ------------------------------------------------ */}
          <Link href="#accueil" className="flex items-center gap-3 group">
            {/* Icône lapine stylisée (SVG inline) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              className="w-10 h-10 text-bois-light flex-shrink-0"
              fill="currentColor"
              aria-hidden="true"
            >
              {/* Corps du lapin */}
              <ellipse cx="20" cy="26" rx="10" ry="8" />
              {/* Tête */}
              <circle cx="20" cy="16" r="6" />
              {/* Oreille gauche */}
              <ellipse cx="16" cy="7" rx="2.5" ry="5" />
              {/* Oreille droite */}
              <ellipse cx="24" cy="7" rx="2.5" ry="5" />
              {/* Intérieur oreille gauche */}
              <ellipse cx="16" cy="7" rx="1.2" ry="3.5" fill="#2D5016" />
              {/* Intérieur oreille droite */}
              <ellipse cx="24" cy="7" rx="1.2" ry="3.5" fill="#2D5016" />
              {/* Œil gauche */}
              <circle cx="17.5" cy="15" r="1" fill="#2D5016" />
              {/* Œil droit */}
              <circle cx="22.5" cy="15" r="1" fill="#2D5016" />
            </svg>

            <div className="leading-tight">
              {/* Nom principal – modifier ici */}
              <span className="block text-lg font-bold tracking-wide group-hover:text-bois-light transition-colors">
                Élevage du Bernilapin
              </span>
              {/* Slogan sous le nom – modifier ici */}
              <span className="block text-xs text-creme-dark opacity-75">
                Élevage familial &amp; responsable
              </span>
            </div>
          </Link>

          {/* ------------------------------------------------
              LIENS DE NAVIGATION – Desktop (md et plus)
              ------------------------------------------------ */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((lien) => (
              <li key={lien.href}>
                <Link
                  href={lien.href}
                  className="text-sm font-medium text-creme hover:text-bois-light transition-colors duration-200 py-1 border-b-2 border-transparent hover:border-bois-light"
                >
                  {lien.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ------------------------------------------------
              BOUTON MENU MOBILE (hamburger) – visible sur mobile
              ------------------------------------------------ */}
          <button
            className="md:hidden p-2 rounded-md text-creme hover:bg-vert-profond-light transition-colors"
            onClick={() => setMenuOuvert(!menuOuvert)}
            aria-label={menuOuvert ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOuvert}
          >
            {menuOuvert ? (
              /* Icône croix (fermer) */
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Icône hamburger (ouvrir) */
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* ------------------------------------------------
            MENU MOBILE – Affiché quand menuOuvert = true
            ------------------------------------------------ */}
        {menuOuvert && (
          <div className="md:hidden border-t border-vert-profond-light py-2">
            <ul className="flex flex-col gap-1">
              {navLinks.map((lien) => (
                <li key={lien.href}>
                  <Link
                    href={lien.href}
                    className="block px-4 py-2 text-sm font-medium text-creme hover:bg-vert-profond-light hover:text-bois-light rounded-md transition-colors"
                    onClick={() => setMenuOuvert(false)}
                  >
                    {lien.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
