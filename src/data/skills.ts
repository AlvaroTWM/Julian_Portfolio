export const skillsSection = {
	title: 'Habilidades y stack',
	subtitle: 'Lo que uso en el día a día, agrupado por área: web, datos y herramientas.',
};

export const skillCategories = [
	{
		title: 'Frontend & Backend',
		items: ['React', 'TypeScript', 'Node.js', 'Astro', 'TailwindCSS',],
	},
	{
		title: 'Data & Bases de Datos',
		items: ['Power BI', 'PL/SQL', 'Amazon Athena', 'Amazon Aurora', 'Amazon Quicksight'],
	},
	{
		title: 'DevOps & Herramientas',
		items: ['Docker', 'Git', 'Cursor', 'N8N', 'Postman',],
	},
] as const;
