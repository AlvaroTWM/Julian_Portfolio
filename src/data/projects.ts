export const projectsSection = {
	titleLine1: 'Todo lo que pienses,',
	titleLine2: 'Lo podemos crear.',
	subtitle: 'Casos reales con contexto, stack e impacto. (Sección en preparación.)',
	standIn: true,
};

export type ProjectTag = 'Full Stack' | 'Data Analysis' | 'Dashboard';

export type Project = {
	id: string;
	tags: ProjectTag[];
	title: string;
	problem: string;
	technologies: string[];
	impact: string;
	href?: string;
	featured?: boolean;
};

export const projectFilters: { id: 'all' | ProjectTag; label: string }[] = [
	{ id: 'all', label: 'Todos' },
	{ id: 'Full Stack', label: 'Full Stack' },
	{ id: 'Data Analysis', label: 'Data Analysis' },
	{ id: 'Dashboard', label: 'Dashboard' },
];

export const projects: Project[] = [
	{
		id: 'stand-in-1',
		tags: ['Full Stack'],
		title: 'Proyecto web 1',
		problem: 'Pendiente',
		technologies: ['—'],
		impact: 'Pendiente',
		featured: true,
	},
	{
		id: 'stand-in-2',
		tags: ['Full Stack'],
		title: 'Proyecto web 2',
		problem: 'Pendiente',
		technologies: ['—'],
		impact: 'Pendiente',
	},
	{
		id: 'stand-in-3',
		tags: ['Dashboard'],
		title: 'Dashboard de ejemplo',
		problem: 'Pendiente',
		technologies: ['—'],
		impact: 'Pendiente',
	},
];
