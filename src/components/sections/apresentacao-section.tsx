import { ArrowDown, ArrowUpRight } from "lucide-react";

import type { LinksPortfolio, PerfilPortfolio } from "@/types/portfolio";

import { Selo } from "@/components/ui/selo";
import { Botao } from "@/components/ui/botao";
import { Cartao, ConteudoCartao } from "@/components/ui/cartao";
import { EntradaSuave } from "@/components/ui/entrada-suave";

type PropriedadesApresentacaoSection = {
  perfil: PerfilPortfolio;
  links: LinksPortfolio;
};

export function ApresentacaoSection({
  perfil,
  links,
}: PropriedadesApresentacaoSection) {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-start overflow-hidden px-6 pb-4 pt-22 sm:px-10 sm:pt-26 lg:px-16 lg:pb-6"
    >
      <div className="brilho-apresentacao brilho-apresentacao-primario" />
      <div className="brilho-apresentacao brilho-apresentacao-secundario" />
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-start">
        <EntradaSuave className="space-y-8">
          <div className="space-y-6">
            <Selo className="w-fit">Portfólio profissional</Selo>
            <h1 className="max-w-4xl font-display text-4xl leading-[0.9] tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-[3.25rem]">
              Desenvolvedor Full Stack com{" "}
              <span className="text-[var(--accent)]">5+ anos em Python e Next.js,</span>{" "}
              <span className="text-[var(--accent-secondary)]">
                foco em APIs, integrações
              </span>{" "}
              e automações para a web.
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              {perfil.apresentacao}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Botao asChild size="lg">
              <a href="#github">Ver projetos</a>
            </Botao>
            <Botao asChild size="lg" variant="outline">
              <a href={links.curriculoPdf} target="_blank" rel="noreferrer">
                <ArrowUpRight className="h-4 w-4" />
                Abrir currículo
              </a>
            </Botao>
          </div>
          <div className="flex flex-wrap gap-3">
            {perfil.focos.map((item) => (
              <Selo key={item} variant="muted">
                {item}
              </Selo>
            ))}
          </div>
        </EntradaSuave>

        <EntradaSuave delay={0.08}>
          <Cartao className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(76,125,255,0.16),transparent_45%,rgba(198,139,89,0.16))]" />
            <ConteudoCartao className="relative space-y-6 p-6 sm:p-8">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent-secondary)]">
                  Posicionamento
                </p>
                <h2 className="font-display text-3xl leading-tight text-[var(--foreground)]">
                  Experiência prática em back-end Python e produtos web com Next.js.
                </h2>
              </div>
              <p className="text-sm leading-7 text-[var(--muted)]">
                {perfil.resumoCurto}
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="rounded-[22px] border border-[var(--line)] bg-[rgba(255,255,255,0.03)] p-4">
                  <p className="text-xs uppercase tracking-[0.26em] text-[var(--muted)]">
                    Foco
                  </p>
                  <p className="mt-3 text-base leading-7 text-[var(--foreground)]">
                    Oportunidades em Back-end Python, Full Stack e aplicações web.
                  </p>
                </div>
                <div className="rounded-[22px] border border-[var(--line)] bg-[rgba(255,255,255,0.03)] p-4">
                  <p className="text-xs uppercase tracking-[0.26em] text-[var(--muted)]">
                    Diferencial
                  </p>
                  <p className="mt-3 text-base leading-7 text-[var(--foreground)]">
                    Docker, automações e modernização de sistemas legados.
                  </p>
                </div>
              </div>
            </ConteudoCartao>
          </Cartao>
        </EntradaSuave>
      </div>

      <a
        href="#github"
        className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.28em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
      >
        <ArrowDown className="h-4 w-4" />
        Role para explorar
      </a>
    </section>
  );
}
