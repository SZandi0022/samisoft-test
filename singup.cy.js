

/// <refrence types = *cypress* />
describe('type information user',()=>{
    it('usre' ,()=>{
        cy.visit("./project/signUp/signup.html")
       
     cy.get('#email').type('saeedzandi29@gmail.com').should('have.value','saeedzandi29@gmail.com')
      cy.get('#firstname').type('saeed')  
      cy.get('#lastname').type('zandi')
     cy.get("#birthdate").click()
        cy.get("#phone").type("09384281111")
        cy.get('#password').type('123456')
        cy.get('#password-confirm').type("123456")

        cy.get('button').click()



    })

})