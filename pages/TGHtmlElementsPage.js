const locators = Object.freeze({
  heading: '#main_heading',
  buttons: '#register_button, #signin_button',
  buttonMessage: '.is-block'
})

class TGHtmlElementsPage {
  locators = locators

  async clickButtonByText(buttonText) {
    await page.locator(`${locators.buttons} >> text="${buttonText}"`).click()
  }
}

module.exports = TGHtmlElementsPage