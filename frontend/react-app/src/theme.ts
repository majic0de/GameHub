import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// Define custom theme configuration
const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#e6f2ff" }, // Lightest shade of brand color
          100: { value: "#e6f2ff" },
          200: { value: "#bfdeff" },
          300: { value: "#99caff" },
          950: { value: "#001a33" }, // Darkest shade of brand color
        },
      },
    },
  },
});

// Create a theme system by merging default and custom configurations
export const system = createSystem(defaultConfig, customConfig);
