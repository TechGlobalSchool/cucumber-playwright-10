const { Given, When, Then} = require("@cucumber/cucumber");
const { expect } = require('@playwright/test');
const TGHtmlElementsPage = require("../pages/TGHtmlElementsPage");

const tgHtmlElementsPage = new TGHtmlElementsPage()

Given(/^user navigates to "([^"]*)"$/, async function(url) {
	await page.goto(url)
});

When(/^user clicks on the "([^"]*)" card$/, async function(card){
	await page.locator(`.card:has-text("${card}")`).click()
});


Then(/^user should see the "([^"]*)" page heading$/, async function(heading) {
	const $mainHeading = page.locator(tgHtmlElementsPage.locators.heading)
	await expect($mainHeading).toHaveText(heading)
})

Then(/^the URL should contain "([^"]*)"$/, async function(url) {
	const pageUrl = page.url()
	expect(pageUrl).toContain(url)
});

When(/^user clicks on the "([^"]*)" button$/, async function (button) {
	await tgHtmlElementsPage.clickButtonByText(button)
});


Then(/^the text under it should be "([^"]*)"$/, async function (message) {
	const $message = page.locator(tgHtmlElementsPage.locators.buttonMessage)
	await expect($message).toHaveText(message)
});

