import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			background: "var(--background)",
  			foreground: "var(--foreground)",
  			card: {
  				DEFAULT: "var(--card)",
  				foreground: "var(--card-foreground)"
  			},
  			popover: {
  				DEFAULT: "var(--popover)",
  				foreground: "var(--popover-foreground)"
  			},
  			primary: {
  				DEFAULT: "var(--primary)",
  				foreground: "var(--primary-foreground)"
  			},
  			secondary: {
  				DEFAULT: "var(--secondary)",
  				foreground: "var(--secondary-foreground)"
  			},
  			muted: {
  				DEFAULT: "var(--muted)",
  				foreground: "var(--muted-foreground)"
  			},
  			accent: {
  				DEFAULT: "var(--accent)",
  				foreground: "var(--accent-foreground)"
  			},
  			destructive: {
  				DEFAULT: "var(--destructive)",
  				foreground: "var(--destructive-foreground)"
  			},
  			border: "var(--border)",
  			input: "var(--input)",
  			ring: "var(--ring)",
  			chart: {
  				'1': "var(--chart-1)",
  				'2': "var(--chart-2)",
  				'3': "var(--chart-3)",
  				'4': "var(--chart-4)",
  				'5': "var(--chart-5)"
  			},
  			sidebar: {
  				DEFAULT: "var(--sidebar)",
  				foreground: "var(--sidebar-foreground)",
  				primary: "var(--sidebar-primary)",
  				'primary-foreground': "var(--sidebar-primary-foreground)",
  				accent: "var(--sidebar-accent)",
  				'accent-foreground': "var(--sidebar-accent-foreground)",
  				border: "var(--sidebar-border)",
  				ring: "var(--sidebar-ring)"
  			}
  		},
  		borderRadius: {
  			lg: "var(--radius)",
  			md: "calc(var(--radius) - 2px)",
  			sm: "calc(var(--radius) - 4px)"
  		},
  		fontFamily: {
  			sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
  			mono: ["var(--font-mono)", "ui-monospace", "monospace"],
  			serif: ["var(--font-serif)", "ui-serif", "serif"]
  		},
  		boxShadow: {
  			"2xs": "var(--shadow-2xs)",
  			xs: "var(--shadow-xs)",
  			sm: "var(--shadow-sm)",
  			md: "var(--shadow-md)",
  			lg: "var(--shadow-lg)",
  			xl: "var(--shadow-xl)",
  			"2xl": "var(--shadow-2xl)"
  		},
  		letterSpacing: {
  			tighter: "var(--tracking-tighter)",
  			tight: "var(--tracking-tight)",
  			normal: "var(--tracking-normal)",
  			wide: "var(--tracking-wide)",
  			wider: "var(--tracking-wider)",
  			widest: "var(--tracking-widest)"
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
  				'0%': { opacity: '0', transform: 'translateY(10px)' },
  				'100%': { opacity: '1', transform: 'translateY(0)' }
  			},
  			'slide-in': {
  				'0%': { opacity: '0', transform: 'translateX(-10px)' },
  				'100%': { opacity: '1', transform: 'translateX(0)' }
  			},
  			'scale-in': {
  				'0%': { opacity: '0', transform: 'scale(0.95)' },
  				'100%': { opacity: '1', transform: 'scale(1)' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-in': 'fade-in 0.3s ease-out',
  			'slide-in': 'slide-in 0.3s ease-out',
  			'scale-in': 'scale-in 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
