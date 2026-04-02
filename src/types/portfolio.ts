export type CategoriaProjeto =
  | "python"
  | "react"
  | "backend"
  | "frontend"
  | "fullstack";

export type PerfilPortfolio = {
  nome: string;
  cargo: string;
  apresentacao: string;
  resumoCurto: string;
  focos: string[];
};

export type ProjetoPortfolio = {
  id: string;
  titulo: string;
  resumo: string;
  pilha: string[];
  categoria: CategoriaProjeto;
  destaque: boolean;
  urlRepositorio?: string;
  urlDemonstracao?: string;
  imagem: string;
  ordem: number;
};

export type JogoPortfolio = {
  id: string;
  titulo: string;
  resumo: string;
  tecnologias: string[];
  urlJogo?: string;
  imagem: string;
  ordem: number;
  destaque: boolean;
};

export type LinksPortfolio = {
  github: string;
  linkedin: string;
  lattes?: string;
  curriculoPdf: string;
  email: string;
};

export type ArquivoCurriculo = {
  caminhoArquivo: string;
  urlExterna?: string;
};
