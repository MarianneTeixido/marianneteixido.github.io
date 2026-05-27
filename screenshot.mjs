import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage();

await page.setViewportSize({ width: 1280, height: 1000 });
await page.goto('http://localhost:5174/', { waitUntil: 'networkidle' });
await page.waitForTimeout(2000);
await page.screenshot({ path: '/tmp/grid_desktop.png' });

await page.setViewportSize({ width: 900, height: 1000 });
await page.screenshot({ path: '/tmp/grid_md.png' });

await browser.close();
console.log('done');
