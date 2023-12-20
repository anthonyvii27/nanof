/** @type {import('next').NextConfig} */

const nextConfig = {
    compiler: {
        styledComponents: true,
        removeConsole: {
            exclude: ["error"],
        },
    },
    staticPageGenerationTimeout: 0,
    reactStrictMode: true,
    eslint: {
        dirs: ["."],
    },
};

module.exports = nextConfig;
