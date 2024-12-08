const { When } = require('@cucumber/cucumber')

When(/^user clicks on the "([^"]*)" card$/, async function (card) {
  await page.locator('.card, [class*="projectCard"]').getByText(card, { exact: true }).click()
})
