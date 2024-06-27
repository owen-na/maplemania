/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: "https",
            hostname: "img.favpng.com",
            },
            {
            protocol: "https",
        hostname: "media.maplestorywiki.net",
        },
        ]
    }
};

export default nextConfig;
