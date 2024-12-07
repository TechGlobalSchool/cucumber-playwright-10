const locators = Object.freeze({
  heading: '#main_heading',
  buttons: '#register_button, #signin_button',
  buttonMessage: '.is-block',
  firstDropdown: '#company_dropdown1',
  secondDropdown: '#company_dropdown2',
  textInputOne: '#text_input1',
  textInputOTwo: '#text_input2',
  inputBoxes: '#text_input1, #text_input2',
  appleCheckbox: '#checkbox_1',
  microsoftCheckbox: '#checkbox_2',
  teslaCheckbox: '#checkbox_3'
})

class TGHtmlElementsPage {
  locators = locators

  async clickButtonByText(buttonText) {
    await page.locator(`${locators.buttons} >> text="${buttonText}"`).click()
  }

  /**
   * This method returns the dropdown locator directly as Playwright Locator object.
   *
   * @param {string} dropdown - The dropdown name (first, second)
   * @returns {import("@playwright/test").Locator} - The Playwright Locator for the dropdown
   */
  getDropdownLocator(dropdown) {
    const dropdownLocators = {
      first: locators.firstDropdown,
      second: locators.secondDropdown
    }

    if (!(dropdown in dropdownLocators)) {
      throw new Error(`Dropdown "${dropdown}" is not recognized.`)
    }

    return page.locator(dropdownLocators[dropdown])
  }

  /**
   * This method selects an option from the dropdown
   *
   * @param {string} dropdown - The dropdown name (first, second)
   * @param {string} option - The option label to select.
   */
  async selectOptionFromDropdown(dropdown, option) {
    const $dropdownLocator = this.getDropdownLocator(dropdown)
    await $dropdownLocator.selectOption({ label: option })
  }

  getInputboxByIndex(index) {
    const realIndex = Number(index) - 1
    return page.locator(locators.inputBoxes).nth(realIndex)
  }

  async enterTextInputbox(index, input) {
    const $inputbox = this.getInputboxByIndex(index)
    await $inputbox.fill(input)
  }

  /**
   *
   * @param {"Apple" | "Microsoft" | "Tesla"} label
   * @returns {import("@playwright/test").Locator} - The Playwright Locator for the checkbox
   */
  getCheckboxByLabel(label) {
    const checkboxes = {
      Apple: locators.appleCheckbox,
      Microsoft: locators.microsoftCheckbox,
      Tesla: locators.teslaCheckbox
    }

    if (!(label in checkboxes)) {
      throw new Error(`${label} not found`)
    }

    return page.locator(checkboxes[label])
  }
}

module.exports = TGHtmlElementsPage
