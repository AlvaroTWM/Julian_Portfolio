import { images, site } from './site.ts';
import type { Content } from './types.ts';

export const es: Content = {
	lang: 'es',
	locale: 'es_PY',
	path: '/es/',
	meta: {
		title: 'Julian Arámbulo · Data Engineer y desarrollador de software',
		description:
			'Julian Arámbulo es data engineer y desarrollador de software en Asunción, Paraguay (UTC−3). Trabaja con SQL, Python, AWS y las herramientas web alrededor de los datos. Disponible para trabajo remoto.',
		ogAlt: 'Julian Arámbulo, Data Engineer y desarrollador de software',
	},
	ui: {
		skip: 'Ir al contenido',
		nav: { work: 'Proyectos', experience: 'Experiencia', contact: 'Contacto', cv: 'CV', mainLabel: 'Principal' },
		switchLang: { label: 'Read in English', href: '/', short: 'EN' },
		sections: {
			work: 'Proyectos destacados',
			caseCount: (n) => `${n} casos`,
			experience: 'Experiencia',
			education: 'Formación y certificaciones',
			stack: 'Stack',
			about: 'Sobre mí',
			contact: 'Contacto',
			alsoBuilt: 'Otros proyectos',
		},
		caseLabels: {
			problem: 'Problema',
			built: 'Qué construí',
			result: 'Resultado',
			architecture: 'Arquitectura',
			stack: 'Stack',
			inProgress: 'En curso',
			diagramLabel: (title) => `Arquitectura de ${title}`,
		},
		languagesLabel: 'Idiomas',
		nowLabel: 'Hoy',
		downloadCv: 'Descargar CV',
		email: 'Correo',
		replayIntro: 'Repetir la intro',
		introLabel: 'Creado por GoodFellas Corp',
		introMadeBy: 'CREADO POR',
	},
	hero: {
		role: 'Data Engineer y desarrollador de software',
		location: 'Asunción, Paraguay',
		availability: 'Disponible para trabajo remoto',
		lead: 'Construyo los pipelines que hay detrás de los dashboards.',
		body: [
			'Durante tres años trabajé del lado de los reportes en banca y retail: el SQL, los procesos programados y los dashboards que los equipos abren cada mañana. Lo que más disfrutaba no era el gráfico, sino lograr que los datos llegaran a tiempo y correctos, sin que nadie tuviera que hacerlo a mano.',
			'Ese es el trabajo al que me quiero dedicar de lleno. Uso SQL, Python y AWS del lado de los datos, y TypeScript, React y Node.js cuando los datos necesitan una aplicación alrededor.',
		],
		now: 'Data Analyst en Banco Itaú Paraguay desde noviembre de 2026.',
	},
	cvs: [
		{ label: 'CV · Data Engineering (en inglés)', href: site.cv.dataEngineer },
		{ label: 'CV · Desarrollo de software (en inglés)', href: site.cv.developer },
	],
	caseStudies: [
		{
			id: 'report-automation',
			title: 'Reportes automatizados para equipos de banca',
			kind: 'Automatización de datos · en el trabajo (ITTI)',
			year: '2025–2026',
			summary: 'Un proceso de reportes que llevaba cerca de un mes de trabajo manual ahora se ejecuta con un clic.',
			problem:
				'Los reportes operativos y de atención al cliente se armaban a mano: consultas ejecutadas una por una, resultados copiados en archivos y enviados manualmente. Cada ciclo llevaba cerca de un mes y dependía de quien conociera los pasos.',
			built: [
				'Extracciones en SQL sobre las fuentes de datos en AWS (Aurora y archivos en S3 consultados con Athena).',
				'Flujos en n8n que ejecutan las extracciones, procesan los resultados con JavaScript y entregan los reportes.',
				'Dashboards ejecutivos en Amazon QuickSight para KPIs, reclamos y métricas operativas.',
			],
			result: 'De cerca de un mes de trabajo manual a un solo clic que cualquier persona del equipo puede ejecutar.',
			stack: ['SQL', 'JavaScript', 'n8n', 'Amazon Athena', 'Amazon Aurora', 'Amazon S3', 'QuickSight'],
			flow: [
				{ label: 'Fuentes', items: ['Aurora', 'S3 + Athena'] },
				{ label: 'Extracción', items: ['Consultas SQL'] },
				{ label: 'Orquestación', items: ['Flujo en n8n', 'Transformaciones JS'] },
				{ label: 'Entrega', items: ['Reportes', 'QuickSight'] },
			],
			links: [],
			note: 'Es un sistema interno, así que el código no es público. Con gusto lo explico en una entrevista.',
		},
		{
			id: 'loyalty-backoffice',
			title: 'Backoffice de Loyalty HUB',
			kind: 'Aplicación full stack · en producción',
			year: '2025',
			summary:
				'Un solo panel para el equipo de alianzas de un programa de fidelización: importaciones, validaciones, deudas y pagos.',
			problem:
				'El equipo de alianzas seguía los datos de los aliados, las validaciones y los pagos en planillas y herramientas separadas, sin un lugar único para ver qué estaba pendiente.',
			built: [
				'Una interfaz en React y TypeScript para importaciones, validaciones y seguimiento de deudas y pagos.',
				'Una API en Node.js sobre Amazon Aurora para los datos transaccionales.',
				'Importaciones de archivos guardadas en S3 y consultadas con Athena para historial y reportes.',
			],
			result: 'En producción dentro de la empresa. La versión pública funciona como demo con datos ficticios.',
			stack: ['React', 'TypeScript', 'Node.js', 'TailwindCSS', 'Amazon Aurora', 'Amazon Athena', 'Amazon S3'],
			flow: [
				{ label: 'Cliente', items: ['React + TS'] },
				{ label: 'API', items: ['Node.js'] },
				{ label: 'Almacenamiento', items: ['Aurora', 'S3'] },
				{ label: 'Consulta', items: ['Athena'] },
			],
			links: [
				{ label: 'Demo en vivo', href: 'https://backoffice-portafolio.vercel.app/' },
				{ label: 'Código', href: 'https://github.com/AlvaroTWM/Backoffice-Portfolio' },
			],
			image: { ...images.backoffice, alt: 'Dashboard del backoffice de Loyalty HUB con tarjetas de aliados' },
			status: 'live',
		},
		{
			id: 'talentlink',
			title: 'TalentLink',
			kind: 'Proyecto personal · producto publicado',
			year: '2025',
			summary: 'Un directorio público de talento donde los reclutadores buscan perfiles por área, habilidades y rubro.',
			problem:
				'Las personas que buscaban trabajo en Paraguay no tenían un lugar simple y gratuito donde los reclutadores pudieran encontrarlas, y los reclutadores no tenían una forma fácil de filtrar candidatos por habilidad.',
			built: [
				'Una aplicación en SvelteKit con ingreso con Google donde cada persona publica su perfil profesional.',
				'Búsqueda y filtros por área, habilidades y rubro, sobre Supabase (PostgreSQL).',
				'Métricas de visitas por perfil, para que cada persona vea cuántas veces la encuentran.',
			],
			result: 'Publicado en talentlinkpy.app con perfiles reales, ingreso con Google y seguimiento de visitas.',
			stack: ['SvelteKit', 'Svelte 5', 'Supabase', 'PostgreSQL', 'Google OAuth', 'TailwindCSS', 'Vercel'],
			flow: [
				{ label: 'Cliente', items: ['SvelteKit'] },
				{ label: 'Autenticación', items: ['Google OAuth'] },
				{ label: 'Datos', items: ['Supabase', 'PostgreSQL'] },
				{ label: 'Hosting', items: ['Vercel'] },
			],
			links: [{ label: 'Sitio en vivo', href: 'https://www.talentlinkpy.app' }],
			image: { ...images.talentlink, alt: 'Página de inicio de TalentLink con el buscador de perfiles' },
			status: 'live',
		},
		{
			id: 'py-data-pipeline',
			title: 'Pipeline de datos abiertos de Paraguay',
			kind: 'Ingeniería de datos · desarrollo en público',
			year: '2026',
			summary: 'Un pipeline de punta a punta con datos públicos de Paraguay, desde la ingesta hasta un dashboard publicado.',
			problem:
				'Los datos públicos de Paraguay, como las cotizaciones y los datos abiertos del gobierno, están dispersos en distintos sitios y formatos, y es difícil analizarlos en el tiempo.',
			built: [
				'Ingesta programada desde fuentes públicas hacia una capa de datos crudos.',
				'Orquestación con Dagster o Airflow, y transformaciones y tests con dbt.',
				'Un warehouse en DuckDB o PostgreSQL y un dashboard público, todo en Docker con CI.',
			],
			result: 'En curso. El repositorio va a ser público desde el primer commit.',
			stack: ['Python', 'dbt', 'Dagster', 'DuckDB', 'Docker', 'GitHub Actions'],
			flow: [
				{ label: 'Ingesta', items: ['Python'] },
				{ label: 'Orquestación', items: ['Dagster'] },
				{ label: 'Transformación', items: ['dbt + tests'] },
				{ label: 'Consumo', items: ['DuckDB', 'Dashboard'] },
			],
			links: [],
			status: 'in-progress',
		},
	],
	otherProjects: [
		{
			title: 'Malo Bank: Intervención Total',
			description:
				'Juego de peleas 2D en pixel art y de código abierto, hecho con JavaScript puro y Canvas: 5 personajes, modo para 2 jugadores y soporte para mandos. Se instala como app y funciona sin internet.',
			stack: ['JavaScript', 'Canvas', 'PWA'],
			links: [
				{ label: 'Jugar', href: 'https://malobank.app' },
				{ label: 'Código', href: 'https://github.com/AlvaroTWM/Malobank' },
			],
		},
		{
			title: 'Este sitio',
			description:
				'Sitio estático en Astro, en inglés y español, sin framework en el cliente, con fuentes propias, tests automáticos y casi nada de JavaScript.',
			stack: ['Astro', 'CSS', 'Playwright'],
			links: [{ label: 'Código', href: 'https://github.com/AlvaroTWM/julian_portfolio' }],
		},
	],
	jobs: [
		{
			role: 'Data Analyst',
			org: 'Banco Itaú Paraguay',
			period: 'nov. 2026 – hoy',
			points: ['Equipo de datos, modalidad híbrida. Python y Power BI.'],
		},
		{
			role: 'BI Analyst',
			org: 'ITTI S.A.E.',
			period: 'abr. 2025 – nov. 2026',
			points: [
				'Automaticé la generación y distribución de reportes con SQL, JavaScript y n8n: un mes de trabajo manual pasó a un solo clic.',
				'Desarrollé integraciones entre bases de datos y servicios para reducir el trabajo operativo manual.',
				'Diseñé dashboards en QuickSight con KPIs, reclamos y métricas operativas para los equipos de banca y atención al cliente.',
				'Construí herramientas internas en React que integran APIs y varias fuentes de datos.',
			],
		},
		{
			role: 'Analista de soporte, Infraestructura y Operaciones TI',
			org: 'ITTI S.A.E.',
			period: 'may. 2024 – abr. 2025',
			points: ['Soporte de segundo nivel para aplicaciones del negocio, documentación de servicios y automatizaciones con n8n.'],
		},
		{
			role: 'Analista de accesos lógicos',
			org: 'AJ Vierci',
			period: 'abr. 2023 – abr. 2024',
			points: ['Gestión de accesos a sistemas internos y externos según las políticas de seguridad de la empresa.'],
		},
	],
	education: [
		{ title: 'Licenciatura en Análisis de Sistemas', org: 'Universidad Americana', period: '2025 – en curso' },
		{ title: 'PL-300: Power BI Data Analyst', org: 'Microsoft', period: '2024' },
		{ title: 'Full Stack Open', org: 'Universidad de Helsinki', period: '2023' },
		{ title: 'Oracle APEX y SQL', org: 'Oracle', period: '' },
	],
	stack: [
		{ group: 'Datos', items: ['SQL', 'PL/SQL', 'Python', 'PostgreSQL', 'SQL Server', 'Oracle'] },
		{ group: 'Nube', items: ['Amazon Athena', 'Amazon Aurora', 'Amazon S3', 'QuickSight'] },
		{ group: 'Automatización', items: ['n8n', 'APIs REST', 'Procesos programados', 'Docker'] },
		{ group: 'Web', items: ['TypeScript', 'JavaScript', 'React', 'Node.js', 'SvelteKit', 'Astro'] },
		{ group: 'Herramientas', items: ['Git', 'GitHub', 'Postman', 'Power BI', 'Vercel', 'Supabase'] },
		{ group: 'Aprendiendo', items: ['dbt', 'Dagster', 'DuckDB', 'Airflow'] },
	],
	about: {
		paragraphs: [
			'Empecé en TI gestionando accesos a sistemas, pasé a soporte de infraestructura y después a BI. Ahí aprendí que la mayoría de los problemas de reportes son, en realidad, problemas de datos: una fuente que no tiene dueño, un join que pierde filas sin avisar, una exportación manual que alguien hace todos los lunes.',
			'Prefiero los sistemas simples que siguen funcionando: pasos pequeños, control de versiones y procesos que otra persona pueda ejecutar sin tener que preguntarme. Fuera del trabajo hago proyectos personales para aprender bien las cosas, desde un directorio de talento hasta un juego de peleas en JavaScript puro.',
		],
		languages: [
			{ name: 'Español', level: 'nativo' },
			{ name: 'Portugués', level: 'C1' },
			{ name: 'Inglés', level: 'B1, estudiando para B2' },
		],
	},
	contact: {
		pitch: 'Busco un puesto remoto como data engineer o desarrollador de software. Si creés que puedo sumar a tu equipo, escribime.',
		cvLabel: (label) => label.replace('CV · ', 'CV, '),
	},
};
