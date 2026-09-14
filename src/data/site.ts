export const site = {
	name: 'Julian Arambulo',
	location: 'Asunción',
	roles: 'Fullstack Dev / BI analyst',
	tagline: 'Transforma ideas en código y datos en valor.',
	githubUrl: 'https://github.com/AlvaroTWM',
	linkedinUrl: 'https://www.linkedin.com/in/alvaro-arambulo',
	email: 'mailto:alvaroarambulo@gmail.com',
	emailDisplay: 'alvaroarambulo@gmail.com',
	cvUrl: '../public/Julian_Arambulo_CV .pdf',
	title: 'Julian Arambulo — Fullstack Dev / BI analyst',
};

export const about = {
	title: 'Sobre mí',
	body: `Desarrollo aplicaciones web y analizo datos para que los equipos decidan con información clara, no con suposiciones.`,
	highlights: [
		'Productos web simples de mantener y escalar.',
		'Dashboards y reportes útiles para negocio.',
		'Traduzco necesidades del cliente en soluciones técnicas concretas.',
	],
};

export const heroCta = {
	primary: { label: 'Sobre mí', href: '#sobre-mi' },
	secondary: { label: 'Descargar CV', href: '/cv.pdf' },
};

export const contact = {
	title: 'Contacto',
	intro: '¿Tenés un proyecto o buscás alguien con perfil técnico y visión de negocio? Escribime.',
	availability: 'Freelance · remoto o híbrido · Asunción',
};

export const technologies = [
	{ name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
	{ name: 'Power BI', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
	{ name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
	{ name: 'Cursor', icon: 'https://cdn.simpleicons.org/cursor/FFFFFF' },
	{ name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
	{ name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
	{
		name: 'Athena',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
	},
	{ name: 'Astro', icon: 'https://cdn.simpleicons.org/astro/FFFFFF' },
	{ name: 'TailwindCSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
	{ name: 'N8N', icon: 'https://cdn.simpleicons.org/n8n/FFFFFF' },
] as const;
