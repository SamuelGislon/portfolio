import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

import type { ProjetoPortfolio } from "@/types/portfolio";

import { obterLinkPublico } from "@/lib/utils";

import { Selo } from "@/components/ui/selo";
import { Botao } from "@/components/ui/botao";
import { Cartao, ConteudoCartao } from "@/components/ui/cartao";

const rotulosCategoria: Record<ProjetoPortfolio["categoria"], string> = {
  backend: "Back-end",
  frontend: "Front-end",
  fullstack: "Full Stack",
  produto: "Produto/Web",
  academico: "Projeto acadêmico",
};

type PropriedadesCardProjeto = {
  projeto: ProjetoPortfolio;
};

export function CardProjeto({ projeto }: PropriedadesCardProjeto) {
  const urlRepositorio = obterLinkPublico(projeto.urlRepositorio);
  const urlDemonstracao = obterLinkPublico(projeto.urlDemonstracao);

  return (
    <Cartao className="group overflow-hidden bg-[linear-gradient(180deg,rgba(18,22,27,0.98),rgba(11,13,16,0.92))]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--line)]">
        <Image
          src={projeto.imagem}
          alt={`Thumbnail conceitual do projeto ${projeto.titulo}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(8,10,14,0.86))]" />
        <div className="absolute left-5 top-5">
          <Selo variant={projeto.destaque ? "default" : "muted"}>
            {rotulosCategoria[projeto.categoria]}
          </Selo>
        </div>
      </div>
      <ConteudoCartao className="space-y-5 p-6">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-2xl leading-tight text-[var(--foreground)]">
              {projeto.titulo}
            </h3>
            {projeto.destaque ? <Selo variant="accent">Destaque</Selo> : null}
          </div>
          <p className="text-sm leading-7 text-[var(--muted)]">{projeto.resumo}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {projeto.pilha.map((item) => (
            <Selo key={item} variant="muted" className="tracking-[0.18em]">
              {item}
            </Selo>
          ))}
        </div>
        {urlRepositorio || urlDemonstracao ? (
          <div className="flex flex-wrap gap-3">
            {urlRepositorio ? (
              <Botao asChild variant="secondary" size="sm">
                <a href={urlRepositorio} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                  Repositório
                </a>
              </Botao>
            ) : null}
            {urlDemonstracao ? (
              <Botao asChild variant="outline" size="sm">
                <a href={urlDemonstracao} target="_blank" rel="noreferrer">
                  <ArrowUpRight className="h-4 w-4" />
                  Demonstração
                </a>
              </Botao>
            ) : null}
          </div>
        ) : null}
      </ConteudoCartao>
    </Cartao>
  );
}
