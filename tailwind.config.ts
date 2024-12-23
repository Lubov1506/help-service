import { Salad } from "lucide-react"
import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
    "./shared/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        popover: "var(--popover)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "card-text": "var(--card-text)",
        "rev-avatar-bg": "var(--rev-avatar-bg)",
        accent: "var(--accent)",
        salad: "var(--salad)",
        muted: "var(--muted)",
        btn: "var(--btn)",
        "btn-accent": "var(--btn-accent)",
        border: "var(--border)",
        input: "var(--input)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      letterSpacing: {
        tightest: "-0.02em",
      },
      lineHeight: {
        tight: "102%",
      },
      rotate: {
        "15": "15deg",
        "345": "-15deg",
      },
    },
  },
  plugins: [],
} satisfies Config
