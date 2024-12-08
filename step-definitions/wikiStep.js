const { When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')
const WikiPage = require('../pages/WikiPage')

const wikiPage = new WikiPage()

When(/^user should search for "([^"]*)" on wikipedia$/, async function (input) {
  // await page.pause()
  await wikiPage.searchFor(input)
})

Then(/^user should see "([^"]*)" in the title$/, async function (title) {
  await expect(await page.title()).toContain(title)
})

Then(/^user should see "([^"]*)" in the URL$/, async function (url) {
  // const replace = url.replace(' ', '_')

  for (const u of url.split(' ')) {
    expect(await page.url()).toContain(u)
  }
})

Then(/^user should see "([^"]*)" in the first heading$/, async function (heading) {
  const $headingLocator = page.locator(wikiPage.locators.firstHeading)
  await expect($headingLocator).toHaveText(heading)
})
