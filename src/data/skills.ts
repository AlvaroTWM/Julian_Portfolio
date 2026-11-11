export const skillsSection = {
	title: 'Habilidades y stack',
	subtitle: 'Lo que uso en el día a día, agrupado por área: web, datos y herramientas.',
};

export const skillCategories = [
	{
		title: 'Frontend & Backend',
		items: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Astro', 'TailwindCSS'],
	},
	{
		title: 'Data & Bases de Datos',
		items: ['SQL', 'PL/SQL', 'Power BI', 'Amazon QuickSight', 'Amazon Athena', 'Amazon Aurora'],
	},
	{
		title: 'DevOps & Herramientas',
		items: ['n8n', 'Git', 'Docker', 'Oracle APEX', 'Cursor', 'Postman'],
	},
] as const;
