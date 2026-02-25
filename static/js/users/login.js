tailwind.config = {
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"primary": "#11d473",
				"primary-dark": "#0ea65a",
				"secondary": "#1B5E20",
				"secondary-dark": "#0D3312",
				"background-light": "#f6f8f7",
				"background-dark": "#102219",
				"surface-light": "#ffffff",
				"surface-dark": "#162f23",
				"text-main": "#1a3c26",
				"text-muted": "#4a6b57",
			},
			fontFamily: {
				"display": ["Space Grotesk", "sans-serif"]
			},
			borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
		},
	},
};

document.addEventListener('DOMContentLoaded', () => {
	const passwordInput = document.getElementById('password');
	const togglePasswordButton = document.getElementById('togglePassword');
	const togglePasswordIcon = document.getElementById('togglePasswordIcon');

	if (!passwordInput || !togglePasswordButton || !togglePasswordIcon) {
		return;
	}

	togglePasswordButton.addEventListener('click', () => {
		const isPassword = passwordInput.type === 'password';
		passwordInput.type = isPassword ? 'text' : 'password';
		togglePasswordIcon.textContent = isPassword ? 'visibility_off' : 'visibility';
		togglePasswordButton.setAttribute('aria-label', isPassword ? 'Ocultar contraseña' : 'Mostrar contraseña');
	});
});
