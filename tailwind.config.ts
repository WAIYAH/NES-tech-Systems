
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
			},
			colors: {
				primary: {
					DEFAULT: '#FFD700',     // Gold
					foreground: '#000000',  // Text on gold
				},
				blue: {
					DEFAULT: '#0056b3',
				},
				black: '#000000',
				white: '#FFFFFF',
				accent: {
					DEFAULT: '#0056b3',
					foreground: '#FFFFFF'
				},
				card: {
					DEFAULT: '#FFF',
					foreground: '#222'
				},
				...{
					// Extend with previously existing theme colors
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				'slide-up': {
					"0%": { opacity: "0", transform: "translateY(40px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				'scale-in': {
					"0%": { transform: "scale(0.95)", opacity: "0" },
					"100%": { transform: "scale(1)", opacity: "1" }
				}
			},
			animation: {
				'fade-in': 'fade-in 0.7s cubic-bezier(0.4,0,0.6,1) forwards',
				'slide-up': 'slide-up 0.8s cubic-bezier(0.4,0,0.2,1) forwards',
				'scale-in': 'scale-in 0.4s cubic-bezier(0.4,0,0.2,1) forwards',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			boxShadow: {
				card: '0 8px 28px 0 rgb(0 0 0 / 0.12)',
				hero: '0 4px 24px 0 rgb(255 215 0 / 0.15)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
