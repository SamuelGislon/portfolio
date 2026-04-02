import type { Metadata } from "next";

import { obterUrlSite, configuracaoSite } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(obterUrlSite()),
  title: {
    default: `${configuracaoSite.nome} | Portfólio`,
    template: `%s | ${configuracaoSite.nome}`,
  },
  description: configuracaoSite.descricao,
  keywords: [
    "Portfólio",
    "Python",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Docker",
    "Desenvolvedor Full Stack",
  ],
  openGraph: {
    title: `${configuracaoSite.nome} | Portfólio`,
    description: configuracaoSite.descricao,
    url: obterUrlSite(),
    siteName: `${configuracaoSite.nome} | Portfólio`,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "og-cover.svg",
        width: 1200,
        height: 630,
        alt: "Capa do portfólio de Samuel Gislon com foco em Python e Next.js",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${configuracaoSite.nome} | Portfólio`,
    description: configuracaoSite.descricao,
    images: ["og-cover.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
