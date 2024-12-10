@regression @tables
Feature: Table Page Tests

  Scenario: Validate the Static Table headings
    Given user navigates to "https://www.techglobal-training.com/frontend"
    When user clicks on the "Tables" card
    Then user should see the "Tables" page heading
    And user should see the table headings
      | Rank | Company | Employees | Country |
    And user should see the table data
      | 1 | Amazon | 1,523,000 | USA |

  Scenario: Validate the Static Table headings
    Given user navigates to "https://www.techglobal-training.com/frontend"
    When user clicks on the "Tables" card
    Then user should see the "Tables" page heading
    And user should see the table data with the following order
      | 1 | iPhone  | 1000 | 1000 |
      | 3 | Airpods | 100  | 300  |
      | 2 | iPad    | 500  | 1000 |

    Then user should fill the form as key-value pairs
      | First Name | TechGlobal |
      | Last Name  | School     |
      | From       | U.S.       |
      | Live       | Chicago    |

    Then user should handle input form with objects
      | label      | input      | error            |
      | First Name | TechGlobal | false characters |
      | Last Name  | School     | wrong lastname   |
      | From       | U.S.       | Short Characters |
      | Live       | Chicago    | Wrong Address    |