import type { ReactNode } from "react";

import { mesclarClasses } from "@/lib/utils";

type PropriedadesSecaoBase = {
  id: string;
  rotulo: string;
  titulo: string;
  descricao: string;
  acoes?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function SecaoBase({
  id,
  rotulo,
  titulo,
  descricao,
  acoes,
  children,
  className,
}: PropriedadesSecaoBase) {
  return (
    <section
      id={id}
      className={mesclarClasses(
        "scroll-mt-28 border-t border-[var(--line)] px-6 py-20 sm:px-10 lg:px-16 lg:py-28",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent-secondary)]">
              {rotulo}
            </p>
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              {titulo}
            </h2>
            <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {descricao}
            </p>
          </div>
          {acoes ? <div className="lg:pb-2">{acoes}</div> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
