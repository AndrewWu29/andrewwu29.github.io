//import { htmlPrefilter } from "cypress/types/jquery"
import { BlogPostsPage } from "../blog_pages/blog_posts"

const postsPage = new BlogPostsPage()

describe('ArchivesPage Suite', () => {
    beforeEach(function () {
        cy.fixture('blogpostspage.json').as('blogpostspage')
    })
    it('Use Logo button to Homepage test in en', function (){
        postsPage.navigate('/archives')
        postsPage.verifyUrl('/archives')
        postsPage.verifyButtonContain(this.blogpostspage.LogoButton, this.blogpostspage.baseUrl)
        postsPage.clickButton(this.blogpostspage.LogoButton)
        postsPage.verifyUrl(this.blogpostspage.baseUrl)
    })
    it('Check headings in en', function (){
        postsPage.navigate('/archives')
        cy.get('h1').should('contain.text', 'Archives')
        cy.get('h2').should('have.class', 'archive-year-header')
        cy.get('h3').should('have.class', 'archive-month-header')
        cy.get('h3').should('have.class', 'archive-entry-title')
    })
    it('Check class attributes in en', function (){
        postsPage.navigate('/archives')
        cy.get('div').should('have.class', 'archive-year')
        cy.get('div').should('have.class', 'archive-month')
        cy.get('div').should('have.class', 'archive-posts')
        cy.get('div').should('have.class', 'archive-entry')
        cy.get('div').should('have.class', 'archive-meta')
    })
    it('Check a attributes in en', function (){
        postsPage.navigate('/archives')
        cy.get('a').should('have.class', 'entry-link')
        cy.get('a').should('have.attr','href')
        cy.get('a')
            .invoke('attr', 'href')
            .should('not.have.string', '/zh-tw/')
    })
    it('Check span attributes in en', function (){
        postsPage.navigate('/archives')
        cy.get('#top > main > div > div:nth-child(2) > div > div > div > span')
            .invoke('attr', 'title')
            .should('match', /^((19|20)?[0-9]{2}[-](0?[1-9]|1[012])[-](0?[1-9]|[12][0-9]|3[01])[ ](0[012]|0[1-9]|1[0-9]|2[0-4])[:]([0-6][0-9])[:]([0-6][0-9])[ ][+]0{4}[ ]UTC)/)
    })
    it('Check contains in en', function (){
        postsPage.navigate('/archives')
        cy.contains(/^((January|February|March|April|May|June|July|August|September|October|November|December) (0?[1-9]|[12][0-9]|3[01]), (19|20)?[0-9]{2})/)
    })
    it('Check yearly archive-count attributes in en', function (){
        postsPage.navigate('/archives')
        cy.get('.archive-year-header > .archive-count').first().invoke('text').then(parseFloat).then(archiveCount =>{
            cy.log('Yearly archiveCount', archiveCount)
            cy.get('.archive-year').first().find('a').its('length').should('eq', archiveCount)
        })
    })
    it('Check monthly archive-count attributes in en', function (){
        postsPage.navigate('/archives')
        cy.get('.archive-month-header > .archive-count').first().invoke('text').then(parseFloat).then(archiveCount =>{
            cy.log('Monthly archiveCount', archiveCount)
            cy.get('.archive-month').first().find('a').its('length').should('eq', archiveCount)
        })
    })
    it('Check posts links in en', function (){
        postsPage.navigate('/archives')
        cy.get('a[class="entry-link"]').first().invoke('attr', 'href').then(el =>{
            cy.log('First link url:', el)
            cy.get('a[class="entry-link"]').first().click()
            cy.url().should('include', el)
        })
    })
    it('Check a post back from archives links in en', function (){
        postsPage.navigate('/archives')
        cy.get('a[class="entry-link"]').first().invoke('attr', 'href').then(el =>{
            cy.log('First link url:', el)
            cy.get('a[class="entry-link"]').first().click()
            cy.go('back')
            cy.url().should('not.include', el)
            cy.url().should('include', '/archives')
        })
    })
    it('Redirect to another Subpages testing use menu button in en', function (){
        cy.wrap(this.blogpostspage.archivesPagesList_en).each((index) =>{
            postsPage.navigate('/archives')
            let pageName = 'this.blogpostspage.' + index
            postsPage.clickButton(eval(pageName))
            postsPage.verifySelectorContain('h1', index.toString())
            postsPage.verifyUrl(index.toString().toLocaleLowerCase())
        })
    })

    // Test cases in zh-tw
    it('Use Logo button to Homepage test in zh-tw', function (){
        postsPage.navigate('/zh-tw/archives')
        postsPage.verifyUrl('/zh-tw/archives')
        postsPage.verifyButtonContain(this.blogpostspage.LogoButton, this.blogpostspage.baseUrl)
        postsPage.clickButton(this.blogpostspage.LogoButton)
        postsPage.verifyUrl(this.blogpostspage.baseUrl)
    })
    it('Check headings in zh-tw', function (){
        postsPage.navigate('/zh-tw/archives')
        cy.get('h1').should('contain.text', '歸檔')
        cy.get('h2').should('have.class', 'archive-year-header')
        cy.get('h3').should('have.class', 'archive-month-header')
        cy.get('h3').should('have.class', 'archive-entry-title')
    })
    it('Check class attributes in zh-tw', function (){
        postsPage.navigate('/zh-tw/archives')
        cy.get('div').should('have.class', 'archive-year')
        cy.get('div').should('have.class', 'archive-month')
        cy.get('div').should('have.class', 'archive-posts')
        cy.get('div').should('have.class', 'archive-entry')
        cy.get('div').should('have.class', 'archive-meta')
    })
    it('Check a attributes in zh-tw', function (){
        postsPage.navigate('/zh-tw/archives')
        cy.get('a').should('have.class', 'entry-link')
        cy.get('a').should('have.attr','href')
        cy.get('a')
            .invoke('attr', 'href')
            .should('have.string', '/zh-tw/')
    })
    it('Check span attributes in zh-tw', function (){
        postsPage.navigate('/zh-tw/archives')
        cy.get('#top > main > div:nth-child(2) > div:nth-child(2) > div > div > div > span')
            .invoke('attr', 'title')
            .should('match', /^((19|20)?[0-9]{2}[-](0?[1-9]|1[012])[-](0?[1-9]|[12][0-9]|3[01])[ ](0[012]|0[1-9]|1[0-9]|2[0-4])[:]([0-6][0-9])[:]([0-6][0-9])[ ][+]0{4}[ ]UTC)/)
    })
    it('Check contains in zh-tw', function (){
        postsPage.navigate('/zh-tw/archives')
        cy.contains(/^((19|20)?[0-9]{2} (January|February|March|April|May|June|July|August|September|October|November|December) (0?[1-9]|[12][0-9]|3[01]))/)
    })
    it('Check yearly archive-count attributes in zh-tw', function (){
        postsPage.navigate('/zh-tw/archives')
        cy.get('.archive-year-header > .archive-count').first().invoke('text').then(parseFloat).then(archiveCount =>{
            cy.log('Yearly archiveCount', archiveCount)
            cy.get('.archive-year').first().find('a').its('length').should('eq', archiveCount)
        })
    })
    it('Check monthly archive-count attributes in zh-tw', function (){
        postsPage.navigate('/zh-tw/archives')
        cy.get('.archive-month-header > .archive-count').first().invoke('text').then(parseFloat).then(archiveCount =>{
            cy.log('Monthly archiveCount', archiveCount)
            cy.get('.archive-month').first().find('a').its('length').should('eq', archiveCount)
        })
    })
    it('Check posts links in zh-tw', function (){
        postsPage.navigate('/zh-tw/archives')
        cy.get('a[class="entry-link"]').first().invoke('attr', 'href').then(el =>{
            cy.log('First link url:', el)
            cy.get('a[class="entry-link"]').first().click()
            cy.url().should('include', el)
        })
    })
    it('Check a post back from archives links in zh-tw', function (){
        postsPage.navigate('/zh-tw/archives')
        cy.get('a[class="entry-link"]').first().invoke('attr', 'href').then(el =>{
            cy.log('First link url:', el)
            cy.get('a[class="entry-link"]').first().click()
            cy.go('back')
            cy.url().should('not.include', el)
            cy.url().should('include', '/archives')
        })
    })
    it('Redirect to another Subpages testing use menu button in zh-tw', function (){
        let indexCount = 0
        cy.wrap(this.blogpostspage.archivesPagesList_en).each((index) =>{
            postsPage.navigate('/zh-tw/archives')
            let pageName = 'this.blogpostspage.' + index
            postsPage.clickButton(eval(pageName))
            if (index.toString() === 'Categories') {
                let containValue = 'Categories'
                cy.log(containValue)
                postsPage.verifySelectorContain('h1', containValue)
                cy.url().should('includes', this.blogpostspage.baseUrl_zhtw + containValue.toLocaleLowerCase())
                indexCount += 1
            } else {
                cy.log(this.blogpostspage.archivesPagesList_zhtw[indexCount])
                postsPage.verifySelectorContain('h1', this.blogpostspage.archivesPagesList_zhtw[indexCount].toString())
                cy.url().should('includes', this.blogpostspage.baseUrl_zhtw + this.blogpostspage.archivesPagesList_en[indexCount].toString().toLocaleLowerCase())
                indexCount += 1
            }
        })
    })
})