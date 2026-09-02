import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/Podgorica-phone-fix/",
  },
  prerender: {
    enabled: true,
  },
});
