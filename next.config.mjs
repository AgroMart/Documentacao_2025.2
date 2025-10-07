const isProd = process.env.NODE_ENV === 'production'
const repo = 'Documentacao_2025.2'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',               // necessário para GitHub Pages
  images: { unoptimized: true },  // desativa otimização de imagens no server
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
}

export default nextConfig
