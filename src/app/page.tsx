import { ApresentacaoSection } from "@/components/sections/apresentacao-section";
import { CurriculoSection } from "@/components/sections/curriculo-section";
import { JogosSection } from "@/components/sections/jogos-section";
import { ProjetosSection } from "@/components/sections/projetos-section";
import { RodapeSection } from "@/components/sections/rodape-section";
import { CabecalhoSite } from "@/components/ui/cabecalho-site";

import { arquivoCurriculo } from "@/content/curriculo";
import { jogos } from "@/content/jogos";
import { linksPortfolio } from "@/content/links";
import { perfil } from "@/content/perfil";
import { projetos } from "@/content/projetos";

export default function PaginaInicial() {
  return (
    <div className="relative overflow-x-clip">
      <CabecalhoSite nome={perfil.nome} hrefEmail={linksPortfolio.email} />
      <main>
        <ApresentacaoSection perfil={perfil} links={linksPortfolio} />
        <ProjetosSection projetos={projetos} />
        <CurriculoSection links={linksPortfolio} curriculo={arquivoCurriculo} />
        <JogosSection jogos={jogos} />
      </main>
      <RodapeSection perfil={perfil} links={linksPortfolio} />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(11,13,16,0.7))]"
      />
    </div>
  );
}
