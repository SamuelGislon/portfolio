import type { ProjetoPortfolio } from "@/types/portfolio";
import { comBasePath } from "@/lib/site";

export const projetos: ProjetoPortfolio[] = [
  {
    id: "automation-hub",
    titulo: "Automation Hub",
    resumo:
      "Estudo autoral inspirado em rotinas reais de automação, integração de dados e APIs em Python.",
    pilha: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    categoria: "backend",
    destaque: true,
    imagem: comBasePath("/images/project-python.svg"),
    ordem: 1,
  },
  {
    id: "insight-board",
    titulo: "Insight Board",
    resumo:
      "Projeto full stack voltado a acompanhamento de indicadores e apoio à decisão, com frontend em Next.js e organização de dados para uso operacional.",
    pilha: ["Next.js", "React", "TypeScript", "Prisma"],
    categoria: "fullstack",
    destaque: true,
    imagem: comBasePath("/images/project-fullstack.svg"),
    ordem: 2,
  },
  {
    id: "react-control-center",
    titulo: "React Control Center",
    resumo:
      "Interface administrativa pensada para demonstrar clareza de estados, componentização e organização de fluxos.",
    pilha: ["React", "Next.js", "Tailwind", "Motion"],
    categoria: "react",
    destaque: true,
    imagem: comBasePath("/images/project-react.svg"),
    ordem: 3,
  },
  {
    id: "docs-pipeline-api",
    titulo: "Docs Pipeline API",
    resumo:
      "API em Python com foco em processamento assíncrono, validação de documentos e integração entre serviços.",
    pilha: ["Python", "Django", "Celery", "Redis"],
    categoria: "python",
    destaque: false,
    imagem: comBasePath("/images/project-backend.svg"),
    ordem: 4,
  },
  {
    id: "ux-lab",
    titulo: "UX Motion Lab",
    resumo:
      "Estudo de interface voltado a microinterações, consistência visual e componentização em React.",
    pilha: ["React", "TypeScript", "Design System"],
    categoria: "frontend",
    destaque: false,
    imagem: comBasePath("/images/project-study.svg"),
    ordem: 5,
  },
];
