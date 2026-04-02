"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { mesclarClasses } from "@/lib/utils";

const variantesBotao = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(76,125,255,0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--accent)] px-5 py-3 text-white shadow-[0_18px_40px_rgba(76,125,255,0.22)] hover:bg-[#6b93ff]",
        secondary:
          "bg-[var(--surface-2)] px-5 py-3 text-[var(--foreground)] hover:bg-[var(--surface-3)]",
        outline:
          "border border-[var(--line)] bg-transparent px-5 py-3 text-[var(--foreground)] hover:border-[rgba(198,139,89,0.4)] hover:bg-[rgba(198,139,89,0.08)]",
        ghost:
          "bg-transparent px-4 py-2 text-[var(--muted)] hover:bg-white/5 hover:text-[var(--foreground)]",
        link: "h-auto rounded-none px-0 py-0 text-[var(--foreground)] underline-offset-4 hover:underline",
      },
      size: {
        default: "",
        sm: "px-3 py-2 text-xs",
        lg: "px-6 py-3.5 text-base",
        icon: "h-11 w-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type PropriedadesBotao = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variantesBotao> & {
    asChild?: boolean;
  };

const Botao = React.forwardRef<HTMLButtonElement, PropriedadesBotao>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Componente = asChild ? Slot : "button";

    return (
      <Componente
        className={mesclarClasses(variantesBotao({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Botao.displayName = "Botao";

export { Botao };
