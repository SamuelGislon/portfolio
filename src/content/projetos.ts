import type { ProjetoPortfolio } from "@/types/portfolio";
import { comBasePath } from "@/lib/site";

export const projetos: ProjetoPortfolio[] = [
  {
    id: "tinnova-vehicle-api",
    titulo: "Tinnova Vehicle API",
    resumo:
      "API REST em Python/FastAPI para gestão de veículos, com autenticação, controle por perfil e recursos de consulta pensados para um back-end real.",
    pilha: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "Pytest"],
    categoria: "backend",
    destaque: true,
    imagem: comBasePath("/images/project-python.svg"),
    urlRepositorio: "https://github.com/SamuelGislon/tinnova-vehicle-api",
    ordem: 1,
  },
  {
    id: "portfolio-samuel-gislon",
    titulo: "Portfólio",
    resumo:
      "Portfólio profissional em Next.js, React e TypeScript, publicado no GitHub Pages para apresentar trajetória, projetos e canais de contato.",
    pilha: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    categoria: "frontend",
    destaque: true,
    imagem: comBasePath("/images/project-react.svg"),
    urlRepositorio: "https://github.com/SamuelGislon/portfolio",
    urlDemonstracao: "https://samuelgislon.github.io/portfolio/",
    ordem: 2,
  },
  {
    id: "udesc-maker",
    titulo: "UDESC Maker",
    resumo:
      "Plataforma web de projetos maker construída com Astro e React, alimentada por Markdown com frontmatter YAML e publicada no GitHub Pages.",
    pilha: ["Astro", "React", "TypeScript", "Markdown", "GitHub Actions"],
    categoria: "produto",
    destaque: true,
    imagem: comBasePath("/images/project-fullstack.svg"),
    urlRepositorio: "https://github.com/SamuelGislon/udescmaker",
    ordem: 3,
  },
  {
    id: "cadastro-pessoas",
    titulo: "Cadastro de Pessoas",
    resumo:
      "Sistema full stack para cadastro e gerenciamento de pessoas, com autenticação, SPA em Vue 3 e API Laravel conectada ao PostgreSQL.",
    pilha: ["Laravel", "Vue 3", "PostgreSQL", "Sanctum", "Tailwind CSS"],
    categoria: "fullstack",
    destaque: false,
    imagem: comBasePath("/images/project-backend.svg"),
    urlRepositorio: "https://github.com/SamuelGislon/cadastro-pessoas",
    ordem: 4,
  },
  {
    id: "senet-javafx",
    titulo: "SENET",
    resumo:
      "Projeto acadêmico em Java 17/JavaFX que implementa o jogo Senet com regras clássicas, interface temática e telas de menu, jogo e vitória.",
    pilha: ["Java 17", "JavaFX", "MVC", "Observer", "Maven"],
    categoria: "academico",
    destaque: false,
    imagem: comBasePath("/images/project-study.svg"),
    urlRepositorio: "https://github.com/SamuelGislon/senet-PPR-UDESC",
    ordem: 5,
  },
];
