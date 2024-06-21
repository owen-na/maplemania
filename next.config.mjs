import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'img.favpng.com/1/1/9/maplestory-2-maple-leaf-png-favpng-gRahWewr9VEviM0jd8PZHgqkY.jpg',
            port: '',
            pathname: '/src/app/Navbar/**',
            }
        ]
    }
};

export default nextConfig;
