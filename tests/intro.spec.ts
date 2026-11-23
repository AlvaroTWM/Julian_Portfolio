import { expect, test } from '@playwright/test';

const intro = '#gf-intro';

test.describe('GoodFellas intro', () => {
	test('plays once on the first visit, ends by itself in about 3 s, and is not shown again', async ({ page }) => {
		await page.goto('/');
		await expect(page.locator(intro)).toBeVisible();
		await expect(page.locator(intro)).toBeHidden({ timeout: 4_000 });
		expect(await page.evaluate(() => localStorage.getItem('gf-intro-seen'))).toBe('1');
		await page.reload();
		await expect(page.locator('html')).not.toHaveClass(/gf-intro-on/);
		await expect(page.locator(intro)).toBeHidden();
	});

	test('can be skipped with a key, a click or a scroll', async ({ page, context }) => {
		await page.goto('/');
		await expect(page.locator(intro)).toBeVisible();
		await page.keyboard.press('Escape');
		await expect(page.locator(intro)).toBeHidden({ timeout: 1_000 });

		for (const skip of ['click', 'wheel'] as const) {
			const fresh = await context.newPage();
			await fresh.goto('/es/');
			await fresh.evaluate(() => localStorage.clear());
			await fresh.reload();
			await expect(fresh.locator(intro)).toBeVisible();
			await fresh.waitForTimeout(150);
			if (skip === 'click') await fresh.mouse.click(10, 10);
			else await fresh.mouse.wheel(0, 300);
			await expect(fresh.locator(intro)).toBeHidden({ timeout: 1_000 });
			await fresh.close();
		}
	});

	test('is never shown with reduced motion', async ({ page }) => {
		await page.emulateMedia({ reducedMotion: 'reduce' });
		await page.goto('/');
		await expect(page.locator('html')).not.toHaveClass(/gf-intro-on/);
		await expect(page.locator(intro)).toBeHidden();
	});

	test('uses the page language', async ({ page }) => {
		await page.goto('/es/');
		await expect(page.locator('.gf-intro-art')).toHaveAttribute('aria-label', 'Creado por GoodFellas Corp');
		await page.goto('/');
		await expect(page.locator('.gf-intro-art')).toHaveAttribute('aria-label', 'Made by GoodFellas Corp');
	});

	test('the footer signature replays it', async ({ page }) => {
		await page.addInitScript(() => localStorage.setItem('gf-intro-seen', '1'));
		await page.goto('/');
		await expect(page.locator(intro)).toBeHidden();
		await page.locator('[data-gf-replay]').click();
		await expect(page.locator(intro)).toBeVisible();
		await expect(page.locator(intro)).toBeHidden({ timeout: 4_000 });
	});
});
