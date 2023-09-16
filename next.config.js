/** @type {import('next').NextConfig} */
const nextConfig = {


    images: {
        remotePatterns:
            [
                {
                    protocol: 'https',
                    hostname: 'images.unsplash.com',
                },
                {
                    protocol: 'https',
                    hostname: 'd1kq2dqeox7x40.cloudfront.net',
                },
                {
                    protocol: 'https',
                    hostname: 'lh3.googleusercontent.com',
                },
                {
                    protocol: 'https',
                    hostname: 'res.cloudinary.com',
                },
                {
                    protocol: 'https',
                    hostname: 'picsum.photos',
                },
                {
                    protocol: 'https',
                    hostname: 'loremflickr.com',
                },
                {
                    protocol: 'https',
                    hostname: 'avatars.githubusercontent.com',
                },
                {
                    protocol: 'https',
                    hostname: 'cloudflare-ipfs.com',
                },
                {
                    protocol: 'https',
                    hostname: 'cdn.rareblocks.xyz',
                },
                {
                    protocol: 'https',
                    hostname: ' "images.unsplash.com',
                },
                {
                    protocol: 'https',
                    hostname: 'dummyimage.com',
                },
            ]
    }
}

module.exports = nextConfig
