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
      favicon: "/public/favicon.svg",
      description: "Web dev portfolio for Brett Tanner",
      customCss: ["./src/tailwind.css"],
      social: {
        github: "https://github.com/Brett-Tanner",
        linkedin: "https://www.linkedin.com/in/brett-tanner-53174711b/",
        discord: "http://discordapp.com/users/213138871527931905",
      },
      sidebar: [
        {
          label: "Javascript",
          autogenerate: {
            directory: "wiki/javascript",
          },
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "wiki/reference",
          },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
