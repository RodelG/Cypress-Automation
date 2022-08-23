export class NewCustomerPage {

    customer_name_textfield = (':nth-child(4) > :nth-child(2) > input')
    gender_radio_button_male = ('[value="m"]')
    gender_radio_button_female = ('[value="f"]')
    dob_selector = ('#dob')
    address_textarea = ('textarea')
    city_textfield = (':nth-child(8) > :nth-child(2) > input')
    state_textfield = (':nth-child(9) > :nth-child(2) > input')
    pin_textfield = (':nth-child(10) > :nth-child(2) > input')
    mobile_number_textfield = (':nth-child(11) > :nth-child(2) > input')
    email_textfield = (':nth-child(12) > :nth-child(2) > input')
    password_textfield = (':nth-child(13) > :nth-child(2) > input')
    submit_button= ('[type="submit"]')

    newCustomerDetails(valid_invalid) {
        cy.fixture('users').then((user)  => {
            if (valid_invalid == "valid") {
                cy
                .get(this.customer_name_textfield).type(user[0].customerName).should('have.value', user[0].customerName)
                .get(this.gender_radio_button_male).click()
                .should('have.value', user[0].gender)
                .get(this.dob_selector).type(user[0].dob).should('have.value', user[0].dob)
                .get(this.address_textarea).type(user[0].address).should('have.value', user[0].address)
                .get(this.city_textfield).type(user[0].city).should('have.value', user[0].city)
                .get(this.state_textfield).type(user[0].state).should('have.value', user[0].state)
                .get(this.pin_textfield).type(user[0].pin).should('have.value', user[0].pin)
                .get(this.mobile_number_textfield).type(user[0].mobileNumber).should('have.value', user[0].mobileNumber)
                .get(this.email_textfield).type(user[0].email).should('have.value', user[0].email)
                .get(this.password_textfield).type(user[0].password).should('have.value', user[0].password)
                }
            else if (valid_invalid == "invalid") {
                cy
                .get(this.customer_name_textfield).type(user[1].customerName).should('have.value', user[1].customerName)
                .get(this.gender_radio_button_female).click()
                .should('have.value', user[1].gender)
                .get(this.address_textarea).type(user[1].address).should('have.value', user[1].address)
                .get(this.city_textfield).type(user[1].city).should('have.value', user[1].city)
                .get(this.state_textfield).type(user[1].state).should('have.value', user[1].state)
                .get(this.pin_textfield).type(user[1].pin).should('have.value', user[1].pin)
                .get(this.mobile_number_textfield).type(user[1].mobileNumber).should('have.value', user[1].mobileNumber)
                .get(this.email_textfield).type(user[1].email).should('have.value', user[1].email)
                .get(this.password_textfield).type(user[1].password).should('have.value', user[1].password)
                }
            else {
                cy
                .get(this.customer_name_textfield).click()
                .get(this.dob_selector).click()
                .get(this.address_textarea).click()
                .get(this.city_textfield).click()
                .get(this.state_textfield).click()
                .get(this.pin_textfield).click()
                .get(this.mobile_number_textfield).click()
                .get(this.email_textfield).click()
                .get(this.password_textfield).click() 
            }
            cy
            .get(this.submit_button).click()
        })  
    }


}