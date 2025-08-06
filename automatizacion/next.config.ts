import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "es", "pt"],
    defaultLocale: "es",
    localeDetection: true,
  },
};

export default nextConfig;
