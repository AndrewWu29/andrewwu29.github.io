import {BlogHomePage} from "./blog_pages/blog_homepages"

const homePage = new BlogHomePage()

describe('HomePage Suite', () => {
    beforeEach(function () {
        cy.fixture('bloghomepage.json').as('bloghomepage')
    })
    it('Homepage test in en', function (){
        homePage.navigate('/')
        homePage.verifySelectorContain(this.bloghomepage.Language, '中文')
        homePage.verifyButtonContain(this.bloghomepage.Language, 'zh-tw')
        cy.wrap(this.bloghomepage.pagesList_en).each((index) =>{
            let selectorName = 'this.bloghomepage.' + index
            homePage.verifySelectorContain(eval(selectorName), index.toString())
            homePage.verifyButtonContain(eval(selectorName), index.toString().toLocaleLowerCase())
        })
        cy.wrap(this.bloghomepage.pageButtons).each((index) =>{
            let buttonName = 'this.bloghomepage.Button' + index
            let link = 'this.bloghomepage.Link' + index
            homePage.verifyButtonContain(eval(buttonName), eval(link))
        })
    })
    it('Homepage test in zh-tw', function (){
        homePage.navigate(this.bloghomepage.baseUrl_zhtw)
        let indexCount = 0
        homePage.verifySelectorContain(this.bloghomepage.Language, 'English')
        homePage.verifyButtonContain(this.bloghomepage.Language, 'localhost')
        cy.wrap(this.bloghomepage.pagesList_en).each((index) =>{
            let selectorName = 'this.bloghomepage.' + index
            homePage.verifySelectorContain(eval(selectorName), this.bloghomepage.pagesList_zhtw[indexCount])
            homePage.verifyButtonContain(eval(selectorName), index.toString().toLocaleLowerCase())
            indexCount += 1
        })
        cy.wrap(this.bloghomepage.pageButtons).each((index) =>{
            let buttonName = 'this.bloghomepage.Button' + index
            let link = 'this.bloghomepage.Link' + index
            homePage.verifyButtonContain(eval(buttonName), eval(link))
        })
    })
    it('Language change test en to zhtw', function (){
        homePage.navigate('/')
        homePage.clickButton(this.bloghomepage.Language)
        homePage.verifySelectorContain(this.bloghomepage.Language, 'English')
    })
    it('Language change test zhtw to en', function (){
        homePage.navigate(this.bloghomepage.baseUrl_zhtw)
        homePage.clickButton(this.bloghomepage.Language)
        homePage.verifySelectorContain(this.bloghomepage.Language, '中文')
    })
    it('Homepage redirect to Subpages testing use menu button in en', function (){
        cy.wrap(this.bloghomepage.pagesList_en).each((index) =>{
            homePage.navigate('/')
            let pageName = 'this.bloghomepage.' + index
            homePage.clickButton(eval(pageName))
            homePage.verifySelectorContain('h1', index.toString())
            cy.url().should('includes', index.toString().toLocaleLowerCase())
        })
    })
    it('Homepage redirect to Subpages testing use menu button in zh-tw', function (){
        let indexCount = 0
        cy.wrap(this.bloghomepage.pagesList_en).each((index) =>{
            homePage.navigate(this.bloghomepage.baseUrl_zhtw)
            let pageName = 'this.bloghomepage.' + index
            homePage.clickButton(eval(pageName))
            if (index.toString() === 'Categories') {
                let containValue = 'Categories'
                cy.log(containValue)
                homePage.verifySelectorContain('h1', containValue)
                cy.url().should('includes', this.bloghomepage.baseUrl_zhtw + containValue.toLocaleLowerCase())
                indexCount += 1
            } else {
                cy.log(this.bloghomepage.pagesList_zhtw[indexCount])
                homePage.verifySelectorContain('h1', this.bloghomepage.pagesList_zhtw[indexCount].toString())
                cy.url().should('includes', this.bloghomepage.baseUrl_zhtw + this.bloghomepage.pagesList_en[indexCount].toString().toLocaleLowerCase())
                indexCount += 1
            }
        })
    })
    it('Subpages redirect to Homepage testing use Logo button in en', function (){
        cy.wrap(this.bloghomepage.pagesList_en).each((index) =>{
            homePage.navigate(this.bloghomepage.baseUrl_en + index.toString().toLocaleLowerCase() + '/')
            homePage.clickButton(this.bloghomepage.LogoButton)
            homePage.verifySelectorContain('h1', 'Andrew Wu')
            cy.url().should('includes', this.bloghomepage.baseUrl_en)
        })
    })
    it('Subpages redirect to Homepage testing use Logo button in zh-tw', function (){
        cy.wrap(this.bloghomepage.pagesList_en).each((index) =>{
            homePage.navigate(this.bloghomepage.baseUrl_zhtw + index.toString().toLocaleLowerCase() + '/')
            homePage.clickButton(this.bloghomepage.LogoButton)
            homePage.verifySelectorContain('h1', 'Andrew Wu')
            cy.url().should('includes', this.bloghomepage.baseUrl_zhtw)
        })
    })
    it('RSS feed testing in en and zh-tw', function (){
        cy.wrap(this.bloghomepage.bothUrl).each((index) =>{
            cy.request(index.toString())
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).have.contains(this.bloghomepage.baseUrl + index)
            })
        })
    })
})