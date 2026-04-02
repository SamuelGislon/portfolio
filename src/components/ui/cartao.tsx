import * as React from "react";

import { mesclarClasses } from "@/lib/utils";

export function Cartao({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={mesclarClasses(
        "rounded-[28px] border border-[var(--line)] bg-[var(--surface-1)] text-[var(--foreground)] shadow-[0_24px_70px_rgba(0,0,0,0.18)]",
        className,
      )}
      {...props}
    />
  );
}

export function CabecalhoCartao({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={mesclarClasses("flex flex-col gap-4 p-6", className)} {...props} />;
}

export function ConteudoCartao({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={mesclarClasses("p-6 pt-0", className)} {...props} />;
}
