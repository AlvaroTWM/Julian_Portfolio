export const site = {
	name: 'Julian Arambulo',
	location: 'Asunción',
	roles: 'Fullstack Dev / BI analyst',
	tagline: 'Transforma ideas en código y datos en valor.',
	githubUrl: 'https://github.com/AlvaroTWM',
	linkedinUrl: 'https://www.linkedin.com/in/alvaro-arambulo',
	email: 'mailto:alvaroarambulo@gmail.com',
	emailDisplay: 'alvaroarambulo@gmail.com',
	cvUrl: '/julian-arambulo-cv.pdf',
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
	secondary: { label: 'Descargar CV', href: '/julian-arambulo-cv.pdf' },
};

export const contact = {
	title: 'Contacto',
	intro: '¿Tenés un proyecto o buscás alguien con perfil técnico y visión de negocio? Escribime.',
	availability: 'Freelance · remoto o híbrido · Asunción',
};

export const technologies = [
	{ name: 'React', icon: '/icons/stack/react.svg' },
	{ name: 'Power BI', icon: '/icons/stack/powerbi.svg' },
	{ name: 'TypeScript', icon: '/icons/stack/typescript.svg' },
	{ name: 'Cursor', icon: '/icons/stack/cursor.svg' },
	{ name: 'Docker', icon: '/icons/stack/docker.svg' },
	{ name: 'Node.js', icon: '/icons/stack/nodedotjs.svg' },
	{ name: 'Athena', icon: '/icons/stack/aws.svg' },
	{ name: 'Astro', icon: '/icons/stack/astro.svg' },
	{ name: 'TailwindCSS', icon: '/icons/stack/tailwindcss.svg' },
	{ name: 'N8N', icon: '/icons/stack/n8n.svg' },
] as const;
