export class BlogHomePage{
    
    navigate(url: string){
        cy.visit(url)
    }
    clickButton(button: string){
        console.log(button)
        cy.get(button).click()
    }
    verifySelectorContain(Selector: string, value: string){
        cy.get(Selector).should('contain', value)
    }
    verifyButtonContain(button: string, value: string, attr: string = 'href'){
        cy.get(button)
            .should('have.attr', attr)
            .and('include', value)
    }
}