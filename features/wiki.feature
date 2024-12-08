@regression @wiki
Feature: Wiki search functionality

  Scenario Outline: Valida wiki search
    Given user navigates to "https://www.wikipedia.org/"
    When user should search for "<input>" on wikipedia
    Then user should see "<input>" in the title
    And user should see "<input>" in the URL
    And user should see "<input>" in the first heading

    Examples:
      | input             |
      | Jeff Bezos        |
      | Elon Musk         |
      | Barack Obama      |
      | Lionel Messi      |
      | Cristiano Ronaldo |
      | Santa Claus       |
      | Angelina Jolie    |
      | Christian Bale    |