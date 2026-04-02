"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { mesclarClasses } from "@/lib/utils";

const Separador = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    decorative={decorative}
    orientation={orientation}
    ref={ref}
    className={mesclarClasses(
      "shrink-0 bg-[var(--line)]",
      orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
      className,
    )}
    {...props}
  />
));

Separador.displayName = SeparatorPrimitive.Root.displayName;

export { Separador };
