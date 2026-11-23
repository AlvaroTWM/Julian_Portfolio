// Personal details and copy used across the page.
// Everything here is plain data: edit the text, the layout stays the same.

export const site = {
	name: 'Julian Arámbulo',
	role: 'Data Engineer & Software Developer',
	location: 'Asunción, Paraguay',
	timezone: 'UTC−3',
	availability: 'Open to remote roles',
	url: 'https://julian-portafolio.vercel.app',
	title: 'Julian Arámbulo · Data Engineer & Software Developer',
	description:
		'Julian Arámbulo is a data engineer and software developer in Asunción, Paraguay (UTC−3). SQL, Python, AWS and the web tools around the data. Open to remote roles.',
	email: 'alvaroarambulo@gmail.com',
	githubUrl: 'https://github.com/AlvaroTWM',
	githubHandle: 'AlvaroTWM',
	linkedinUrl: 'https://www.linkedin.com/in/alvaro-arambulo',
	linkedinHandle: 'alvaro-arambulo',
};

export const cvs = [
	{ label: 'CV · Data Engineering', href: '/cv/julian-arambulo-cv-data-engineer.pdf' },
	{ label: 'CV · Software Development', href: '/cv/julian-arambulo-cv-software-developer.pdf' },
];

export const intro = {
	// Kept short on purpose: what I do, the angle, and what I'm looking for.
	lead: 'I build the pipelines behind the dashboards.',
	body: [
		'For three years I worked on the reporting side of banking and retail: the SQL, the scheduled jobs and the dashboards that teams open every morning. The part I enjoyed most was never the chart. It was getting the data there, on time and correct, without someone doing it by hand.',
		'That is the work I want to do full time. I work with SQL, Python and AWS on the data side, and with TypeScript, React and Node.js when the data needs an application around it.',
	],
	now: { label: 'Data Analyst', org: 'Banco Itaú Paraguay', since: 'Nov 2026' },
};

export const about = {
	paragraphs: [
		'I started in IT managing system access, moved to infrastructure support and then to BI, which is where I learned that most reporting problems are really data problems: a source nobody owns, a join that silently drops rows, a manual export someone runs every Monday.',
		'I prefer simple systems that keep working: small steps, version control, and a process someone else can run without asking me. Outside work I build side projects to learn things properly, from a talent directory to a fighting game in plain JavaScript.',
	],
	languages: [
		{ name: 'Spanish', level: 'native' },
		{ name: 'Portuguese', level: 'C1' },
		{ name: 'English', level: 'B1, studying toward B2' },
	],
};
