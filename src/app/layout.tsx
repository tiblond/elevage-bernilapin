import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

// ============================================================
// Métadonnées du site – modifier le titre et la description ici
// ============================================================
export const metadata: Metadata = {
  title: "Élevage du Bernilapin – Élevage familial & responsable",
  description:
    "Élevage familial de lapins de boucherie responsable et éthique. Nourris naturellement, élevés en plein air, vendus en circuit court.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased font-sans">
        {/* Barre de navigation commune à toutes les pages */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
