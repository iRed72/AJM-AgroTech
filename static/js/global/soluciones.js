tailwind.config = {
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"primary": "#11d473",
				"background-light": "#f6f8f7",
				"background-dark": "#102219",
				"surface-light": "#ffffff",
				"surface-dark": "#1a2c24",
				"text-main-light": "#111814",
				"text-main-dark": "#e0e6e3",
				"text-sec-light": "#618975",
				"text-sec-dark": "#8fa69a",
			},
			fontFamily: {
				"display": ["Space Grotesk", "sans-serif"]
			},
			borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
		},
	},
};
