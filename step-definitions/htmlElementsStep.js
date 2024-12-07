const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')
const TGHtmlElementsPage = require('../pages/TGHtmlElementsPage')

const tgHtmlElementsPage = new TGHtmlElementsPage()

Given(/^user navigates to "([^"]*)"$/, async function (url) {
  await page.goto(url)
})

Then(/^user should see the "([^"]*)" page heading$/, async function (heading) {
  const $mainHeading = page.locator(tgHtmlElementsPage.locators.heading)
  await expect($mainHeading).toHaveText(heading)
})

Then(/^the URL should contain "([^"]*)"$/, async function (url) {
  const pageUrl = page.url()
  expect(pageUrl).toContain(url)
})

When(/^user clicks on the "([^"]*)" button$/, async function (button) {
  await tgHtmlElementsPage.clickButtonByText(button)
})

Then(/^the text under it should be "([^"]*)"$/, async function (message) {
  const $message = page.locator(tgHtmlElementsPage.locators.buttonMessage)
  await expect($message).toHaveText(message)
})

When(/^user selects "([^"]*)" from the "([^"]*)" dropdown menu$/, async function (option, dropdown) {
  await tgHtmlElementsPage.selectOptionFromDropdown(dropdown, option)
})

Then(/^"([^"]*)" should be the selected option in the "([^"]*)" dropdown$/, async function (option, dropdown) {
  const $dropdownLocator = tgHtmlElementsPage.getDropdownLocator(dropdown)
  await expect($dropdownLocator).toHaveValue(option)
})

When(/^user enters "([^"]*)" to input field "([^"]*)"$/, async function (input, index) {
  await tgHtmlElementsPage.enterTextInputbox(index, input)
})

Then(/^the text input "([^"]*)" should contain "([^"]*)"$/, async function (index, expectedValue) {
  const $inputbox = tgHtmlElementsPage.getInputboxByIndex(index)
  await expect($inputbox).toHaveValue(expectedValue)
})

When(/^user selects the "([^"]*)" checkbox$/, async function (label) {
  await tgHtmlElementsPage.getCheckboxByLabel(label).check()
})

When(/^user deselects the "([^"]*)" checkbox$/, async function (label) {
  await tgHtmlElementsPage.getCheckboxByLabel(label).uncheck()
})

Then(/^the "([^"]*)" checkbox should not be checked$/, async function (label) {
  const $checkbox = tgHtmlElementsPage.getCheckboxByLabel(label)
  await expect($checkbox).not.toBeChecked()
})

When(/^user selects the "([^"]*)" and "([^"]*)" checkboxes$/, async function (label1, label2) {
  await tgHtmlElementsPage.getCheckboxByLabel(label1).check()
  await tgHtmlElementsPage.getCheckboxByLabel(label2).check()
})

Then(/^both "([^"]*)" and "([^"]*)" checkboxes should be checked$/, async function (label1, label2) {
  const $checkbox1 = tgHtmlElementsPage.getCheckboxByLabel(label1)
  const $checkbox2 = tgHtmlElementsPage.getCheckboxByLabel(label2)
  await expect($checkbox1).toBeChecked()
  await expect($checkbox2).toBeChecked()
})

Then('the {string} checkbox remains unchecked', async function (label) {
  const $checkbox = tgHtmlElementsPage.getCheckboxByLabel(label)
  await expect($checkbox).not.toBeChecked()
})
