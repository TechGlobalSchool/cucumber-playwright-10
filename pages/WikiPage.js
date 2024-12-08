const locators = Object.freeze({
  searchBar: '#searchInput',
  firstHeading: '#firstHeading'
})

class WikiPage {
  locators = locators

  async searchFor(input) {
    await page.locator(locators.searchBar).fill(input)
    await page.locator(locators.searchBar).press('Enter')
  }
}

module.exports = WikiPage
