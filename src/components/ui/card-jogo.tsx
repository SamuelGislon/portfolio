import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import type { JogoPortfolio } from "@/types/portfolio";

import { obterLinkPublico } from "@/lib/utils";

import { Selo } from "@/components/ui/selo";
import { Botao } from "@/components/ui/botao";
import { Cartao, ConteudoCartao } from "@/components/ui/cartao";

type PropriedadesCardJogo = {
  jogo: JogoPortfolio;
};

export function CardJogo({ jogo }: PropriedadesCardJogo) {
  const urlJogo = obterLinkPublico(jogo.urlJogo);

  return (
    <Cartao className="group overflow-hidden bg-[linear-gradient(180deg,rgba(18,22,27,0.98),rgba(11,13,16,0.92))]">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-[var(--line)]">
        <Image
          src={jogo.imagem}
          alt={`Thumbnail conceitual do jogo ${jogo.titulo}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(8,10,14,0.82))]" />
        <div className="absolute left-5 top-5">
          <Selo variant={jogo.destaque ? "accent" : "muted"}>
            {jogo.destaque ? "Em destaque" : "Experimento"}
          </Selo>
        </div>
      </div>
      <ConteudoCartao className="space-y-5 p-6">
        <div className="space-y-3">
          <h3 className="font-display text-2xl leading-tight text-[var(--foreground)]">
            {jogo.titulo}
          </h3>
          <p className="text-sm leading-7 text-[var(--muted)]">{jogo.resumo}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {jogo.tecnologias.map((item) => (
            <Selo key={item} variant="muted">
              {item}
            </Selo>
          ))}
        </div>
        {urlJogo ? (
          <Botao asChild variant="secondary" size="sm">
            <a href={urlJogo} target="_blank" rel="noreferrer">
              <ArrowUpRight className="h-4 w-4" />
              Abrir
            </a>
          </Botao>
        ) : null}
      </ConteudoCartao>
    </Cartao>
  );
}
