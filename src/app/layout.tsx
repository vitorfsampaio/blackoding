import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Blackoding - IA Solutions | Transforme sua marca com inteligência artificial",
  description: "Você não precisa aprender IA. Precisa só da Blackoding. Sites, vídeos, fotos e sistemas profissionais em até 72 horas. Transforme negócios amadores em marcas de autoridade.",
  keywords: "IA, inteligência artificial, desenvolvimento de sites, vídeos institucionais, ensaios fotográficos, sistemas sob demanda, marketing digital",
  authors: [{ name: "Blackoding" }],
  openGraph: {
    title: "Blackoding - IA Solutions",
    description: "Transforme sua marca com inteligência artificial. Soluções profissionais em até 72 horas.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
