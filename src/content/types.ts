// Shape of the page content. One object per language (en.ts, es.ts), same structure,
// so the components never contain copy and both versions stay in sync.

export type Lang = 'en' | 'es';

export type FlowStage = { label: string; items: string[] };
export type Link = { label: string; href: string };

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
	links: Link[];
	note?: string;
	image?: { src: string; alt: string; width: number; height: number };
	status?: 'live' | 'in-progress';
};

export type Content = {
	lang: Lang;
	locale: string;
	path: string;
	meta: { title: string; description: string; ogAlt: string };
	ui: {
		skip: string;
		nav: { work: string; experience: string; contact: string; cv: string; mainLabel: string };
		switchLang: { label: string; href: string; short: string };
		sections: {
			work: string;
			caseCount: (n: number) => string;
			experience: string;
			education: string;
			stack: string;
			about: string;
			contact: string;
			alsoBuilt: string;
		};
		caseLabels: {
			problem: string;
			built: string;
			result: string;
			architecture: string;
			stack: string;
			inProgress: string;
			diagramLabel: (title: string) => string;
		};
		languagesLabel: string;
		nowLabel: string;
		downloadCv: string;
		email: string;
		replayIntro: string;
		introLabel: string;
		introMadeBy: string;
	};
	hero: {
		role: string;
		location: string;
		availability: string;
		lead: string;
		body: string[];
		now: string;
	};
	cvs: Link[];
	caseStudies: CaseStudy[];
	otherProjects: { title: string; description: string; stack: string[]; links: Link[] }[];
	jobs: { role: string; org: string; period: string; points: string[] }[];
	education: { title: string; org: string; period: string }[];
	stack: { group: string; items: string[] }[];
	about: { paragraphs: string[]; languages: { name: string; level: string }[] };
	contact: { pitch: string; cvLabel: (label: string) => string };
};
