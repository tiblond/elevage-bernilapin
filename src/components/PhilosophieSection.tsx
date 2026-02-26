// ============================================================
// Composant PhilosophieSection – Élevage du Bernilapin
//
// Section expliquant la philosophie de l'élevage :
// importance du bien-être animal dans l'élevage de consommation.
//
// Pour modifier :
//   • Le titre de section  → chercher "TITRE DE LA SECTION"
//   • L'introduction       → chercher "TEXTE D'INTRODUCTION"
//   • Les valeurs (cartes) → chercher "VALEURS – modifier"
//   • La citation          → chercher "CITATION"
//   • La section chiffres  → chercher "CHIFFRES CLÉS"
// ============================================================

// ----------------------------------------------------------
// Données des cartes de valeurs
// Pour modifier une valeur : changer title, description ou icon
// Pour ajouter une valeur : dupliquer un objet dans le tableau
// ----------------------------------------------------------
const valeurs = [
  {
    id: 1,
    // VALEURS – modifier le titre ici
    title: "Espace & Liberté",
    // VALEURS – modifier la description ici
    description:
      "Nos lapins disposent de grands espaces pour se déplacer librement, creuser et exprimer leurs comportements naturels. Un animal heureux, c'est notre priorité.",
    // Icône SVG (peut être remplacée par une image ou un emoji)
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    // Couleur d'accentuation de la carte – modifier ici
    accentColor: "bg-vert-sauge",
  },
  {
    id: 2,
    title: "Alimentation Naturelle",
    description:
      "Notre nourriture est composée de foin frais, de légumes de saison et de plantes aromatiques cultivées sur l'exploitation. Zéro additif, zéro compromis.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    accentColor: "bg-bois",
  },
  {
    id: 3,
    title: "Soins Vétérinaires",
    description:
      "Un suivi vétérinaire régulier garantit la santé de chaque animal. Nous privilégions la médecine préventive et les remèdes naturels, avec un usage minimal des antibiotiques.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    accentColor: "bg-terre",
  },
  {
    id: 4,
    title: "Circuit Court",
    description:
      "Nos lapins sont vendus directement à la ferme ou chez des bouchers artisans locaux. Zéro intermédiaire : vous savez exactement d'où vient votre viande.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    accentColor: "bg-vert-profond",
  },
];

// ----------------------------------------------------------
// Données des chiffres clés
// Modifier les valeurs et labels pour mettre à jour les stats
// ----------------------------------------------------------
const chiffresCles = [
  { valeur: "3", unite: "générations", label: "d'éleveurs passionnés" },
  { valeur: "100%", unite: "naturel", label: "sans additifs chimiques" },
  { valeur: "0", unite: "km", label: "de gaspillage transport" },
];

export default function PhilosophieSection() {
  return (
    <section
      id="philosophie"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-creme"
    >
      <div className="max-w-6xl mx-auto">

        {/* ------------------------------------------------
            EN-TÊTE DE LA SECTION
            ------------------------------------------------ */}
        <div className="text-center mb-16">
          {/* Étiquette de section */}
          <span className="inline-block bg-vert-sauge-light text-vert-profond text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Notre Philosophie
          </span>

          {/* ------------------------------------------------
              TITRE DE LA SECTION – modifier ici
              ------------------------------------------------ */}
          <h2 className="text-3xl sm:text-4xl font-bold text-terre-dark mb-4 leading-snug">
            L'éthique au cœur de{" "}
            <span className="text-vert-profond">chaque décision</span>
          </h2>

          {/* ------------------------------------------------
              TEXTE D'INTRODUCTION – modifier ici
              ------------------------------------------------ */}
          <p className="text-base sm:text-lg text-terre-light max-w-2xl mx-auto leading-relaxed">
            Élever des lapins de boucherie de façon responsable, c'est possible.
            Chez nous, le bien-être animal n'est pas un argument marketing,
            c'est une valeur transmise de génération en génération.
          </p>
        </div>

        {/* ------------------------------------------------
            GRILLE DES VALEURS
            Affiche 4 cartes (2x2 sur desktop, 1 colonne mobile)
            ------------------------------------------------ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {valeurs.map((valeur) => (
            <div
              key={valeur.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-4 border border-creme-dark"
            >
              {/* Icône avec fond coloré */}
              <div
                className={`${valeur.accentColor} text-white w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0`}
              >
                {valeur.icon}
              </div>

              {/* Titre de la valeur */}
              <h3 className="text-lg font-bold text-terre-dark">
                {valeur.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-terre-light leading-relaxed flex-grow">
                {valeur.description}
              </p>
            </div>
          ))}
        </div>

        {/* ------------------------------------------------
            CITATION – modifier le texte et l'auteur ici
            ------------------------------------------------ */}
        <blockquote className="relative bg-vert-profond rounded-2xl px-8 py-10 sm:px-12 text-center mb-16 overflow-hidden">
          {/* Guillemet décoratif */}
          <span
            className="absolute top-0 left-4 text-9xl text-vert-sauge opacity-20 font-serif leading-none select-none"
            aria-hidden="true"
          >
            "
          </span>

          {/* Texte de la citation – modifier ici */}
          <p className="relative text-xl sm:text-2xl font-medium text-creme leading-relaxed max-w-3xl mx-auto italic">
            On ne peut pas séparer la qualité de ce qu'on mange du respect
            qu'on porte à la vie. Un élevage éthique, c'est d'abord un élevage
            honnête, envers les animaux comme envers nos clients.
          </p>

          {/* Auteur de la citation – modifier ici */}
          <footer className="mt-6">
            <span className="text-bois-light font-semibold text-sm uppercase tracking-wider">
              — Marie &amp; Jean-Pierre, fondateurs de l'Élevage du Bernilapin
            </span>
          </footer>
        </blockquote>

        {/* ------------------------------------------------
            CHIFFRES CLÉS – modifier dans le tableau chiffressCles
            ------------------------------------------------ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {chiffresCles.map((chiffre) => (
            <div
              key={chiffre.label}
              className="text-center bg-white border border-creme-dark rounded-2xl py-8 px-4 shadow-sm"
            >
              {/* Valeur numérique */}
              <div className="text-4xl sm:text-5xl font-bold text-vert-profond mb-1">
                {chiffre.valeur}
              </div>
              {/* Unité */}
              <div className="text-base font-semibold text-bois mb-1">
                {chiffre.unite}
              </div>
              {/* Label descriptif */}
              <div className="text-sm text-terre-light">{chiffre.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
