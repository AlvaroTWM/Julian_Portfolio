export type TimelineItem = {
	period: string;
	title: string;
	organization: string;
	description: string;
};

export const experienceSection = {
	title: 'Experiencia y formación',
	subtitle: 'Trabajo, estudios y certificaciones en orden cronológico.',
};

export const workExperience: TimelineItem[] = [
	{
		period: '2025-04 — Presente',
		title: 'JR. BI Analyst',
		organization: 'ITTI DIGITAL',
		description:
			'Desarrollo de soluciones para el departamento de loyalty utilizando metodologías ágiles: aplicaciones web y dashboards.',
	},
	{
		period: '2024-04 — 2025-04',
		title: 'Help desk and Automation Analyst',
		organization: 'ITTI DIGITAL',
		description:
			'Automatización de procesos internos y externos con N8N, chatbots y Active Directory para optimizar tiempos y soporte.',
	},
	{
		period: '2023-04 — 2024-04',
		title: 'Analista de accesos lógicos',
		organization: 'AJ VIERCI',
		description:
			'Creación y gestión de accesos a sistemas internos y externos según políticas de seguridad de la empresa.',
	},
];

export const education: TimelineItem[] = [
	{
		period: '2025 — En curso',
		title: 'Licenciatura en análisis de sistemas',
		organization: 'Universidad Americana',
		description:
			'Diseño y optimización de sistemas de información mediante relevamiento y análisis de procesos organizacionales.',
	},
];

export const certifications: TimelineItem[] = [
	{
		period: '2023',
		title: 'Full Stack Open',
		organization: 'University of Helsinki',
		description:
			'Curso intensivo de desarrollo web con JavaScript, React, Node.js y TypeScript, de fundamentos a aplicaciones escalables.',
	},
	{
		period: '2024',
		title: 'PL-300 Microsoft Power BI Data Analyst',
		organization: 'Microsoft',
		description: 'Certificación oficial de analista de datos con Power BI.',
	},
];

export const experienceGroups = [
	{ label: 'Experiencia profesional', items: workExperience },
	{ label: 'Formación', items: education },
	{ label: 'Certificaciones', items: certifications },
] as const;
