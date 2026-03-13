// ============================================================
// Composant HeroSection – Élevage du Bernilapin
//
// Section d'accroche principale du site.
// Met en avant le caractère familial et responsable de l'élevage.
//
// Pour modifier :
//   • Le titre principal  → chercher "TITRE PRINCIPAL"
//   • Le sous-titre       → chercher "SOUS-TITRE"
//   • La description      → chercher "DESCRIPTION"
//   • Les boutons CTA     → chercher "BOUTONS D'ACTION"
//   • Les badges          → chercher "BADGES"
// ============================================================

export default function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-vert-profond"
    >
      {/* ------------------------------------------------
          ARRIÈRE-PLAN : dégradé et motif décoratif
          Modifier les couleurs du gradient pour changer
          l'ambiance visuelle de la section hero.
          ------------------------------------------------ */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-vert-profond-dark via-vert-profond to-vert-sauge-dark opacity-90"
        aria-hidden="true"
      />

      {/* Cercles décoratifs en arrière-plan */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 bg-vert-sauge rounded-full opacity-10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-80 h-80 bg-bois-light rounded-full opacity-10 blur-3xl"
        aria-hidden="true"
      />

      {/* ------------------------------------------------
          CONTENU PRINCIPAL
          ------------------------------------------------ */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">

        {/* ------------------------------------------------
            BADGES – Mots-clés en vedette
            Modifier les textes des badges ici
            ------------------------------------------------ */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in">
          <span className="inline-flex items-center gap-1.5 bg-bois bg-opacity-20 border border-bois-light text-bois-light text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
            {/* Icône feuille */}
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2C5.5 2 2 5.5 2 10s3.5 8 8 8 8-3.5 8-8-3.5-8-8-8zm0 14a6 6 0 110-12 6 6 0 010 12z"/>
            </svg>
            Élevage Familial
          </span>
          <span className="inline-flex items-center gap-1.5 bg-vert-sauge bg-opacity-20 border border-vert-sauge-light text-vert-sauge-light text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
            {/* Icône cœur */}
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
            </svg>
            Bien-être Animal
          </span>
          <span className="inline-flex items-center gap-1.5 bg-creme bg-opacity-10 border border-creme-dark text-creme-dark text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
            {/* Icône localisation */}
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            Local &amp; Naturel
          </span>
        </div>

        {/* ------------------------------------------------
            TITRE PRINCIPAL
            Modifier ce titre pour changer l'accroche hero
            ------------------------------------------------ */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-creme leading-tight mb-6 animate-slide-up">
          {/* Première ligne du titre */}
          Une ferme familiale,{" "}
          <br className="hidden sm:block" />
          {/* Mot mis en valeur – modifier la couleur en changeant text-bois-light */}
          <span className="text-bois-light">un élevage responsable</span>
        </h1>

        {/* ------------------------------------------------
            SOUS-TITRE / ACCROCHE SECONDAIRE
            Modifier ce texte pour ajuster le message
            ------------------------------------------------ */}
        <p className="text-lg sm:text-xl text-creme opacity-90 max-w-2xl mx-auto mb-4 leading-relaxed animate-slide-up">
          Depuis trois générations, notre famille élève des lapins de boucherie
          avec passion, en respectant le bien-être animal et les cycles naturels.
        </p>

        {/* ------------------------------------------------
            DESCRIPTION COMPLÉMENTAIRE
            Texte plus détaillé sous le sous-titre
            ------------------------------------------------ */}
        <p className="text-base text-creme-dark opacity-75 max-w-xl mx-auto mb-10 leading-relaxed">
          Des lapins nourris naturellement, élevés en plein air,
          pour une viande de qualité que vous pouvez consommer en toute confiance.
        </p>

        {/* ------------------------------------------------
            BOUTONS D'ACTION (CTA)
            Modifier les textes et les liens href ici
            ------------------------------------------------ */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in">
          {/* Bouton principal */}
          <a
            href="#produits"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-bois hover:bg-bois-dark text-creme-light font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Découvrir nos produits
            {/* Icône flèche */}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Bouton secondaire */}
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-creme text-creme hover:bg-creme hover:text-vert-profond font-semibold px-8 py-3 rounded-full transition-all duration-200"
          >
            Nous contacter
          </a>
        </div>

        {/* ------------------------------------------------
            INDICATEUR DE DÉFILEMENT
            Petite animation pour inviter à défiler vers le bas
            ------------------------------------------------ */}
        <div className="mt-16 flex justify-center animate-bounce" aria-hidden="true">
          <a href="#philosophie" className="text-creme opacity-50 hover:opacity-100 transition-opacity">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
