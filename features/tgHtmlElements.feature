@regression @htmlElements
Feature: Interactions with TechGlobal HTML Elements page

  As a user
  I want to test
  HTML Elements page

  Background:
    Given user navigates to "https://www.techglobal-training.com/frontend"
    When user clicks on the "HTML Elements" card
    Then user should see the "HTML Elements" page heading
    And the URL should contain "elements"

  Scenario: Validate HTML elements card, Register and Sign in Buttons
    When user clicks on the "Register" button
    Then the text under it should be "You clicked on “Register”"
    When user clicks on the "Sign in" button
    Then the text under it should be "You clicked on “Sign in”"

  @refactor
  Scenario: Validate HTML elements card, Register and Sign in Buttons
    # When user selects "Apple" from the "first" dropdown menu
    # When user selects "Microsoft" from the "second" dropdown menu
    Then I update below input fields and their given values
      | label      | input     |
      | Dropdown 1 | Apple     |
      | Dropdown 2 | Microsoft |
    Then "Apple" should be the selected option in the "first" dropdown
    Then "Microsoft" should be the selected option in the "second" dropdown

  @refactor
  Scenario: Validate HTML Elements card, Interact with text inputs
    # When user enters "test input" to input field "1"
    # When user enters "another test input" to input field "2"
    Then I update below input fields and their given values
      | label        | input              |
      | Text Input 1 | test input         |
      | Text Input 2 | another test input |
    Then the text input "1" should contain "test input"
    And the text input "2" should contain "another test input"

  Scenario: Validate HTML Elements card, Toggle checkboxes and verify the state
    When user selects the "Microsoft" checkbox
    And user deselects the "Microsoft" checkbox
    Then the "Microsoft" checkbox should not be checked
    When user selects the "Apple" and "Tesla" checkboxes
    Then both "Apple" and "Tesla" checkboxes should be checked
    And the "Microsoft" checkbox remains unchecked

  @inputHandling
  Scenario: Enter inputs to given labels and verify the error messages
    Then I update below input fields and their given values
      | label        | input      |
      | Text Input 1 | TechGlobal |
      | Text Input 2 | School     |
      | Date Input 1 | 01/01/2024 |
      | Date Input 2 | 05/05/2021 |
      | Dropdown 1   | Apple      |
      | Dropdown 2   | Microsoft  |
