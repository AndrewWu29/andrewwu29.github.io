import { BlogHomePage } from "./blog_homepages";

export class BlogPostsPage extends BlogHomePage{
    navigate(url: string): void {
        super.navigate(url)
    }
    verifyButtonContain(button: string, value: string, attr: string = 'href'): void {
        super.verifyButtonContain(button, value, attr)
    }
    verifySelectorContain(Selector: string, value: string): void {
        super.verifySelectorContain(Selector, value)
    }
    clickButton(button: string): void {
        super.clickButton(button)
    }
    verifyUrl(url: string){
        cy.url().should('include', url)
    }
    verifyNotExists(attr: string){
        cy.get(attr).should('not.exist')
    }
}
