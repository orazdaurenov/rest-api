import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-nunito)"],
      },
    },
    colors: {
      "dark_blue": "hsl(209, 23%, 22%)",
      "very_dark_blue": "hsl(207, 26%, 17%)",
      "very_dark_blue_light_mode": "hsl(200, 15%, 8%)",
      "dark_gray_light_mode_input": "hsl(0, 0%, 52%)",
      "very_light_gray_lightmodebg": "hsl(0, 0%, 98%)",
      "white_Dark_Modetxt_lightmodeEl": "hsl(0, 0%, 100%)",
    }
  },
  plugins: [],
} satisfies Config;
