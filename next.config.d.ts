// next.config.d.ts
import type { NextConfig as BaseNextConfig } from "next";

declare module "next" {
  interface NextConfig extends BaseNextConfig {
    eslint?: {
      ignoreDuringBuilds?: boolean;
      dirs?: string[];
    };
    typescript?: {
      ignoreBuildErrors?: boolean;
      tsconfigPath?: string;
    };
  }
}
