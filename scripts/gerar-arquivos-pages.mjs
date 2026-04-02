import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const DOMINIO_PRODUCAO = "https://samuelgislon.github.io";

function normalizarBasePath(basePath) {
  if (!basePath || basePath === "/") {
    return "";
  }

  const basePathSemBarraFinal = basePath.replace(/\/$/, "");

  return basePathSemBarraFinal.startsWith("/")
    ? basePathSemBarraFinal
    : `/${basePathSemBarraFinal}`;
}

function normalizarUrl(url) {
  return url.replace(/\/$/, "");
}

function obterBasePath() {
  const basePathInformado = process.env.NEXT_PUBLIC_BASE_PATH?.trim();

  if (basePathInformado) {
    return normalizarBasePath(basePathInformado);
  }

  return "/portfolio";
}

function obterUrlSite() {
  const urlInformada = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (urlInformada) {
    return normalizarUrl(urlInformada);
  }

  return `${DOMINIO_PRODUCAO}${obterBasePath()}`;
}

const basePath = obterBasePath();
const urlSite = obterUrlSite();
const diretorioSaida = path.join(process.cwd(), "out");

const conteudoRobots = [
  "User-Agent: *",
  `Allow: ${basePath || "/"}`,
  "",
  `Sitemap: ${urlSite}/sitemap.xml`,
  "",
].join("\n");

const conteudoSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${urlSite}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

await mkdir(diretorioSaida, { recursive: true });
await writeFile(path.join(diretorioSaida, ".nojekyll"), "", "utf8");
await writeFile(path.join(diretorioSaida, "robots.txt"), conteudoRobots, "utf8");
await writeFile(path.join(diretorioSaida, "sitemap.xml"), conteudoSitemap, "utf8");
