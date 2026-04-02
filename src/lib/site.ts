export const configuracaoSite = {
  nome: "Samuel Gislon",
  urlLocal: "http://localhost:3000",
  dominioProducao: "https://samuelgislon.github.io",
  descricao:
    "Portfólio profissional de Samuel Gislon com foco em Python, Next.js, PostgreSQL, Docker, Terraform e desenvolvimento Full Stack.",
};

export const itensNavegacao = [
  { rotulo: "Projetos/GitHub", href: "#github" },
  { rotulo: "Currículo", href: "#resume" },
  { rotulo: "LinkedIn", href: "#linkedin" },
  { rotulo: "Currículo Lattes", href: "#lattes" },
  { rotulo: "Jogos", href: "#games" },
];

function normalizarBasePath(basePath: string) {
  if (!basePath || basePath === "/") {
    return "";
  }

  const basePathSemBarraFinal = basePath.replace(/\/$/, "");

  return basePathSemBarraFinal.startsWith("/")
    ? basePathSemBarraFinal
    : `/${basePathSemBarraFinal}`;
}

function normalizarUrl(url: string) {
  return url.replace(/\/$/, "");
}

export function obterBasePath() {
  const basePathInformado = process.env.NEXT_PUBLIC_BASE_PATH?.trim();

  if (basePathInformado) {
    return normalizarBasePath(basePathInformado);
  }

  return process.env.NODE_ENV === "production" ? "/portfolio" : "";
}

export function comBasePath(caminho: string) {
  if (!caminho.startsWith("/")) {
    return caminho;
  }

  const basePath = obterBasePath();

  return basePath ? `${basePath}${caminho}` : caminho;
}

export function obterUrlSite() {
  const urlInformada = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (urlInformada) {
    return normalizarUrl(urlInformada);
  }

  const basePath = obterBasePath();
  const urlBase =
    process.env.NODE_ENV === "production"
      ? normalizarUrl(configuracaoSite.dominioProducao)
      : normalizarUrl(configuracaoSite.urlLocal);

  return basePath ? `${urlBase}${basePath}` : urlBase;
}
