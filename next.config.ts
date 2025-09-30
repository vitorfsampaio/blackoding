import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remover basePath e assetPrefix por enquanto para evitar conflitos
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/blackoding' : '',
  // basePath: process.env.NODE_ENV === 'production' ? '/blackoding' : '',
};

export default nextConfig;
