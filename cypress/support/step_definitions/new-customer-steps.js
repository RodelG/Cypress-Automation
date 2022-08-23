import { NewCustomerPage } from "../../page-objects/new-customer-page"
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const newCustomerPage = new NewCustomerPage()

When('I add new customer details using {string} data', (valid_invalid) => {
    newCustomerPage.newCustomerDetails(valid_invalid);
})
