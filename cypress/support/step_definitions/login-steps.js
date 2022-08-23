import { LoginPage } from "../../page-objects/login-page"
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const loginPage = new LoginPage()

Given('I navigate to Guru99 login page', () => {
  loginPage.navigateToApp();
})

Then('the button with text {string} should be displayed on the login page', (buttonTextToVerify) => {
  loginPage.verifyLoginButton(buttonTextToVerify)
})

When('I click the button with text {string} on the login page', (clickButton) => {
  loginPage.clickLoginButton(clickButton)
})

When('I populate userID and password using {string} details', (valid_invalid) => {
  loginPage.enterLoginCredentials(valid_invalid)
})