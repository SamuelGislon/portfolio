"use client";

import { ArrowUpRight } from "lucide-react";

import { itensNavegacao } from "@/lib/site";

import { Botao } from "@/components/ui/botao";
import {
  Painel,
  AcionadorPainel,
  FecharPainel,
  ConteudoPainel,
  DescricaoPainel,
  RodapePainel,
  CabecalhoPainel,
  TituloPainel,
} from "@/components/ui/painel";

type PropriedadesCabecalhoSite = {
  nome: string;
  hrefEmail: string;
};

function IconeMenuCabecalho() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 28 24"
      className="h-6 w-6 shrink-0 text-[var(--foreground)]"
      fill="none"
    >
      <path
        d="M3.5 7.5H24.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M10.5 16.5H24.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CabecalhoSite({
  nome,
  hrefEmail,
}: PropriedadesCabecalhoSite) {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6">
      <div className="pointer-events-auto mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-[var(--line)] bg-[rgba(11,13,16,0.72)] px-4 py-3 backdrop-blur-xl sm:px-5">
        <a
          href="#top"
          className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--foreground)]"
        >
          {nome}
        </a>
        <div className="flex items-center gap-3">
          <span className="hidden rounded-full border border-[var(--line)] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[var(--muted)] sm:inline-flex">
            Navegação do portfólio
          </span>
          <Painel>
            <AcionadorPainel asChild>
              <Botao
                variant="outline"
                size="icon"
                aria-label="Abrir menu de navegação"
              >
                <IconeMenuCabecalho />
              </Botao>
            </AcionadorPainel>
            <ConteudoPainel className="overflow-y-auto">
              <CabecalhoPainel className="pr-12">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent-secondary)]">
                  Acesso rápido
                </p>
                <TituloPainel className="font-display whitespace-nowrap text-3xl text-[var(--foreground)]">
                  Acesse os pontos
                  <br />
                  principais do meu perfil
                </TituloPainel>
                <DescricaoPainel className="whitespace-nowrap text-sm leading-7 text-[var(--muted)]">
                  Projetos, currículo, LinkedIn e formação em poucos cliques.
                </DescricaoPainel>
              </CabecalhoPainel>
              <nav className="mb-5 mt-5 flex flex-col gap-3">
                {itensNavegacao.map((item) => (
                  <FecharPainel asChild key={item.href}>
                    <a
                      href={item.href}
                      className="group flex items-center justify-between rounded-[22px] border border-[var(--line)] bg-[rgba(255,255,255,0.03)] px-5 py-4 text-left transition-colors hover:border-[rgba(76,125,255,0.35)] hover:bg-[rgba(76,125,255,0.08)]"
                    >
                      <span className="font-display text-xl text-[var(--foreground)]">
                        {item.rotulo}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-[var(--muted)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--foreground)]" />
                    </a>
                  </FecharPainel>
                ))}
              </nav>
              <RodapePainel className="border-t border-[var(--line)] pt-6">
                <p className="text-sm leading-7 text-[var(--muted)]">
                  Aberto a oportunidades em Back-end e Full Stack.
                </p>
                <Botao asChild variant="secondary">
                  <a href={hrefEmail}>Falar por e-mail</a>
                </Botao>
              </RodapePainel>
            </ConteudoPainel>
          </Painel>
        </div>
      </div>
    </header>
  );
}
