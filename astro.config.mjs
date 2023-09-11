import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  image: {
    service: {
      entrypoint: "astro/assets/services/noop",
    },
  },
  site: "https://brett-tanner.dev",
  integrations: [
    starlight({
      title: "Brett Tanner's Portfolio",
      logo: {
        dark: "./src/assets/dark-favicon.svg",
        light: "./src/assets/light-favicon.svg",
        replacesTitle: true,
      },
      customCss: ["./src/tailwind.css"],
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Javascript",
          autogenerate: {
            directory: "javascript",
          },
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
