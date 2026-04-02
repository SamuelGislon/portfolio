"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { mesclarClasses } from "@/lib/utils";

const Painel = Dialog.Root;
const AcionadorPainel = Dialog.Trigger;
const FecharPainel = Dialog.Close;
const PortalPainel = Dialog.Portal;
const TituloPainel = Dialog.Title;
const DescricaoPainel = Dialog.Description;

const SobreposicaoPainel = React.forwardRef<
  React.ElementRef<typeof Dialog.Overlay>,
  React.ComponentPropsWithoutRef<typeof Dialog.Overlay>
>(({ className, ...props }, ref) => (
  <Dialog.Overlay
    ref={ref}
    className={mesclarClasses(
      "fixed inset-0 z-50 bg-[rgba(5,8,12,0.78)] backdrop-blur-sm transition-opacity duration-300 data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
      className,
    )}
    {...props}
  />
));

SobreposicaoPainel.displayName = Dialog.Overlay.displayName;

const ConteudoPainel = React.forwardRef<
  React.ElementRef<typeof Dialog.Content>,
  React.ComponentPropsWithoutRef<typeof Dialog.Content>
>(({ className, children, ...props }, ref) => (
  <PortalPainel>
    <SobreposicaoPainel />
    <Dialog.Content
      ref={ref}
      className={mesclarClasses(
        "fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-md flex-col border-l border-[var(--line)] bg-[rgba(10,13,16,0.96)] px-6 pb-8 pt-6 text-[var(--foreground)] shadow-[0_24px_70px_rgba(0,0,0,0.35)] transition-transform duration-300 data-[state=closed]:translate-x-full data-[state=open]:translate-x-0 sm:px-8",
        className,
      )}
      {...props}
    >
      <FecharPainel className="absolute right-5 top-5 rounded-full border border-[var(--line)] p-2 text-[var(--muted)] transition-colors hover:border-white/20 hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(76,125,255,0.55)]">
        <X className="h-4 w-4" />
        <span className="sr-only">Fechar menu</span>
      </FecharPainel>
      {children}
    </Dialog.Content>
  </PortalPainel>
));

ConteudoPainel.displayName = Dialog.Content.displayName;

function CabecalhoPainel({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={mesclarClasses("flex flex-col gap-2", className)} {...props} />;
}

function RodapePainel({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={mesclarClasses("mt-auto flex flex-col gap-3", className)} {...props} />;
}

export {
  Painel,
  AcionadorPainel,
  FecharPainel,
  ConteudoPainel,
  DescricaoPainel,
  RodapePainel,
  CabecalhoPainel,
  TituloPainel,
};
