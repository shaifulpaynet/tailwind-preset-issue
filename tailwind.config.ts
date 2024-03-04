import type { Config } from 'tailwindcss'
import tailwindPreset from './tailwind-preset'

export default {
  presets: [tailwindPreset],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

