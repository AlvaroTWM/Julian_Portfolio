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
		period: '2025-03 — Presente',
		title: 'BI Analyst',
		organization: 'ITTI S.A.E.',
		description:
			'Diseño e implemento soluciones de BI para banca y atención al cliente: dashboards ejecutivos en QuickSight para KPIs, reclamos y métricas operativas. Automaticé la generación y distribución de reportes con SQL, JavaScript y n8n, llevando un proceso manual de 1 mes a un solo clic. Construyo herramientas internas en React que integran APIs y múltiples fuentes de datos, con Git para el control de versiones.',
	},
	{
		period: '2024-04 — 2025-03',
		title: 'Help Desk',
		organization: 'ITTI S.A.E.',
		description:
			'Soporte técnico de segundo nivel para aplicaciones y servicios del negocio. Documentación de servicios técnicos y trabajo con equipos de infraestructura en la resolución de problemas complejos. Automatización de procesos con n8n.',
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
		title: 'Licenciatura en Análisis de Sistemas',
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
	{
		period: 'Certificación',
		title: 'Oracle APEX y SQL',
		organization: 'Oracle',
		description: 'Desarrollo de aplicaciones low-code sobre Oracle Database y consultas SQL.',
	},
];

export const experienceGroups = [
	{ label: 'Experiencia profesional', items: workExperience },
	{ label: 'Formación', items: education },
	{ label: 'Certificaciones', items: certifications },
] as const;
