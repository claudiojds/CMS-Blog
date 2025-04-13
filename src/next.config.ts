////Original
/*
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
};

export default nextConfig;
*/

////Curso
// import createNextIntlPlugin from 'next-intl/plugin';

// const withNextIntl = createNextIntlPlugin(
//     './src/backend/lib/i18n.ts' // Corrigido o uso de barras
// );

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default withNextIntl(nextConfig);

////
import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Forneça o caminho correto para o arquivo de configuração de internacionalização
const withNextIntl = createNextIntlPlugin('./src/lib/i18n.ts');

const nextConfig: NextConfig = {};

export default withNextIntl(nextConfig);