/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Garante a exportação estática
  trailingSlash: true, // Adiciona uma barra final a todas as URLs (importante para hospedagem estática)
  images: {
    unoptimized: true, // Permite usar imagens sem otimização (necessário em exportação estática)
  },
  basePath: '', // Deixe vazio, mas configure se estiver hospedando em uma subpasta
};

export default nextConfig;
