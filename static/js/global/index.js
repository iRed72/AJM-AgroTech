tailwind.config = {
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"primary": "#4CAF50",
				"primary-dark": "#388E3C",
				"secondary": "#1B5E20",
				"secondary-dark": "#0D3312",
				"tech-green": "#2E7D32",
				"tech-green-dark": "#1B5E20",
				"background-light": "#f1f8f4",
				"background-dark": "#05110a",
				"surface-light": "#ffffff",
				"surface-dark": "#0f2618",
				"text-main": "#1a3c26",
				"text-muted": "#4a6b57",
			},
			fontFamily: {
				"display": ["Space Grotesk", "sans-serif"],
				"body": ["Noto Sans", "sans-serif"],
			},
			borderRadius: {
				"DEFAULT": "0.5rem",
				"lg": "0.75rem",
				"xl": "1rem",
				"full": "9999px"
			},
		},
	},
};
