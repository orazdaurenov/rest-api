/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import { NextConfig } from "next";
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config: NextConfig = {
  images: {
    domains: ['upload.wikimedia.org'],  // Allow this domain
  },
};
export default config;
