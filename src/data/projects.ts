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
	image?: string;
	profileImage?: string;
	icon?: string;
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
		title: 'Loyalty BI Backoffice',
		problem: 'En producción, este proyecto permite a los clientes de un programa de fidelización gestionar sus campañas y analizar su performance.',
		technologies: ['React', 'TypeScript', 'Node.js', 'TailwindCSS', 'Nullplatform', 'Amazon Aurora', 'Amazon Athena', 'Amazon S3'],
		impact: 'Productivo',
		featured: true,
		href: 'https://backoffice-portafolio.vercel.app/',
		image: '/projects/loyalty-hub.jpg',
		profileImage: '/projects/loyalty-hub-profile.png',
		icon: '/icons/money-bag.png',
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
