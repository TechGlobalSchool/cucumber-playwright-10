const { When } = require("@cucumber/cucumber");

When(/^user clicks on the "([^"]*)" card$/, async function(card){
  await page.locator(`.card:has-text("${card}")`).click()
})