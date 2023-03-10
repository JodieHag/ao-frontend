/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // i18n: {
  // These are all the locales you want to support in
  // your application
  // locales: ['es'],
  // This is the default locale you want to be used when visiting
  // a non-locale prefixed path e.g. `/hello`
  // defaultLocale: 'es',
  // },
  swcMinify: true,
  output: 'standalone',
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;
