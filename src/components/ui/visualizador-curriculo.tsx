import { Download, ExternalLink } from "lucide-react";

import type { ArquivoCurriculo } from "@/types/portfolio";

import { Botao } from "@/components/ui/botao";
import {
  Cartao,
  ConteudoCartao,
  CabecalhoCartao,
} from "@/components/ui/cartao";

type PropriedadesVisualizadorCurriculo = {
  curriculo: ArquivoCurriculo;
};

export function VisualizadorCurriculo({
  curriculo,
}: PropriedadesVisualizadorCurriculo) {
  return (
    <Cartao className="overflow-hidden">
      <CabecalhoCartao className="border-b border-[var(--line)] bg-[rgba(255,255,255,0.02)] pb-5">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-secondary)]">
              Currículo em PDF
            </p>
            <h3 className="font-display text-2xl text-[var(--foreground)]">
              Leitura rápida para recrutadores
            </h3>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)]">
              O PDF aparece embutido aqui para consulta rápida, mas também pode ser
              aberto em uma nova aba para leitura completa.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Botao asChild variant="secondary" size="sm">
              <a href={curriculo.caminhoArquivo} target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4" />
                Abrir PDF
              </a>
            </Botao>
            <Botao asChild variant="outline" size="sm">
              <a href={curriculo.caminhoArquivo} download>
                <Download className="h-4 w-4" />
                Baixar
              </a>
            </Botao>
          </div>
        </div>
      </CabecalhoCartao>
      <ConteudoCartao className="space-y-5 p-0">
        <div className="h-[540px] w-full bg-[rgba(3,6,10,0.5)]">
          <object
            data={curriculo.caminhoArquivo}
            type="application/pdf"
            className="h-full w-full"
            aria-label="Prévia do currículo em PDF"
          >
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-5 px-6 text-center">
              <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
                Seu navegador não exibiu o PDF embutido. Use o botão abaixo para
                abrir o arquivo diretamente.
              </p>
              <Botao asChild>
                <a
                  href={curriculo.urlExterna ?? curriculo.caminhoArquivo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Abrir currículo
                </a>
              </Botao>
            </div>
          </object>
        </div>
      </ConteudoCartao>
    </Cartao>
  );
}
