import type { Page } from '@playwright/test';

export const pages = [
	{ lang: 'en', path: '/', h1: 'Julian Arámbulo', otherPath: '/es/' },
	{ lang: 'es', path: '/es/', h1: 'Julian Arámbulo', otherPath: '/' },
] as const;

/** Open a page as a returning visitor, so the intro does not cover it. */
export async function openWithoutIntro(page: Page, path: string) {
	await page.addInitScript(() => {
		try {
			localStorage.setItem('gf-intro-seen', '1');
		} catch {}
	});
	await page.goto(path);
}
