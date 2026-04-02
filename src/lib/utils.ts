import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const LINKS_PLACEHOLDER = new Set([
  "https://example.com",
  "https://github.com",
  "https://lattes.cnpq.br",
]);

export function mesclarClasses(...entradas: ClassValue[]) {
  return twMerge(clsx(entradas));
}

export function ehLinkPublicoValido(url?: string) {
  if (!url) {
    return false;
  }

  const urlNormalizada = url.trim();

  return urlNormalizada.length > 0 && !LINKS_PLACEHOLDER.has(urlNormalizada);
}

export function obterLinkPublico(url?: string) {
  const urlNormalizada = url?.trim();

  if (!ehLinkPublicoValido(urlNormalizada)) {
    return undefined;
  }

  return urlNormalizada;
}
