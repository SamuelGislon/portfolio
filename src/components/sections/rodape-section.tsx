import { ArrowUpRight } from "lucide-react";

import type { LinksPortfolio, PerfilPortfolio } from "@/types/portfolio";

import { Botao } from "@/components/ui/botao";

type PropriedadesRodapeSection = {
  perfil: PerfilPortfolio;
  links: LinksPortfolio;
};

export function RodapeSection({ perfil, links }: PropriedadesRodapeSection) {
  return (
    <footer className="border-t border-[var(--line)] px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent-secondary)]">
            Contato
          </p>
          <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
            {perfil.nome} <span className="text-[var(--muted)]">|</span>{" "}
            {perfil.cargo}
          </h2>
          <p className="text-sm leading-7 text-[var(--muted)]">
            Estou disponível para oportunidades em desenvolvimento Python, Back-end e
            Full Stack com Next.js. Se fizer sentido para a vaga, vale começar pelo
            currículo e pelos projetos em destaque.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Botao asChild variant="secondary">
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Botao>
          <Botao asChild variant="outline">
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </Botao>
          <Botao asChild variant="outline">
            <a href={links.email}>
              <ArrowUpRight className="h-4 w-4" />
              E-mail
            </a>
          </Botao>
        </div>
      </div>
    </footer>
  );
}
