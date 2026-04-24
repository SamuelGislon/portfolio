import { ArrowUpRight, FileText, GraduationCap, Linkedin } from "lucide-react";

import type { ArquivoCurriculo, LinksPortfolio } from "@/types/portfolio";

import { obterLinkPublico } from "@/lib/utils";

import { Botao } from "@/components/ui/botao";
import { Cartao, ConteudoCartao } from "@/components/ui/cartao";
import { EntradaSuave } from "@/components/ui/entrada-suave";
import { SecaoBase } from "@/components/ui/secao-base";
import { VisualizadorCurriculo } from "@/components/ui/visualizador-curriculo";

type PropriedadesCurriculoSection = {
  links: LinksPortfolio;
  curriculo: ArquivoCurriculo;
};

export function CurriculoSection({
  links,
  curriculo,
}: PropriedadesCurriculoSection) {
  const urlLattes = obterLinkPublico(links.lattes);

  return (
    <SecaoBase
      id="resume"
      rotulo="Currículo"
      titulo="Currículo, LinkedIn e formação para análise da minha experiência."
      descricao="Aqui estão os principais pontos sobre minha trajetória profissional, LinkedIn e formação em Engenharia de Software pela UDESC."
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
        <EntradaSuave>
          <VisualizadorCurriculo curriculo={curriculo} />
        </EntradaSuave>

        <EntradaSuave delay={0.08} className="space-y-6">
          <Cartao className="overflow-hidden">
            <ConteudoCartao className="space-y-6 p-6 sm:p-8">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-secondary)]">
                  Leitura complementar
                </p>
                <h3 className="font-display text-3xl leading-tight text-[var(--foreground)]">
                  Resumo profissional
                </h3>
                <p className="text-sm leading-7 text-[var(--muted)]">
                  Uma visão rápida das experiências e da formação que melhor 
                  representam minha trajetoria profissional e acadêmica.
                </p>
              </div>
              <div className="space-y-4">
                <div className="rounded-[24px] border border-[var(--line)] bg-[rgba(255,255,255,0.03)] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                    Experiência profissional
                  </p>
                  <p className="mt-3 text-base leading-7 text-[var(--foreground)]">
                    Mais de 5 anos de Experiência em empresas como a Senior Sistemas, IPM Sistemas 
                    e Access Contact Center, sempre atuando com Python, FastAPI, APIs, 
                    integrações, PostgreSQL, Docker e Next.js/React para frontend.
                  </p>
                </div>
                <div className="rounded-[24px] border border-[var(--line)] bg-[rgba(255,255,255,0.03)] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                    Formação acadêmica
                  </p>
                  <p className="mt-3 text-base leading-7 text-[var(--foreground)]">
                    Graduando em Engenharia de Software pela UDESC, selecionado para 
                    o Escritório Modelo e autor do UDESC Maker, projeto escolhido 
                    para ser disponibilizado à comunidade.
                  </p>
                </div>
              </div>
              <Botao asChild size="lg" variant="outline">
                <a href={links.curriculoPdf} target="_blank" rel="noreferrer">
                  <FileText className="h-4 w-4" />
                  Abrir currículo completo
                </a>
              </Botao>
            </ConteudoCartao>
          </Cartao>
        </EntradaSuave>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <EntradaSuave>
          <Cartao id="linkedin" className="scroll-mt-28">
            <ConteudoCartao className="space-y-5 p-6 sm:p-8">
              <div className="flex items-center gap-3 text-[var(--accent)]">
                <Linkedin className="h-5 w-5" />
                <p className="text-xs font-semibold uppercase tracking-[0.28em]">
                  LinkedIn
                </p>
              </div>
              <h3 className="font-display text-3xl text-[var(--foreground)]">
                Trajetória profissional e contexto complementar
              </h3>
              <p className="text-sm leading-7 text-[var(--muted)]">
                No LinkedIn é possível encontrar meu histórico profissional, tecnologias
                utilizadas e contexto adicional sobre a evoluções na carreira.
              </p>
              <Botao asChild variant="secondary">
                <a href={links.linkedin} target="_blank" rel="noreferrer">
                  <ArrowUpRight className="h-4 w-4" />
                  Acessar LinkedIn
                </a>
              </Botao>
            </ConteudoCartao>
          </Cartao>
        </EntradaSuave>

        <EntradaSuave delay={0.08}>
          <Cartao id="lattes" className="scroll-mt-28">
            <ConteudoCartao className="space-y-5 p-6 sm:p-8">
              <div className="flex items-center gap-3 text-[var(--accent-secondary)]">
                <GraduationCap className="h-5 w-5" />
                <p className="text-xs font-semibold uppercase tracking-[0.28em]">
                  Currículo Lattes
                </p>
              </div>
              <h3 className="font-display text-3xl text-[var(--foreground)]">
                Formação acadêmica em Engenharia de Software
              </h3>
              <p className="text-sm leading-7 text-[var(--muted)]">
                O Lattes complementa meu perfil com a graduação em andamento na UDESC
                e demais registros acadêmicos relevantes.
              </p>
              {urlLattes ? (
                <Botao asChild variant="outline">
                  <a href={urlLattes} target="_blank" rel="noreferrer">
                    <ArrowUpRight className="h-4 w-4" />
                    Acessar Lattes
                  </a>
                </Botao>
              ) : null}
            </ConteudoCartao>
          </Cartao>
        </EntradaSuave>
      </div>
    </SecaoBase>
  );
}
