//import { htmlPrefilter } from "cypress/types/jquery"
import { BlogPostsPage } from "../blog_pages/blog_posts"

const postsPage = new BlogPostsPage()

describe('Categories Suite', () => {
    beforeEach(function () {
        cy.fixture('blogpostspage.json').as('blogpostspage')
    })
    it('Use Logo button to Homepage test in en', function (){
        postsPage.navigate('/categories')
        postsPage.verifyUrl('/categories')
        postsPage.verifyButtonContain(this.blogpostspage.LogoButton, this.blogpostspage.baseUrl)
        postsPage.clickButton(this.blogpostspage.LogoButton)
        postsPage.verifyUrl(this.blogpostspage.baseUrl)
    })
    it('Check headings in en', function (){
        postsPage.navigate('/categories')
        cy.get('h1').should('contain.text', 'Categories')
    })
    it('Check basic category in en', function (){
        postsPage.navigate('/categories')
        cy.get('.terms-tags').find('a').contains('Basic')
    })
    it('Check the category posts count in en', function (){
        postsPage.navigate('/categories')
        cy.get('#top > main > ul > li:nth-child(1) > a > sup > strong > sup').invoke('text').then(parseFloat).then(categoryCount =>{
            cy.get('#top > main > ul > li:nth-child(1) > a').invoke('text').then(categoryName =>{
                cy.log('categoryCount', categoryCount)
                cy.get('.terms-tags > :nth-child(1) > a').click()
                let categoryHeadings = categoryName.replace(/[\s\d+]/g, '')
                cy.get('h1').should('contain.text', categoryHeadings)
                cy.get('.entry-link').should('have.length', categoryCount)
                cy.url().should('include', categoryHeadings.toLocaleLowerCase())
            })
        })
    })
    it('Check from a category page to a post in en', function (){
        postsPage.navigate('/categories')
        cy.get('.terms-tags > :nth-child(1) > a').click()
        cy.get('#top > main > article > header > h2').invoke('text').then(header =>{
            cy.get('.entry-link').first().click()
            cy.get('.post-title').invoke('text').should('include', header)
        })
    })
    it('Check back to categories page from a category page in en', function (){
        postsPage.navigate('/categories')
        cy.get('.terms-tags > :nth-child(1) > a').click()
        cy.get('.breadcrumbs > [href="http://localhost:1313/categories/"]').click()
        cy.url().should('include', 'categories')
    })
    it('Check back to home page from a category page in en', function (){
        postsPage.navigate('/categories')
        cy.get('.terms-tags > :nth-child(1) > a').click()
        cy.get('.breadcrumbs > [href="http://localhost:1313/"]').click()
        postsPage.verifyUrl(this.blogpostspage.baseUrl)
    })
    it('Redirect to another Subpages testing use menu button in en', function (){
        cy.wrap(this.blogpostspage.categoriesPagesList_en).each((index) =>{
            postsPage.navigate('/categories')
            let pageName = 'this.blogpostspage.' + index
            postsPage.clickButton(eval(pageName))
            postsPage.verifySelectorContain('h1', index.toString())
            postsPage.verifyUrl(index.toString().toLocaleLowerCase())
        })
    })
    // Test cases in zh-tw
    it('Use Logo button to Homepage test in zh-tw', function (){
        postsPage.navigate('/zh-tw/categories')
        postsPage.verifyUrl('/zh-tw/categories')
        postsPage.verifyButtonContain(this.blogpostspage.LogoButton, this.blogpostspage.baseUrl)
        postsPage.clickButton(this.blogpostspage.LogoButton)
        postsPage.verifyUrl(this.blogpostspage.baseUrl + this.blogpostspage.baseUrl_zhtw)
    })
    it('Check headings in zh-tw', function (){
        postsPage.navigate('/zh-tw/categories')
        cy.get('h1').should('contain.text', 'Categories')
    })
    it('Check basic category in zh-tw', function (){
        postsPage.navigate('/zh-tw/categories')
        cy.get('.terms-tags').find('a').contains('開箱')
    })
    it('Check the category posts count in zh-tw', function (){
        postsPage.navigate('/zh-tw/categories')
        cy.get('#top > main > ul > li:nth-child(1) > a > sup > strong > sup').invoke('text').then(parseFloat).then(categoryCount =>{
            cy.get('#top > main > ul > li:nth-child(1) > a').invoke('text').then(categoryName =>{
                cy.log('categoryCount', categoryCount)
                cy.get('.terms-tags > :nth-child(1) > a').click()
                let categoryHeadings = categoryName.replace(/[\s\d+]/g, '')
                cy.get('h1').should('contain.text', categoryHeadings)
                cy.get('.entry-link').should('have.length', categoryCount)
                cy.url().should('include', categoryHeadings.toLocaleLowerCase())
            })
        })
    })
    it('Check from a category page to a post in zh-tw', function (){
        postsPage.navigate('/zh-tw/categories')
        cy.get('.terms-tags > :nth-child(1) > a').click()
        cy.get('#top > main > article > header > h2').invoke('text').then(header =>{
            cy.get('.entry-link').first().click()
            cy.get('.post-title').invoke('text').should('include', header)
        })
    })
    it('Check back to categories page from a category page in zh-tw', function (){
        postsPage.navigate('/zh-tw/categories')
        cy.get('.terms-tags > :nth-child(1) > a').click()
        cy.get('.breadcrumbs > [href="http://localhost:1313/zh-tw/categories/"]').click()
        cy.url().should('include', '/zh-tw/categories')
    })
    it('Check back to home page from a category page in zh-tw', function (){
        postsPage.navigate('/zh-tw/categories')
        cy.get('.terms-tags > :nth-child(1) > a').click()
        cy.get('.breadcrumbs > [href="http://localhost:1313/zh-tw/"]').click()
        postsPage.verifyUrl(this.blogpostspage.baseUrl + '/zh-tw/')
    })
    it('Redirect to another Subpages testing use menu button in zh-tw', function (){
        let indexCount = 0
        cy.wrap(this.blogpostspage.categoriesPagesList_en).each((index) =>{
            postsPage.navigate('/zh-tw/categories')
            let pageName = 'this.blogpostspage.' + index
            postsPage.clickButton(eval(pageName))
            cy.log(this.blogpostspage.categoriesPagesList_zhtw[indexCount])
            postsPage.verifySelectorContain('h1', this.blogpostspage.categoriesPagesList_zhtw[indexCount].toString())
            cy.url().should('includes', this.blogpostspage.baseUrl_zhtw + this.blogpostspage.categoriesPagesList_en[indexCount].toString().toLocaleLowerCase())
            indexCount += 1
        })
    })
})