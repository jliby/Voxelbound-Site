/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== Enables static exports
    basePath: "/Voxelbound-Site",
    assetPrefix: "/Voxelbound-Site/",
    images: {
        unoptimized: true,
    },
    // Ensure we don't have issues with trailing slashes on GH Pages
    trailingSlash: true,
};

export default nextConfig;
