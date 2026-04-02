import type { ArquivoCurriculo } from "@/types/portfolio";
import { comBasePath } from "@/lib/site";

export const arquivoCurriculo: ArquivoCurriculo = {
  caminhoArquivo: comBasePath("/curriculo.pdf"),
  urlExterna: comBasePath("/curriculo.pdf"),
};
