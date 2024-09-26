/** @type {import('next').NextConfig} */
const nextConfig = {
    'output': 'export',
    reactStrictMode: false,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['res.cloudinary.com']
    }
};
// 
export default nextConfig;