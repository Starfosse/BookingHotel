import { test, expect } from "@playwright/test"

const UI_URL = "http://localhost:5173"

test("should allow the user to sign in", async ({
  page,
}) => {
  await page.goto(UI_URL)

  await page
    .getByRole("link", { name: "Se connecter" })
    .click()

  await expect(
    page.getByRole("heading", { name: "Se connecter" })
  ).toBeVisible()

  await page.locator("[name=email]").fill("test5@test5.com")
  await page.locator("[name=password]").fill("test5test5")

  await page
    .getByRole("button", { name: "Se connecter" })
    .click()

  await expect(
    page.getByText("Connexion réussie !")
  ).toBeVisible()

  await expect(
    page.getByRole("link", { name: "Mes réservations" })
  ).toBeVisible()
  await expect(
    page.getByRole("link", { name: "Mes hôtels" })
  ).toBeVisible()
  await expect(
    page.getByRole("button", { name: "Se déconnecter" })
  ).toBeVisible()
})
