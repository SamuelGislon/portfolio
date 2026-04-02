import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { mesclarClasses } from "@/lib/utils";

const variantesSelo = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em]",
  {
    variants: {
      variant: {
        default:
          "border-[rgba(76,125,255,0.28)] bg-[rgba(76,125,255,0.14)] text-[#d8e2ff]",
        muted:
          "border-[var(--line)] bg-[rgba(255,255,255,0.04)] text-[var(--muted)]",
        accent:
          "border-[rgba(198,139,89,0.35)] bg-[rgba(198,139,89,0.12)] text-[#f1d3b6]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type PropriedadesSelo = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof variantesSelo>;

export function Selo({ className, variant, ...props }: PropriedadesSelo) {
  return (
    <div
      className={mesclarClasses(variantesSelo({ variant }), className)}
      {...props}
    />
  );
}
