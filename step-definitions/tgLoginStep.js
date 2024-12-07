const { When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')
const TGLoginPage = require('../pages/TGLoginPage')

const tgLoginPage = new TGLoginPage()

When(/^user enter username as "([^"]*)" and password as "([^"]*)"$/, async function (usernme, password) {
  await tgLoginPage.login(usernme, password)
})

When(/^user clicks Login button$/, async function () {
  await tgLoginPage.clickLoginButton()
})

Then(/^user should see a "([^"]*)"$/, async function (message) {
  const $errorMessage = page.locator(tgLoginPage.locators.errorMessage)
  const $successMessage = page.locator(tgLoginPage.locators.successMessage)

  // message === 'You are logged in'
  //   ? await expect($successMessage).toHaveText(message)
  //   : await expect($errorMessage).toHaveText(message)

  switch (message) {
    case 'You are logged in': {
      await expect($successMessage).toHaveText(message)
      break
    }

    case 'Invalid Username entered!':
    case 'Invalid Password entered!': {
      await expect($errorMessage).toHaveText(message)
      break
    }

    default: {
      throw new Error(`${message} is not matching with any case.`)
    }
  }
})
