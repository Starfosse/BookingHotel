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

test("should allow user to register", async ({ page }) => {
  const testEmail = `test_register_${
    Math.floor(Math.random() * 90000) + 10000
  }@test.com`
  await page.goto(UI_URL)

  await page
    .getByRole("link", { name: "Se connecter" })
    .click()
  await page
    .getByRole("link", { name: "Créer un compte ici" })
    .click()
  await expect(
    page.getByRole("heading", { name: "Créer un compte" })
  ).toBeVisible()

  await page.locator("[name=Prénom").fill("test_prénom")
  await page.locator("[name=Nom").fill("test_nom")
  await page.locator("[name=email").fill(testEmail)
  await page.locator("[name=motDePasse").fill("test_mdp")
  await page
    .locator("[name=confirmezVotreMotDePasse")
    .fill("test_mdp")

  await page
    .getByRole("button", { name: "créer un compte" })
    .click()

  await expect(
    page.getByText("Enregistrement réussi !")
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
