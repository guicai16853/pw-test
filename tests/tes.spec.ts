import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
    // Go to https://tes.tencent.com/
    await page.goto('https://tes.tencent.com/');
    // Click #guide-mall
    await page.locator('#guide-mall').click();
    await expect(page).toHaveURL('https://tes.tencent.com/mall');
    // Click text=综合能源系统规划软件
    await page.locator('text=综合能源系统规划软件').click();
    await expect(page).toHaveURL('https://tes.tencent.com/mall/detail/936');
    // Click text=添加产品到组合包
    await page.locator('text=添加产品到组合包').click();
    // Click [aria-label="关闭"]
    await page.locator('[aria-label="关闭"]').click();
    // Click text=我想采购
    await page.locator('text=我想采购').click();
    // Click [aria-label="关闭"]
    await page.locator('[aria-label="关闭"]').click();
});