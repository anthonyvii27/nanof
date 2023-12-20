/** @type {import('next').NextConfig} */

const nextConfig = {
    compiler: {
        removeConsole: {
            exclude: ["error"]
        }
    },
    staticPageGenerationTimeout: 0,
    reactStrictMode: true,
    eslint: {
        dirs: ["."]
    }
}

module.exports = nextConfig;