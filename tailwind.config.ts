import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-pink-300",
    "bg-gray-500",
    "bg-gray-800",
    "bg-gray-400",
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-400",
    "bg-teal-200",
    "bg-orange-600",
    "bg-purple-500 ",
    "bg-yellow-700",
    "bg-blue-300",
    "bg-pink-500",
    "bg-green-600",
    "bg-yellow-800",
    "bg-purple-800",
    "bg-indigo-700",
  ],
} satisfies Config;
