import type { JogoPortfolio } from "@/types/portfolio";
import { comBasePath } from "@/lib/site";

export const jogos: JogoPortfolio[] = [
  {
    id: "nebula-sprint",
    titulo: "Nebula Sprint",
    resumo:
      "Arcade de ritmo rápido criado para experimentar mecânicas, feedback visual e sensação de controle.",
    tecnologias: ["JavaScript", "Canvas", "Game Loop"],
    imagem: comBasePath("/images/game-arcade.svg"),
    ordem: 1,
    destaque: true,
  },
  {
    id: "logic-forge",
    titulo: "Logic Forge",
    resumo:
      "Puzzle estratégico construído sobre regras simples, mas com camadas que exigem raciocínio lógico.",
    tecnologias: ["TypeScript", "Phaser", "Level Design"],
    imagem: comBasePath("/images/game-strategy.svg"),
    ordem: 2,
    destaque: true,
  },
  {
    id: "portal-shift",
    titulo: "Portal Shift",
    resumo:
      "Experimento jogável que mistura exploração, transições de cena e prototipação rápida de ideias visuais.",
    tecnologias: ["React", "Physics", "Creative Coding"],
    imagem: comBasePath("/images/game-lab.svg"),
    ordem: 3,
    destaque: false,
  },
];
