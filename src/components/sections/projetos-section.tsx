"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";

import type { CategoriaProjeto, ProjetoPortfolio } from "@/types/portfolio";

import { Botao } from "@/components/ui/botao";
import { CardProjeto } from "@/components/ui/card-projeto";
import { EntradaSuave } from "@/components/ui/entrada-suave";
import { SecaoBase } from "@/components/ui/secao-base";
import { Separador } from "@/components/ui/separador";

const opcoesCategoria: Array<{ rotulo: string; valor: CategoriaProjeto | "all" }> = [
  { rotulo: "Todos", valor: "all" },
  { rotulo: "Back-end", valor: "backend" },
  { rotulo: "Front-end", valor: "frontend" },
  { rotulo: "Full Stack", valor: "fullstack" },
  { rotulo: "Produto/Web", valor: "produto" },
  { rotulo: "Acadêmico", valor: "academico" },
];

type PropriedadesProjetosSection = {
  projetos: ProjetoPortfolio[];
};

function ordenarProjetos(itens: ProjetoPortfolio[]) {
  return [...itens].sort((esquerda, direita) => {
    if (esquerda.destaque !== direita.destaque) {
      return Number(direita.destaque) - Number(esquerda.destaque);
    }

    return esquerda.ordem - direita.ordem;
  });
}

export function ProjetosSection({ projetos }: PropriedadesProjetosSection) {
  const [expandido, setExpandido] = useState(false);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<
    CategoriaProjeto | "all"
  >("all");
  const reduzirMovimento = useReducedMotion();

  const projetosOrdenados = useMemo(() => ordenarProjetos(projetos), [projetos]);
  const projetosDestaque = useMemo(
    () => projetosOrdenados.filter((projeto) => projeto.destaque).slice(0, 3),
    [projetosOrdenados],
  );

  const projetosFiltrados = useMemo(() => {
    if (categoriaSelecionada === "all") {
      return projetosOrdenados;
    }

    return projetosOrdenados.filter(
      (projeto) => projeto.categoria === categoriaSelecionada,
    );
  }, [projetosOrdenados, categoriaSelecionada]);

  return (
    <SecaoBase
      id="github"
      rotulo="GitHub"
      titulo="Projetos e estudos que mostram como aplico Python, Next.js e arquitetura de software."
      descricao="Esta seleção reúne estudos e projetos que reforçam meu perfil em Back-end, Python e Full Stack, com foco em APIs, integrações, dados e interfaces voltadas à operação."
      acoes={
        <Botao onClick={() => setExpandido((valorAtual) => !valorAtual)} size="lg">
          {expandido ? "Ocultar projetos" : "Ver todos os projetos"}
        </Botao>
      }
    >
      <EntradaSuave className="space-y-8">
        <AnimatePresence initial={false} mode="wait">
          {expandido ? (
            <motion.div
              key="projetos-expandidos"
              initial={reduzirMovimento ? false : { opacity: 0, y: 16 }}
              animate={reduzirMovimento ? undefined : { opacity: 1, y: 0 }}
              exit={reduzirMovimento ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="flex flex-wrap gap-3">
                {opcoesCategoria.map((opcao) => (
                  <button
                    key={opcao.valor}
                    type="button"
                    onClick={() => setCategoriaSelecionada(opcao.valor)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] transition-colors ${
                      categoriaSelecionada === opcao.valor
                        ? "border-[rgba(76,125,255,0.38)] bg-[rgba(76,125,255,0.14)] text-[#d8e2ff]"
                        : "border-[var(--line)] bg-[rgba(255,255,255,0.03)] text-[var(--muted)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {opcao.rotulo}
                  </button>
                ))}
              </div>
              <Separador />
              <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {projetosFiltrados.map((projeto) => (
                  <CardProjeto key={projeto.id} projeto={projeto} />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="projetos-destaque"
              initial={reduzirMovimento ? false : { opacity: 0, y: 16 }}
              animate={reduzirMovimento ? undefined : { opacity: 1, y: 0 }}
              exit={reduzirMovimento ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {projetosDestaque.map((projeto) => (
                  <CardProjeto key={projeto.id} projeto={projeto} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </EntradaSuave>
    </SecaoBase>
  );
}
