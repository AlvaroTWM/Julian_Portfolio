export type Job = {
	role: string;
	org: string;
	period: string;
	points: string[];
};

export const jobs: Job[] = [
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
			'Automated report generation and distribution with SQL, JavaScript and n8n: one month of manual work down to one click.',
			'Built integrations between databases and services to reduce manual operational work.',
			'Designed QuickSight dashboards for KPIs, complaints and operational metrics for banking and customer service.',
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
];

export const education = [
	{ title: 'B.S. in Systems Analysis', org: 'Universidad Americana', period: '2025 – in progress' },
	{ title: 'PL-300: Power BI Data Analyst', org: 'Microsoft', period: '2024' },
	{ title: 'Full Stack Open', org: 'University of Helsinki', period: '2023' },
	{ title: 'Oracle APEX & SQL', org: 'Oracle', period: '' },
];
