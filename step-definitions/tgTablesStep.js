const { Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')
const TGTablesPage = require('../pages/TGTablesPage')

const tgTablesPage = new TGTablesPage()

Then(/^user should see the table headings$/, async function (dataTable) {
  /**
   * dataTable.rawTable.flat() returns single-dimensional array of all the cells in the data table.
   *
   * ["Rank", "Company", "Employees", "Country",]
   */
  const headings = dataTable.rawTable.flat()
  const $pageHeadings = await page.locator(tgTablesPage.locators.staticTableHeadings).all()

  // headings.forEach((element, index) => {

  // })

  // await expect($pageHeadings).toHaveText(headings)

  for (const [index, value] of headings.entries()) {
    console.log(Array.from(headings.entries()))
    console.log([...headings.entries()])
    console.log(`Index is: ${index} and Value is: ${value}`)
    await expect($pageHeadings[index]).toHaveText(value)
  }
})

Then(/^user should see the table data$/, async function (dataTable) {
  const data = dataTable.rawTable.flat()
  const $pageData = await page.locator(tgTablesPage.locators.staticTableFirstRow)

  await expect($pageData).toHaveText(data)
})

Then(/^user should see the table data with the following order$/, async function (dataTable) {
  /**
   * dataTable.rawTable returns the entire data table as a two-dimensional array (an array of arrays).
   *
   * [
   * [ '1', 'iPhone', '1000', '1000' ],
   * [ '3', 'Airpods', '100', '300' ],
   * [ '2', 'iPad', '500', '1000' ]
   * ]
   */
  const expectedRows = dataTable.rawTable
  const pageRows = await page.locator(tgTablesPage.locators.sortableTableRows).all()

  for (const [index, row] of pageRows.entries()) {
    console.log(row.locator('td'))
    await expect(row.locator('td')).toHaveText(expectedRows[index])
  }

  // console.log(expectedRows[1] + ' SECOND ROW')

  for (const row of expectedRows) {
    console.log(row)

    for (const cell of row) {
      console.log(cell)
    }
  }
})

Then(/^user should fill the form as key-value pairs$/, async function (dataTable) {
  /**
   * dataTable.rowsHash() transfroms the data table into a simple JavaScript object
   * where each row's first cell is used as a key and the second cell as its value.
   *
   * {
   *   "First Name": "Techglobal",
   *   "Last Name": "School",
   *   "From": "U.S.",
   *   "Live": "Chicago"
   * }
   */

  const keyValue = dataTable.rowsHash()

  // console.log(keyValue)

  console.log(JSON.stringify(keyValue, null, 2))

  for (const key in keyValue) {
    console.log(key)
    console.log(keyValue[key])
  }
})

Then(/^user should handle input form with objects$/, async function (dataTable) {
  /**
   * dataTable.hashes() converts your table into an array of objects, where each object represents a single row.
   * The first row of the table is used as the header (keys for the objects), and rows below header become objects
   * where each column's data is matched to a header key.
   *
   * [
   *  { label: 'First Name', input: 'TechGlobal', error: 'false characters' },
   *  { label: 'Last Name', input: 'School', error: 'wrong lastname ' },
   *  { label: 'From', input: 'U.S.', error: 'Short Characters' },
   *  { label: 'Live', input: 'Chicago', error: 'Wrong Address' }
   * ]
   */
  const inputs = dataTable.hashes()

  console.log(JSON.stringify(inputs, null, 2))

  inputs.forEach((input) => {
    console.log(input.label)
    console.log(input.input)
    console.log(input.error)
  })
})
