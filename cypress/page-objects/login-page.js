export class LoginPage {

    login_button = ('[type="submit"]')
    reset_button = ('[type="reset"]')
    user_id_textfield = (':nth-child(1) > :nth-child(2) > input')
    password_textfield =(':nth-child(2) > :nth-child(2) > input')

    navigateToApp() {
        cy
            .visit('https://demo.guru99.com/V4')
    }

    enterLoginCredentials(valid) {
        if (valid == "valid") {
            cy
            .get(this.user_id_textfield).type('mngr432878')
            .get(this.password_textfield).type('UmurYqa')
        }
        else
            cy
            .get(this.user_id_textfield).type('rguinto@yopmail.com')
            .get(this.password_textfield).type('31!Password123')
    }

    verifyLoginButton(button) {
        if (button == "LOGIN") {
            cy.get(this.login_button).should('be.visible')
        }
        else
            cy.get(this.reset_button).should('be.visible')     
    }

    clickLoginButton(button) {
        if (button == "LOGIN") {
            cy.get(this.login_button).click()
        }
        else
            cy.get(this.reset_button).click()   
    }

 

  
}