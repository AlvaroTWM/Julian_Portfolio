import { images, site } from './site.ts';
import type { Content } from './types.ts';

export const en: Content = {
	lang: 'en',
	locale: 'en_US',
	path: '/',
	meta: {
		title: 'Julian Arámbulo · Data Engineer & Software Developer',
		description:
			'Julian Arámbulo is a data engineer and software developer in Asunción, Paraguay (UTC−3), working with SQL, Python, AWS and the web tools around the data. Open to remote roles.',
		ogAlt: 'Julian Arámbulo, Data Engineer & Software Developer',
	},
	ui: {
		skip: 'Skip to content',
		nav: { work: 'Work', experience: 'Experience', contact: 'Contact', cv: 'CV', mainLabel: 'Main' },
		switchLang: { label: 'Leer en español', href: '/es/', short: 'ES' },
		sections: {
			work: 'Selected work',
			caseCount: (n) => `${n} case studies`,
			experience: 'Experience',
			education: 'Education & certifications',
			stack: 'Stack',
			about: 'About',
			contact: 'Contact',
			alsoBuilt: 'Also built',
		},
		caseLabels: {
			problem: 'Problem',
			built: 'What I built',
			result: 'Result',
			architecture: 'Architecture',
			stack: 'Stack',
			inProgress: 'In progress',
			diagramLabel: (title) => `${title} architecture`,
		},
		languagesLabel: 'Languages',
		nowLabel: 'Now',
		downloadCv: 'Download CV',
		email: 'Email',
		replayIntro: 'Replay the intro',
		introLabel: 'Made by GoodFellas Corp',
		introMadeBy: 'MADE BY',
	},
	hero: {
		role: 'Data Engineer & Software Developer',
		location: 'Asunción, Paraguay',
		availability: 'Open to remote roles',
		lead: 'I build the pipelines behind the dashboards.',
		body: [
			'For three years I worked on the reporting side of banking and retail: the SQL, the scheduled jobs and the dashboards that teams open every morning. The part I enjoyed most was never the chart. It was getting the data there on time and correct, without anyone doing it by hand.',
			'That is the work I want to do full time. I use SQL, Python and AWS on the data side, and TypeScript, React and Node.js when the data needs an application around it.',
		],
		now: 'Data Analyst at Banco Itaú Paraguay, since November 2026.',
	},
	cvs: [
		{ label: 'CV · Data Engineering', href: site.cv.dataEngineer },
		{ label: 'CV · Software Development', href: site.cv.developer },
	],
	caseStudies: [
		{
			id: 'report-automation',
			title: 'Automated reporting for banking teams',
			kind: 'Data automation · at work (ITTI)',
			year: '2025–2026',
			summary: 'A reporting process that took about a month of manual work now runs with one click.',
			problem:
				'Operational and customer-service reports were assembled by hand: queries run one by one, results pasted into files and sent out manually. Each cycle took about a month and depended on whoever knew the steps.',
			built: [
				'SQL extracts over the AWS data sources (Aurora, plus S3 files queried with Athena).',
				'n8n workflows that run the extracts, shape the results with JavaScript and deliver the reports.',
				'Executive dashboards in Amazon QuickSight for KPIs, complaints and operational metrics.',
			],
			result: 'From about a month of manual work to a single click that anyone on the team can run.',
			stack: ['SQL', 'JavaScript', 'n8n', 'Amazon Athena', 'Amazon Aurora', 'Amazon S3', 'QuickSight'],
			flow: [
				{ label: 'Sources', items: ['Aurora', 'S3 + Athena'] },
				{ label: 'Extract', items: ['SQL queries'] },
				{ label: 'Orchestrate', items: ['n8n workflow', 'JS transforms'] },
				{ label: 'Deliver', items: ['Reports', 'QuickSight'] },
			],
			links: [],
			note: 'This is an internal system, so the code is not public. I am happy to walk through it in an interview.',
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
				'A React and TypeScript interface for imports, validations, and debt and payment tracking.',
				'A Node.js API on top of Amazon Aurora for transactional data.',
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
			image: { ...images.backoffice, alt: 'Loyalty HUB backoffice dashboard with partner cards' },
			status: 'live',
		},
		{
			id: 'talentlink',
			title: 'TalentLink',
			kind: 'Side project · live product',
			year: '2025',
			summary: 'A public talent directory where recruiters search profiles by area, skills and industry.',
			problem:
				'People looking for work in Paraguay had no simple, free place where recruiters could find them, and recruiters had no easy way to filter candidates by skill.',
			built: [
				'A SvelteKit app with Google sign-in where people publish their professional profile.',
				'Search and filters by area, skills and industry, backed by Supabase (PostgreSQL).',
				'Per-profile view metrics, so each person can see how often they are found.',
			],
			result: 'Live at talentlinkpy.app with real profiles, Google sign-in and view tracking.',
			stack: ['SvelteKit', 'Svelte 5', 'Supabase', 'PostgreSQL', 'Google OAuth', 'TailwindCSS', 'Vercel'],
			flow: [
				{ label: 'Client', items: ['SvelteKit'] },
				{ label: 'Auth', items: ['Google OAuth'] },
				{ label: 'Data', items: ['Supabase', 'PostgreSQL'] },
				{ label: 'Hosting', items: ['Vercel'] },
			],
			links: [{ label: 'Live site', href: 'https://www.talentlinkpy.app' }],
			image: { ...images.talentlink, alt: 'TalentLink home page with the profile search' },
			status: 'live',
		},
		{
			id: 'py-data-pipeline',
			title: 'Paraguay open data pipeline',
			kind: 'Data engineering · building in public',
			year: '2026',
			summary: 'An end-to-end pipeline on public Paraguayan data, from ingestion to a published dashboard.',
			problem:
				'Public data in Paraguay, such as exchange rates and open government datasets, is scattered across sites and formats and hard to analyze over time.',
			built: [
				'Scheduled ingestion from public sources into a raw layer.',
				'Orchestration with Dagster or Airflow, and transformations and tests with dbt.',
				'A DuckDB or PostgreSQL warehouse and a small public dashboard, all in Docker with CI.',
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
	],
	otherProjects: [
		{
			title: 'Malo Bank: Intervención Total',
			description:
				'Open-source 2D pixel-art fighting game in vanilla JavaScript and Canvas: 5 characters, local 2-player mode and gamepad support. Installable and playable offline.',
			stack: ['JavaScript', 'Canvas', 'PWA'],
			links: [
				{ label: 'Play', href: 'https://malobank.app' },
				{ label: 'Code', href: 'https://github.com/AlvaroTWM/Malobank' },
			],
		},
		{
			title: 'This site',
			description:
				'Static Astro site in English and Spanish, with no client framework, self-hosted fonts, automated tests and almost no JavaScript.',
			stack: ['Astro', 'CSS', 'Playwright'],
			links: [{ label: 'Code', href: 'https://github.com/AlvaroTWM/julian_portfolio' }],
		},
	],
	jobs: [
		{
			role: 'Data Analyst',
			org: 'Banco Itaú Paraguay',
			period: 'Nov 2026 – now',
			points: ['Data team, hybrid. Python and Power BI.'],
		},
		{
			role: 'BI Analyst',
			org: 'ITTI S.A.E.',
			period: 'Apr 2025 – Nov 2026',
			points: [
				'Automated report generation and distribution with SQL, JavaScript and n8n, turning a month of manual work into one click.',
				'Built integrations between databases and services to reduce manual operational work.',
				'Designed QuickSight dashboards for KPIs, complaints and operational metrics for banking and customer service teams.',
				'Built internal React tools on top of APIs and several data sources.',
			],
		},
		{
			role: 'Support Analyst, IT Infrastructure & Operations',
			org: 'ITTI S.A.E.',
			period: 'May 2024 – Apr 2025',
			points: ['Second-level support for business applications, service documentation and n8n automations.'],
		},
		{
			role: 'Logical Access Analyst',
			org: 'AJ Vierci',
			period: 'Apr 2023 – Apr 2024',
			points: ['Managed access to internal and external systems under the company’s security policies.'],
		},
	],
	education: [
		{ title: 'B.S. in Systems Analysis', org: 'Universidad Americana', period: '2025 – in progress' },
		{ title: 'PL-300: Power BI Data Analyst', org: 'Microsoft', period: '2024' },
		{ title: 'Full Stack Open', org: 'University of Helsinki', period: '2023' },
		{ title: 'Oracle APEX & SQL', org: 'Oracle', period: '' },
	],
	stack: [
		{ group: 'Data', items: ['SQL', 'PL/SQL', 'Python', 'PostgreSQL', 'SQL Server', 'Oracle'] },
		{ group: 'Cloud', items: ['Amazon Athena', 'Amazon Aurora', 'Amazon S3', 'QuickSight'] },
		{ group: 'Automation', items: ['n8n', 'REST APIs', 'Scheduled jobs', 'Docker'] },
		{ group: 'Web', items: ['TypeScript', 'JavaScript', 'React', 'Node.js', 'SvelteKit', 'Astro'] },
		{ group: 'Tools', items: ['Git', 'GitHub', 'Postman', 'Power BI', 'Vercel', 'Supabase'] },
		{ group: 'Learning now', items: ['dbt', 'Dagster', 'DuckDB', 'Airflow'] },
	],
	about: {
		paragraphs: [
			'I started in IT managing system access, moved to infrastructure support and then to BI. That is where I learned that most reporting problems are really data problems: a source nobody owns, a join that silently drops rows, a manual export someone runs every Monday.',
			'I prefer simple systems that keep working: small steps, version control and processes that someone else can run without asking me. Outside work I build side projects to learn things properly, from a talent directory to a fighting game in plain JavaScript.',
		],
		languages: [
			{ name: 'Spanish', level: 'native' },
			{ name: 'Portuguese', level: 'C1' },
			{ name: 'English', level: 'B1, studying toward B2' },
		],
	},
	contact: {
		pitch: 'I am looking for a remote role as a data engineer or software developer. If you think I could help your team, write to me.',
		cvLabel: (label) => label.replace('CV · ', 'CV, '),
	},
};
