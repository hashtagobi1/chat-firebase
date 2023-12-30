/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        removeConsole: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.clerk.com',
                port: '',
                pathname: '/**',

            }
        ]
    }
}

module.exports = nextConfig