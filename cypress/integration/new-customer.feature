Feature: To test new customer page of Guru99

Scenario: 001_Verify Guru99 new customer page redirection and page content
  Given I navigate to Guru99 login page
  When I populate userID and password using "valid" details
  And I click the button with text "LOGIN" on the login page
  Then the webpage text should include "Welcome To Manager's Page of Guru99 Bank"
  When I click the link with text "New Customer" on the webpage
  Then the webpage text should include "Add New Customer"
  And the webpage text should include "Customer Name"
  And the webpage text should include "Gender"
  And the webpage text should include "Date of Birth"
  And the webpage text should include "Address"
  And the webpage text should include "City"
  And the webpage text should include "State"
  And the webpage text should include "PIN"
  And the webpage text should include "Mobile Number"
  And the webpage text should include "E-mail"
  And the webpage text should include "Password"
  And the button with text "LOGIN" should be displayed on the login page
  And the button with text "RESET" should be displayed on the login page
  And the webpage url should include "https://demo.guru99.com/V4/manager/addcustomerpage"

Scenario: 002_Verify Guru99 add new customer was successful when using valid details
  Given I navigate to Guru99 login page
  When I populate userID and password using "valid" details
  And I click the button with text "LOGIN" on the login page
  Then the webpage text should include "Welcome To Manager's Page of Guru99 Bank"
  When I click the link with text "New Customer" on the webpage
  And I add new customer details using "valid" data
  Then the webpage text should include "Customer Registered Successfully!!!"
  And the webpage url should include "https://demo.guru99.com/V4/manager/CustomerRegMsg"

Scenario: 003_Verify add new customer was unsuccessful when using invalid details
  Given I navigate to Guru99 login page
  When I populate userID and password using "valid" details
  And I click the button with text "LOGIN" on the login page
  Then the webpage text should include "Welcome To Manager's Page of Guru99 Bank"
  When I click the link with text "New Customer" on the webpage
  And I add new customer details using "invalid" data
  Then the webpage text should include "Numbers are not allowed"
  And the webpage text should include "Special characters are not allowed"
  And the webpage text should include "First character can not have space"
  And the webpage text should include "PIN Code must have 6 Digits"
  And the webpage text should include "Characters are not allowed"
  And the webpage text should include "Email-ID is not valid"

Scenario: 004_Verify add new customer will display correct error message when user provide empty data
  Given I navigate to Guru99 login page
  When I populate userID and password using "valid" details
  And I click the button with text "LOGIN" on the login page
  Then the webpage text should include "Welcome To Manager's Page of Guru99 Bank"
  When I click the link with text "New Customer" on the webpage
  And I add new customer details using "empty" data
  Then the webpage text should include "Customer name must not be blank"
  And the webpage text should include "Date Field must not be blank"
  And the webpage text should include "Address Field must not be blank"
  And the webpage text should include "City Field must not be blank"
  And the webpage text should include "State must not be blank"
  And the webpage text should include "PIN Code must not be blank"
  And the webpage text should include "Mobile no must not be blank"
  And the webpage text should include "Email-ID must not be blank"
  And the webpage text should include "Password must not be blank"