
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
				sans: ['Inter', 'system-ui', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				'cream': '#faf8f5',
				'warm-gray': '#8b8680',
				'sage': '#9caf88',
				'soft-blue': '#a8c8ec',
				'blush': '#f4c2c2',
				'lavender': '#d4b5d4',
				'champagne': '#f7e7ce',
				'sage-dark': '#7a8471',
				'glass-white': 'rgba(255, 255, 255, 0.85)',
				'glass-border': 'rgba(255, 255, 255, 0.3)',
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
				'fade-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'gentle-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 15px rgba(156, 175, 136, 0.3), 0 0 30px rgba(156, 175, 136, 0.1)',
					},
					'50%': { 
						boxShadow: '0 0 25px rgba(156, 175, 136, 0.5), 0 0 50px rgba(156, 175, 136, 0.2)',
					}
				},
				'soft-pulse': {
					'0%, 100%': { borderColor: 'rgba(156, 175, 136, 0.3)' },
					'50%': { borderColor: 'rgba(156, 175, 136, 0.7)' }
				},
				'gentle-move': {
					'0%': { transform: 'translateX(0) translateY(0)' },
					'100%': { transform: 'translateX(-30px) translateY(-30px)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-up': 'fade-up 0.8s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'gentle-glow': 'gentle-glow 3s ease-in-out infinite',
				'soft-pulse': 'soft-pulse 3s ease-in-out infinite',
				'gentle-move': 'gentle-move 30s linear infinite',
				'float': 'float 6s ease-in-out infinite'
			},
			backgroundImage: {
				'aesthetic-grid': "linear-gradient(rgba(156, 175, 136, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(156, 175, 136, 0.1) 1px, transparent 1px)",
				'soft-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
				'sage-gradient': 'linear-gradient(135deg, #9caf88, #a8c8ec)',
				'warm-gradient': 'linear-gradient(135deg, #f7e7ce, #f4c2c2)',
			},
			backdropBlur: {
				'soft': '12px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
