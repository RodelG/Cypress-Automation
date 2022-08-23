export class CommonPage {

    
    waitUntilPageContains(element_name) {
        cy
            .get(element_name).should('be.visible')
            .should('exist')
    }

    clickAnchorByText(anchorText) {
        cy
            .get(`a:contains("${anchorText}")`)
            .should('have.length', 1)
            .click()
    }

    clickSidebarBytext(sidebarText) {
        cy
            .wait(3000)
            .get(`a:contains("${sidebarText}")`)
            .should('have.length', 1)
            .click()
    }

    clickButtonByText(buttonText) {
        cy
            .get(`button:contains("${buttonText}")`)
            .should('have.length', 1)
            .click()
    }

    verifyButtonByText(buttonText) {
        cy
            .get(`button:contains("${buttonText}")`)
            .should('be.visible')
            .should('exist')
    }

    verifyButtonByTextInput(buttonText) {
        cy
            .get(`input:value:contains("${buttonText}")`)
            .should('be.visible')
            .should('exist')
    }

    verifyUrlShouldContains(url) {
        cy
            .url()
            .should('contains', url)
    }

    verifyTextExistence(text, doesExist = true) {
        if (doesExist) {
            cy
                .contains(text)
                .should('exist')
        }
        else {
            cy
                .contains(text)
                .should('not.exist')
        }
    }
}