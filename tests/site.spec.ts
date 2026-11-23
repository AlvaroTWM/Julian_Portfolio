import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { openWithoutIntro, pages } from './helpers';

for (const p of pages) {
	test.describe(`${p.lang.toUpperCase()} page (${p.path})`, () => {
		test('has correct language, title and meta tags', async ({ page }) => {
			await openWithoutIntro(page, p.path);
			await expect(page.locator('html')).toHaveAttribute('lang', p.lang);
			await expect(page).toHaveTitle(/Julian Arámbulo/);
			await expect(page.locator('h1')).toHaveCount(1);
			await expect(page.locator('h1')).toContainText(p.h1);

			const description = await page.locator('meta[name="description"]').getAttribute('content');
			expect(description?.length ?? 0).toBeGreaterThan(70);
			expect(description?.length ?? 0).toBeLessThan(260);

			for (const property of ['og:title', 'og:description', 'og:image', 'og:url']) {
				await expect(page.locator(`meta[property="${property}"]`)).toHaveAttribute('content', /.+/);
			}
			await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveCount(1);
			await expect(page.locator('link[rel="alternate"][hreflang="es"]')).toHaveCount(1);
			await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', new RegExp(`${p.path}$`));
		});

		test('loads without console errors or failed requests', async ({ page }) => {
			const errors: string[] = [];
			page.on('console', (msg) => msg.type() === 'error' && errors.push(msg.text()));
			page.on('pageerror', (err) => errors.push(err.message));
			page.on('requestfailed', (req) => errors.push(`failed: ${req.url()}`));
			page.on('response', (res) => res.status() >= 400 && errors.push(`${res.status()}: ${res.url()}`));
			await openWithoutIntro(page, p.path);
			await page.waitForLoadState('networkidle');
			expect(errors).toEqual([]);
		});

		for (const scheme of ['light', 'dark'] as const) {
			test(`has no accessibility violations (${scheme} mode)`, async ({ page }) => {
				await page.emulateMedia({ colorScheme: scheme });
				await openWithoutIntro(page, p.path);
				const results = await new AxeBuilder({ page })
					.withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'])
					.analyze();
				const summary = results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target).join(', ')}`);
				expect(summary).toEqual([]);
			});
		}

		test('every in-page link points to an existing section', async ({ page }) => {
			await openWithoutIntro(page, p.path);
			const hashes = await page.$$eval('a[href^="#"]', (links) => links.map((a) => a.getAttribute('href')!));
			expect(hashes.length).toBeGreaterThan(0);
			for (const hash of hashes) {
				await expect(page.locator(hash), `target for ${hash}`).toHaveCount(1);
			}
		});

		test('ids are unique', async ({ page }) => {
			await openWithoutIntro(page, p.path);
			const ids = await page.$$eval('[id]', (els) => els.map((el) => el.id));
			const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
			expect(duplicates).toEqual([]);
		});

		test('internal links and files respond with 200', async ({ page, request }) => {
			await openWithoutIntro(page, p.path);
			const hrefs = await page.$$eval('a[href^="/"], img[src^="/"], link[href^="/"]', (els) =>
				els.map((el) => el.getAttribute('href') ?? el.getAttribute('src')!),
			);
			const unique = [...new Set(hrefs)];
			expect(unique.length).toBeGreaterThan(5);
			for (const href of unique) {
				const res = await request.get(href);
				expect(res.status(), href).toBe(200);
				if (href.endsWith('.pdf')) expect(res.headers()['content-type']).toContain('application/pdf');
			}
		});

		test('external links use https and point to the right profiles', async ({ page }) => {
			await openWithoutIntro(page, p.path);
			const hrefs = await page.$$eval('a[href^="http"]', (links) => links.map((a) => a.href));
			expect(hrefs.length).toBeGreaterThan(5);
			for (const href of hrefs) {
				expect(href, href).toMatch(/^https:\/\//);
				expect(() => new URL(href)).not.toThrow();
			}
			expect(hrefs).toContain('https://github.com/AlvaroTWM');
			expect(hrefs).toContain('https://www.linkedin.com/in/alvaro-arambulo');
			await expect(page.locator('a[href^="mailto:"]').first()).toHaveAttribute(
				'href',
				'mailto:alvaroarambulo@gmail.com',
			);
		});

		test('images load and have alt text', async ({ page }) => {
			await openWithoutIntro(page, p.path);
			const images = page.locator('main img');
			const count = await images.count();
			expect(count).toBeGreaterThan(0);
			for (let i = 0; i < count; i++) {
				const img = images.nth(i);
				await img.scrollIntoViewIfNeeded();
				await expect(img).toHaveAttribute('alt', /.{10,}/);
				await expect.poll(() => img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth)).toBeGreaterThan(0);
			}
		});

		test('shows every section and the four case studies', async ({ page }) => {
			await openWithoutIntro(page, p.path);
			for (const id of ['work', 'experience', 'stack', 'about', 'contact']) {
				await expect(page.locator(`section#${id}`)).toBeVisible();
			}
			await expect(page.locator('article.case')).toHaveCount(4);
			await expect(page.locator('.flow')).toHaveCount(4);
		});

		test('language switch goes to the other version', async ({ page }) => {
			await openWithoutIntro(page, p.path);
			await page.locator('a.lang-link').click();
			await expect(page).toHaveURL(new RegExp(`${p.otherPath}$`));
			await expect(page.locator('html')).toHaveAttribute('lang', p.lang === 'en' ? 'es' : 'en');
		});

		for (const width of [320, 375, 768, 1280]) {
			test(`has no horizontal scroll at ${width}px`, async ({ page }) => {
				await page.setViewportSize({ width, height: 800 });
				await openWithoutIntro(page, p.path);
				const overflow = await page.evaluate(
					() => document.documentElement.scrollWidth - document.documentElement.clientWidth,
				);
				expect(overflow).toBeLessThanOrEqual(0);
			});
		}
	});
}

test('header navigation scrolls to each section', async ({ page, isMobile }) => {
	await openWithoutIntro(page, '/');
	const links = isMobile ? ['Work'] : ['Work', 'Experience', 'Contact'];
	for (const name of links) {
		await page.getByRole('navigation').getByRole('link', { name, exact: true }).click();
		await expect(page).toHaveURL(new RegExp(`#${name.toLowerCase()}$`));
		await expect(page.locator(`#${name.toLowerCase()}`)).toBeInViewport();
	}
});
