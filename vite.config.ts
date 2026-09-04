import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Lovable preview (dev server) serves the site at "/", while the GitHub Pages
// production build must be served under "/podgorica-phone-fix/".
const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  vite: {
    base: isProduction ? "/podgorica-phone-fix/" : "/",
  },
  tanstackStart: {
    pages: [{ path: "/" }],
    prerender: {
      enabled: true,
      autoStaticPathsDiscovery: false,
    },
  },
});
