import { test, expect } from "@playwright/test"
import path from "path"

const UI_URL = "http://localhost:5173"

test.beforeEach(async ({ page }) => {
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
})

test("should allow user to add a hotel", async ({
  page,
}) => {
  await page.goto(`${UI_URL}/add-hotel`)

  await page.locator('[name="name]').fill("Test Hotel")
  await page.locator('[name="city]').fill("Test City")
  await page.locator('[name="country]').fill("Test Country")
  await page
    .locator('[name="description]')
    .fill("This is a test description")
  await page.locator('[name="pricePeNight]').fill("100")
  await page.selectOption('select[name="starRating"]', "3")

  await page.getByText("Famille").click()

  await page.getByLabel("Parking")
  await page.getByLabel("Spa")

  await page.locator('[name="adultCount"]').fill("2")
  await page.locator('[name="childCount"]').fill("2")

  await page.setInputFiles('[name="imageFiles"]', [
    path.join(__dirname, "files", "1.jpg"),
    path.join(__dirname, "files", "2.jpg"),
  ])

  await page
    .getByRole("button", { name: "Sauvegarder" })
    .click()

  await expect(
    page.getByText("Hôtel sauvegardé !")
  ).toBeVisible()
})

test("should display hotels", async ({ page }) => {
  await page.goto(`${UI_URL}/my-hotels`)

  await expect(
    page.getByText("Dublin Getaways")
  ).toBeVisible()
  await expect(
    page.getByText("Lorem ipsum dolor sit amet")
  ).toBeVisible()
  await expect(
    page.getByText("Dublin, Ireland")
  ).toBeVisible()
  await expect(
    page.getByText("£119 per night")
  ).toBeVisible()
  await expect(
    page.getByText("2 adults, 3 childrens")
  ).toBeVisible()
  await expect(
    page.getByText("2 Star Rating")
  ).toBeVisible()

  await expect(
    page.getByRole("link", { name: "View Details" })
  ).toBeVisible()
  await expect(
    page.getByRole("link", { name: "Add Hotel" })
  ).toBeVisible()
})
