import type { NextConfig } from "next";

type WebpackRule = {
  test?: { toString(): string };
  oneOf?: WebpackRule[];
  use?: unknown[];
};

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/my-link" : "",
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module?.rules?.forEach((rule: unknown) => {
      const r = rule as WebpackRule;
      if (r && r.oneOf) {
        r.oneOf.forEach((oneOfRule) => {
          if (oneOfRule?.test && oneOfRule.test.toString().includes("css")) {
            if (Array.isArray(oneOfRule.use)) {
              oneOfRule.use.push({
                loader: "@tailwindcss/turbopack",
              });
            }
          }
        });
      }
    });
    return config;
  },
};

export default nextConfig;
