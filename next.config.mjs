/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: [
    'https://*.replit.dev',
    'https://*.spock.replit.dev',
    'https://*.repl.co',
    'http://127.0.0.1',
    'http://localhost'
  ]
};

export default nextConfig;
