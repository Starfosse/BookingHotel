import { test, expect } from "@playwright/test"

const UI_URL = "http://localhost:5173"

test.beforeEach(async ({ page }) => {
  await page.goto(UI_URL)

  await page.getByRole("link", { name: "Se connecter" }).click()

  await expect(page.getByRole("heading", { name: "Se connecter" })).toBeVisible()

  await page.locator("[name=email]").fill("test5@test5.com")
  await page.locator("[name=password]").fill("test5test5")

  await page.getByRole("button", { name: "Se connecter" }).click()

  await expect(page.getByText("Connexion réussie !")).toBeVisible()
})

test("should show hotel search results", async ({ page }) => {
  await page.goto(UI_URL)

  await page.getByPlaceholder("Where are you going?").fill("Dublin")
  await page.getByRole("button", { name: "Search" }).click()

  await expect(page.getByText("Hotels found in Dublin")).toBeVisible()
  await expect(page.getByText("Dublin Getaways")).toBeVisible()
})
