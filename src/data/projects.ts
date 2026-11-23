// Case studies shown in the "Selected work" section.
// Each one follows the same shape: problem, what was built, stack, result, links,
// and a small architecture flow (stages from left to right).

export type FlowStage = {
	label: string;
	items: string[];
};

export type CaseStudy = {
	id: string;
	title: string;
	kind: string;
	year: string;
	summary: string;
	problem: string;
	built: string[];
	result: string;
	stack: string[];
	flow: FlowStage[];
	links: { label: string; href: string }[];
	note?: string;
	image?: { src: string; alt: string; width: number; height: number };
	status?: 'live' | 'in-progress';
};

export const caseStudies: CaseStudy[] = [
	{
		id: 'report-automation',
		title: 'Automated reporting for banking teams',
		kind: 'Data automation · at work (ITTI)',
		year: '2025–2026',
		summary: 'A monthly reporting process that took a month of manual work now runs with one click.',
		problem:
			'Operational and customer-service reports were assembled by hand: queries run one by one, results pasted into files and sent out manually. It took about a month per cycle and depended on whoever knew the steps.',
		built: [
			'SQL extracts over the AWS data sources (Aurora, and S3 files queried with Athena).',
			'n8n workflows that run the extracts, shape the results with JavaScript and deliver the reports.',
			'Executive dashboards in Amazon QuickSight for KPIs, complaints and operational metrics.',
		],
		result: 'From roughly one month of manual work to a single click, repeatable by anyone on the team.',
		stack: ['SQL', 'JavaScript', 'n8n', 'Amazon Athena', 'Amazon Aurora', 'Amazon S3', 'QuickSight'],
		flow: [
			{ label: 'Sources', items: ['Aurora', 'S3 + Athena'] },
			{ label: 'Extract', items: ['SQL queries'] },
			{ label: 'Orchestrate', items: ['n8n workflow', 'JS transforms'] },
			{ label: 'Deliver', items: ['Reports', 'QuickSight'] },
		],
		links: [],
		note: 'Internal system, so there is no public code. Happy to walk through it in an interview.',
	},
	{
		id: 'loyalty-backoffice',
		title: 'Loyalty HUB backoffice',
		kind: 'Full-stack application · in production',
		year: '2025',
		summary: 'One panel for a loyalty program’s partnerships team: imports, validations, debts and payments.',
		problem:
			'The partnerships team tracked partner data, validations and payments across spreadsheets and separate tools, with no single place to see what was pending.',
		built: [
			'A React and TypeScript interface for imports, validations and debt and payment tracking.',
			'A Node.js API over Amazon Aurora for transactional data.',
			'File imports stored in S3 and queried with Athena for history and reporting.',
		],
		result: 'In production inside the company. The public version runs as a demo with mock data.',
		stack: ['React', 'TypeScript', 'Node.js', 'TailwindCSS', 'Amazon Aurora', 'Amazon Athena', 'Amazon S3'],
		flow: [
			{ label: 'Client', items: ['React + TS'] },
			{ label: 'API', items: ['Node.js'] },
			{ label: 'Storage', items: ['Aurora', 'S3'] },
			{ label: 'Query', items: ['Athena'] },
		],
		links: [
			{ label: 'Live demo', href: 'https://backoffice-portafolio.vercel.app/' },
			{ label: 'Code', href: 'https://github.com/AlvaroTWM/Backoffice-Portfolio' },
		],
		image: { src: '/projects/backoffice.jpg', alt: 'Loyalty HUB backoffice dashboard with partner cards', width: 1200, height: 759 },
		status: 'live',
	},
	{
		id: 'talentlink',
		title: 'TalentLink',
		kind: 'Side project · live product',
		year: '2025',
		summary: 'A public talent directory where recruiters search profiles by area, skills and industry.',
		problem:
			'People looking for work in Paraguay had no simple, free place to be found by recruiters, and recruiters had no way to filter candidates by skill.',
		built: [
			'A SvelteKit app with Google sign-in, where people publish their professional profile.',
			'Search and filters by area, skills and industry, backed by Supabase (PostgreSQL).',
			'Per-profile view metrics so each person sees how often they are found.',
		],
		result: 'Live at talentlinkpy.app with real profiles, Google sign-in and view tracking.',
		stack: ['SvelteKit', 'Svelte 5', 'Supabase', 'PostgreSQL', 'Google OAuth', 'TailwindCSS', 'Vercel'],
		flow: [
			{ label: 'Client', items: ['SvelteKit'] },
			{ label: 'Auth', items: ['Google OAuth'] },
			{ label: 'Data', items: ['Supabase', 'PostgreSQL'] },
			{ label: 'Host', items: ['Vercel'] },
		],
		links: [{ label: 'Live site', href: 'https://www.talentlinkpy.app' }],
		image: { src: '/projects/talentlink.jpg', alt: 'TalentLink home page with the profile search', width: 1200, height: 630 },
		status: 'live',
	},
	{
		id: 'py-data-pipeline',
		title: 'Paraguay open data pipeline',
		kind: 'Data engineering · building in public',
		year: '2026',
		summary: 'An end-to-end pipeline on public Paraguayan data, from ingestion to a published dashboard.',
		problem:
			'Public data in Paraguay (exchange rates, open government datasets) is scattered across sites and formats, and hard to analyze over time.',
		built: [
			'Scheduled ingestion from public sources into a raw layer.',
			'Orchestration with Dagster or Airflow, transformations and tests with dbt.',
			'A warehouse in DuckDB or PostgreSQL and a small public dashboard, all in Docker with CI.',
		],
		result: 'In progress. The repository will be public from the first commit.',
		stack: ['Python', 'dbt', 'Dagster', 'DuckDB', 'Docker', 'GitHub Actions'],
		flow: [
			{ label: 'Ingest', items: ['Python'] },
			{ label: 'Orchestrate', items: ['Dagster'] },
			{ label: 'Transform', items: ['dbt + tests'] },
			{ label: 'Serve', items: ['DuckDB', 'Dashboard'] },
		],
		links: [],
		status: 'in-progress',
	},
];

// Smaller projects listed under the case studies.
export const otherProjects = [
	{
		title: 'Malo Bank: Intervención Total',
		description:
			'Open-source 2D pixel-art fighting game in vanilla JavaScript and Canvas: 5 characters, local 2-player mode, gamepad support, installable and playable offline.',
		stack: ['JavaScript', 'Canvas', 'PWA'],
		links: [
			{ label: 'Play', href: 'https://malobank.app' },
			{ label: 'Code', href: 'https://github.com/AlvaroTWM/Malobank' },
		],
	},
	{
		title: 'This site',
		description: 'Static Astro site with no client framework, self-hosted fonts and almost no JavaScript.',
		stack: ['Astro', 'CSS'],
		links: [{ label: 'Code', href: 'https://github.com/AlvaroTWM/julian_portfolio' }],
	},
];
