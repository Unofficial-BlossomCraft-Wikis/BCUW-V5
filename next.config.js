/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  async rewrites() {
    return [
      {
        source: '/cdn/ut/:id',
        destination: 'https://co6j4hk884.ufs.sh/f/:id',
      },
    ]
  },
};

export default config;
