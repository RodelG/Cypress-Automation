import { CommonPage } from "../../page-objects/common-page"
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const commonPage = new CommonPage()

Then('the webpage text should include {string}', (itemText) => {
  commonPage.verifyTextExistence(itemText, true)
})

Then('the webpage text should not include {string}', (itemText) => {
  commonPage.verifyTextExistence(itemText, false)
})

Then('the webpage url should include {string}', (url) => {
  commonPage.verifyUrlShouldContains(url)
})

When('I click the button with text {string} on the webpage', (buttonTextToClick) => {
  commonPage.clickButtonByText(buttonTextToClick)
})

Then('the button with text {string} should be displayed on the webpage', (buttonTextToVerify) => {
  commonPage.verifyButtonByText(buttonTextToVerify)
})

Then('the input button with text {string} should be displayed on the webpage', (buttonTextToVerify) => {
  commonPage.verifyButtonByTextInput(buttonTextToVerify)
})



When('I click the link with text {string} on the webpage', (linkTextToClick) => {
  commonPage.clickAnchorByText(linkTextToClick)
})

Then(`I see {string} in the title`, title => {
  cy.title().should("include", title)
})



