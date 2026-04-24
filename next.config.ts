import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/production-ai-pipeline-at-scale",
        destination: "/blog/production-rag-pipeline-at-scale",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
