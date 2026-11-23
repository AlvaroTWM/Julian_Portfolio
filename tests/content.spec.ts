// Keeps the English and Spanish versions in sync: same projects, same links, same facts.
import { expect, test } from '@playwright/test';
import { en } from '../src/content/en';
import { es } from '../src/content/es';

test.describe('content parity (EN / ES)', () => {
	test('same case studies, in the same order, with the same links and stack', () => {
		expect(es.caseStudies.map((c) => c.id)).toEqual(en.caseStudies.map((c) => c.id));
		en.caseStudies.forEach((study, i) => {
			const other = es.caseStudies[i];
			expect(other.links.map((l) => l.href)).toEqual(study.links.map((l) => l.href));
			expect(other.stack).toEqual(study.stack);
			expect(other.year).toBe(study.year);
			expect(other.status).toBe(study.status);
			expect(other.built.length).toBe(study.built.length);
			expect(other.flow.length).toBe(study.flow.length);
			expect(other.image?.src).toBe(study.image?.src);
		});
	});

	test('same jobs, education, stack groups and CVs', () => {
		expect(es.jobs.map((j) => j.org)).toEqual(en.jobs.map((j) => j.org));
		expect(es.jobs.map((j) => j.points.length)).toEqual(en.jobs.map((j) => j.points.length));
		expect(es.education.map((e) => e.org)).toEqual(en.education.map((e) => e.org.replace('University of Helsinki', 'Universidad de Helsinki')));
		expect(es.stack.length).toBe(en.stack.length);
		expect(es.cvs.map((c) => c.href)).toEqual(en.cvs.map((c) => c.href));
		expect(es.otherProjects.map((p) => p.links.map((l) => l.href))).toEqual(
			en.otherProjects.map((p) => p.links.map((l) => l.href)),
		);
	});

	test('no leftover placeholders or double spaces', () => {
		for (const text of [JSON.stringify(en), JSON.stringify(es)]) {
			expect(text).not.toMatch(/\bTODO\b|lorem ipsum|\bundefined\b/);
			expect(text).not.toMatch(/ {2,}/);
			expect(text).not.toMatch(/ [,.;:]/);
		}
	});
});
