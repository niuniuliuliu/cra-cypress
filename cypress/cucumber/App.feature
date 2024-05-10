Feature: App Test
  Scenario: click count
    When I open App page
    Then I click button with test id "count_button"
    Then the value should equal 1