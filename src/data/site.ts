export const site = {
	name: 'Julian Arambulo',
	location: 'Asunción',
	roles: 'BI Analyst & Full Stack Dev',
	tagline: 'Transforma ideas en código y datos en valor.',
	githubUrl: 'https://github.com/AlvaroTWM',
	linkedinUrl: 'https://www.linkedin.com/in/alvaro-arambulo',
	email: 'mailto:alvaroarambulo@gmail.com',
	emailDisplay: 'alvaroarambulo@gmail.com',
	cvUrl: '/julian-arambulo-cv.pdf',
	title: 'Julian Arambulo — BI Analyst & Full Stack Developer',
};

export const about = {
	title: 'Sobre mí',
	body: `BI Analyst & Developer con 3 años de experiencia en los sectores bancario y retail. Me especializo en soluciones de inteligencia de negocio, automatización de procesos y aplicaciones orientadas al negocio, para que los equipos decidan con información clara y no con suposiciones.`,
	highlights: [
		'Dashboards ejecutivos en QuickSight y Power BI para KPIs, reclamos y métricas operativas.',
		'Automatizaciones con SQL, JavaScript y n8n: un proceso manual de 1 mes pasó a un solo clic.',
		'Herramientas internas en React que integran APIs y múltiples fuentes de datos.',
	],
	languages: 'Español nativo · Portugués C1 · Inglés B1',
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
	{ name: 'JavaScript', icon: '/icons/stack/javascript.svg' },
	{ name: 'Power BI', icon: '/icons/stack/powerbi.svg' },
	{ name: 'TypeScript', icon: '/icons/stack/typescript.svg' },
	{ name: 'Docker', icon: '/icons/stack/docker.svg' },
	{ name: 'Node.js', icon: '/icons/stack/nodedotjs.svg' },
	{ name: 'Athena', icon: '/icons/stack/aws.svg' },
	{ name: 'Astro', icon: '/icons/stack/astro.svg' },
	{ name: 'TailwindCSS', icon: '/icons/stack/tailwindcss.svg' },
	{ name: 'N8N', icon: '/icons/stack/n8n.svg' },
	{ name: 'Git', icon: '/icons/stack/git.svg' },
] as const;
