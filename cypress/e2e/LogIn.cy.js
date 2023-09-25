/// <reference types="cypress"
/// <reference type="math"


Cypress.Commands.add('loginInThePassword',(username,password)=>{
  cy.visit("https://www.saucedemo.com/");
  cy.get('[placeholder="Username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('SelectItem',(Numberr)=>{
   for(let i=0 ; i<Numberr ; i+=2)
     {  
       cy.get('.btn').eq(i).click()
     }
})

Cypress.Commands.add('RandomSeleted',(randoom)=>{

for(let i=0;i<=randoom;i++)
{
  
  cy.get('btn').Math.Random(randoom).ts(1003).click();
}
})

describe('Test logIn On SauceDemo',()=>{

  it('Test on LogIn',()=>{
    
cy.loginInThePassword("standard_user","secret_sauce")
 cy.SelectItem(6)
 cy.RandomSeleted(6)
 cy.get('.shopping_cart_badge').invoke('text').should('include',"3")
 cy.get('.shopping_cart_link').click()
 cy.get('[data-test="checkout"]').click()
 cy.get('[data-test="firstName"]').type("Mostafa")
 cy.get('[data-test="lastName"]').type("Alazzam")
 cy.get('[data-test="postalCode"]').type("123")
 cy.get('[data-test="continue"]').click()
 cy.get('[data-test="finish"]').click()
 cy.get('.complete-header').invoke("text").should('contain',"Thank you for your order!")

// cy.loginInThePassword("performance_glitch_user","secret_sauce","3")     

    // cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    // cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
    // cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
    // cy.get(':nth-child(4) > .pricebar > .btn_primary').click()
    // cy.get(':nth-child(5) > .pricebar > .btn_primary').click()
    // cy.get(':nth-child(6) > .pricebar > .btn_primary').click()

    // cy.get(':nth-child(1) > .pricebar > .btn_secondary').click()
    // cy.get(':nth-child(2) > .pricebar > .btn_secondary').click()
    // cy.get(':nth-child(3) > .pricebar > .btn_secondary').click()
    // cy.get(':nth-child(4) > .pricebar > .btn_secondary').click()
    // cy.get(':nth-child(5) > .pricebar > .btn_secondary').click()
    // cy.get(':nth-child(6) > .pricebar > .btn_secondary').click()

    // cy.get('.bm-burger-button > button').click()
    // cy.get('#logout_sidebar_link').click()

    
    
     
  })
})