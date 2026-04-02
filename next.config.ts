import type { NextConfig } from "next";

function obterBasePathConfigurado() {
  const basePathInformado = process.env.NEXT_PUBLIC_BASE_PATH?.trim();

  if (basePathInformado) {
    if (basePathInformado === "/") {
      return "";
    }

    return basePathInformado.startsWith("/")
      ? basePathInformado.replace(/\/$/, "")
      : `/${basePathInformado.replace(/\/$/, "")}`;
  }

  return process.env.NODE_ENV === "production" ? "/portfolio" : "";
}

const basePath = obterBasePathConfigurado();

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
