// ============================================================
// Configuration Tailwind CSS – Élevage du Bernilapin
//
// Palette de couleurs terreuses :
//   • Verts profonds  → couleur principale (navigation, boutons)
//   • Beige crème     → arrière-plans clairs, sections alternées
//   • Tons bois       → accents, bordures, icônes
//   • Terre           → textes foncés et contrastes
//
// Pour personnaliser les couleurs, modifiez les valeurs
// hexadécimales ci-dessous dans la section `colors`.
// ============================================================

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ----------------------------------------------------------
        // VERTS PROFONDS – couleur principale du site
        // Utilisés pour la navbar, les boutons primaires, les titres
        // ----------------------------------------------------------
        "vert-profond": {
          DEFAULT: "#2D5016", // vert forêt profond
          light: "#3D6B1E",   // légèrement plus clair
          dark: "#1E3A0F",    // très sombre pour les hovers
        },

        // ----------------------------------------------------------
        // VERT SAUGE – couleur secondaire, douce et naturelle
        // Utilisé pour les accents, icônes, badges
        // ----------------------------------------------------------
        "vert-sauge": {
          DEFAULT: "#7A9B5B", // vert sauge naturel
          light: "#96B374",   // sauge clair pour fonds
          dark: "#617D47",    // sauge foncé pour textes
        },

        // ----------------------------------------------------------
        // BEIGE CRÈME – arrière-plans et sections claires
        // Donne un aspect chaud et naturel à la page
        // ----------------------------------------------------------
        creme: {
          DEFAULT: "#F5F0E8", // crème chaud principal
          light: "#FAF7F2",   // presque blanc, très doux
          dark: "#E8DABB",    // beige plus prononcé pour séparateurs
        },

        // ----------------------------------------------------------
        // TONS BOIS – accents chaleureux
        // Utilisés pour les titres de section, les encadrés
        // ----------------------------------------------------------
        bois: {
          DEFAULT: "#8B6914", // bois chêne moyen
          light: "#C4A55A",   // bois doré clair
          dark: "#6B4D0E",    // bois foncé pour contrastes
        },

        // ----------------------------------------------------------
        // TERRE – textes et éléments de contraste
        // Pour les paragraphes, sous-titres, pieds de page
        // ----------------------------------------------------------
        terre: {
          DEFAULT: "#6B4226", // terre brun-rouge
          light: "#8B5A3A",   // brun clair pour textes secondaires
          dark: "#4A2E1B",    // brun très foncé pour titres
        },
      },

      // ----------------------------------------------------------
      // TYPOGRAPHIE
      // Modifier les familles de polices ici si besoin
      // ----------------------------------------------------------
      fontFamily: {
        // Modifier la famille de police ici si besoin
        sans: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },

      // ----------------------------------------------------------
      // ANIMATIONS PERSONNALISÉES
      // ----------------------------------------------------------
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
