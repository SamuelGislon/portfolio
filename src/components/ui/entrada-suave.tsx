"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { mesclarClasses } from "@/lib/utils";

type PropriedadesEntradaSuave = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function EntradaSuave({
  children,
  className,
  delay = 0,
}: PropriedadesEntradaSuave) {
  const reduzirMovimento = useReducedMotion();

  if (reduzirMovimento) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={mesclarClasses(className)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
