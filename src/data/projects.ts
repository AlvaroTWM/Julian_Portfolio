export const projectsSection = {
	titleLine1: 'Todo lo que pienses,',
	titleLine2: 'Lo podemos crear.',
	subtitle: 'Proyectos reales, publicados y funcionando: contexto, stack y resultado.',
	standIn: false,
};

export type ProjectTag = 'Full Stack' | 'Dashboard' | 'Juego';

export type Project = {
	id: string;
	tags: ProjectTag[];
	title: string;
	problem: string;
	technologies: string[];
	impact: string;
	href?: string;
	repoUrl?: string;
	image?: string;
	profileImage?: string;
	icon?: string;
	featured?: boolean;
};

export const projectFilters: { id: 'all' | ProjectTag; label: string }[] = [
	{ id: 'all', label: 'Todos' },
	{ id: 'Full Stack', label: 'Full Stack' },
	{ id: 'Dashboard', label: 'Dashboard' },
	{ id: 'Juego', label: 'Juego' },
];

export const projects: Project[] = [
	{
		id: 'loyalty-backoffice',
		tags: ['Full Stack', 'Dashboard'],
		title: 'Loyalty HUB · Backoffice',
		problem:
			'Backoffice para el equipo de Alianzas de un programa de fidelización: validaciones, seguimiento de deudas y pagos, e importaciones en un solo panel. Esta es una demo pública con datos ficticios.',
		technologies: ['React', 'TypeScript', 'Node.js', 'TailwindCSS', 'Amazon Aurora', 'Amazon Athena', 'Amazon S3'],
		impact: 'En producción dentro de la empresa. Esta versión pública corre en modo demo, sin datos reales.',
		featured: true,
		href: 'https://backoffice-portafolio.vercel.app/',
		repoUrl: 'https://github.com/AlvaroTWM/Backoffice-Portfolio',
		image: '/projects/backoffice.jpg',
	},
	{
		id: 'talentlink',
		tags: ['Full Stack'],
		title: 'TalentLink',
		problem:
			'Directorio solidario de talento: las personas cargan su perfil profesional y los reclutadores las encuentran por área, habilidades y rubro, con contacto directo por LinkedIn.',
		technologies: ['SvelteKit', 'Svelte 5', 'TailwindCSS', 'Supabase', 'Google OAuth', 'Vercel'],
		impact: 'Publicado en talentlinkpy.app, con perfiles reales, ingreso con Google y métricas de visitas por perfil.',
		href: 'https://www.talentlinkpy.app',
		image: '/projects/talentlink.jpg',
	},
	{
		id: 'malobank',
		tags: ['Juego'],
		title: 'Malo Bank: Intervención Total',
		problem:
			'Juego de peleas arcade 2D en pixel art, de humor y código abierto: 5 personajes, 4 escenarios de Asunción, modo 2 jugadores y soporte para mandos.',
		technologies: ['JavaScript', 'Canvas', 'HTML/CSS', 'PWA', 'Vercel Analytics'],
		impact: 'Jugable en malobank.app, instalable como app y funciona sin internet.',
		href: 'https://malobank.app',
		repoUrl: 'https://github.com/AlvaroTWM/Malobank',
		image: '/projects/malobank.jpg',
	},
];
