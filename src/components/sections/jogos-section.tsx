"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";

import type { JogoPortfolio } from "@/types/portfolio";

import { Botao } from "@/components/ui/botao";
import { CardJogo } from "@/components/ui/card-jogo";
import { EntradaSuave } from "@/components/ui/entrada-suave";
import { SecaoBase } from "@/components/ui/secao-base";

type PropriedadesJogosSection = {
  jogos: JogoPortfolio[];
};

export function JogosSection({ jogos }: PropriedadesJogosSection) {
  const [expandido, setExpandido] = useState(false);
  const reduzirMovimento = useReducedMotion();

  const jogosOrdenados = useMemo(
    () => [...jogos].sort((esquerda, direita) => esquerda.ordem - direita.ordem),
    [jogos],
  );

  const jogosDestaque = useMemo(
    () => jogosOrdenados.filter((jogo) => jogo.destaque).slice(0, 2),
    [jogosOrdenados],
  );

  const jogosVisiveis = expandido ? jogosOrdenados : jogosDestaque;

  return (
    <SecaoBase
      id="games"
      rotulo="Jogos e experimentos técnicos"
      titulo="Experimentos interativos que mostram lógica, prototipação e curiosidade técnica."
      descricao="Esta seção reúne estudos e experimentos que ajudam a mostrar repertório criativo, exploração técnica e interesse por interfaces interativas."
      acoes={
        <Botao onClick={() => setExpandido((valorAtual) => !valorAtual)} size="lg">
          {expandido ? "Ocultar experimentos" : "Ver todos os experimentos"}
        </Botao>
      }
    >
      <EntradaSuave className="space-y-8">
        <div className="rounded-[28px] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(18,22,27,0.92),rgba(11,13,16,0.96))] p-6">
          <p className="max-w-3xl text-base leading-8 text-[var(--muted)]">
            Antes do foco profissional em produtos web, os jogos foram um terreno de
            experimentação. Eles continuam aqui porque mostram repertório criativo e
            vontade de testar ideias.
          </p>
        </div>

        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={expandido ? "jogos-expandidos" : "jogos-destaque"}
            initial={reduzirMovimento ? false : { opacity: 0, y: 16 }}
            animate={reduzirMovimento ? undefined : { opacity: 1, y: 0 }}
            exit={reduzirMovimento ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm leading-7 text-[var(--muted)]">
                {expandido
                  ? "Os experimentos aparecem abaixo em ordem e ajudam a mostrar como exploro mecânicas, lógica e prototipação."
                  : "Dois destaques já aparecem para introduzir a seção. Ao expandir, você acessa a seleção completa."}
              </p>
              <p className="text-xs uppercase tracking-[0.26em] text-[var(--accent-secondary)]">
                {expandido
                  ? `${jogosOrdenados.length} experimentos listados`
                  : "2 experimentos em destaque"}
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {jogosVisiveis.map((jogo) => (
                <CardJogo key={jogo.id} jogo={jogo} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </EntradaSuave>
    </SecaoBase>
  );
}
