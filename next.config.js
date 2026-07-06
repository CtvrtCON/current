/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/ctvrtcon",
    output: "export",
    reactStrictMode: true,
    // Statický export nedokáže optimalizovat obrázky za běhu.
    images: {unoptimized: true},
}

module.exports = nextConfig
