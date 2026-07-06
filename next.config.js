/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/ctvrtcon",
    output: "export",
    reactStrictMode: true,
    // Static export can't optimize images at runtime.
    images: {unoptimized: true},
}

module.exports = nextConfig
