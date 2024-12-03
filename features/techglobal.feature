Feature: Interactions with TechGlobal HTML Elements page

  Scenario: Validate HTML elements card, Register and Sign in Buttons
    Given user navigates to "https://www.techglobal-training.com/frontend"
    When user clicks on the "HTML Elements" card
    Then user should see the "HTML Elements" page heading
    And the URL should contain "elements"
    When user clicks on the "Register" button
    Then the text under it should be "You clicked on “Register”"
    When user clicks on the "Sign in" button
    Then the text under it should be "You clicked on “Sign in”"