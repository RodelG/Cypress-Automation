Feature: To test Login page of Guru99

Scenario: 001_Verify Guru99 Login page redirection and page content
  Given I navigate to Guru99 login page
  Then the webpage text should include "Guru99 Bank"
  And the webpage text should include "UserID"
  And the webpage text should include "Password"
  And the button with text "LOGIN" should be displayed on the login page
  And the button with text "RESET" should be displayed on the login page
  And the webpage url should include "demo.guru99.com/V4/"

Scenario: 002_Verify Guru99 Login page login success
  Given I navigate to Guru99 login page
  When I populate userID and password using "valid" details
  And I click the button with text "LOGIN" on the login page
  Then the webpage text should include "Welcome To Manager's Page of Guru99 Bank"
  And the webpage text should include "Manger Id : mngr432878"