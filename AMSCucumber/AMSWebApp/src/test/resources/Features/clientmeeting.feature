#Author: text@example.com
#Date: 19th Feburary 2023
#Description: This feature is used to validate client meeting info
#Keywords: date

Feature: Check meeting date for validity.

  Scenario: Validate meeting date so that it is not a prior one
		Given: A date is being entered onto meeting page
		When: A date has been selected
		And the user clicks submit
		Then: The user should get confirmation a meeting was created