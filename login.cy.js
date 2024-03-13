/// <refrence types = *cypress* />

describe('test suit login',function(){
    before(function (){
    it ('doshboard test', ()=>{
        cy.visit("./project/login/login.html")
        
    
        cy.get('#login-email').type("saeedzandi29@gmail.com",{delay:100})
        cy.get('#login-password').type("abc123456789",{delay:100})
      cy.log('test stup user')
    })
    })
    after(function(){ 
        cy.log('Test Terddown');
        cy.reload()
    })
})
   //test keyword 
    describe('test keyword login',function(){
        
        it ('doshboard test', ()=>{
            cy.visit("./project/login/login.html")
        
            cy.get('#login-email').type("saedzandi29@gmail.com",{delay:50}).clear().type("saedzandi29@gamil.com ")
            cy.get('#login-password').type("abc123456789",{delay:50}).type('{backspace}{home}{selectall}{del}')
            .type("Abc123456789")
            cy.get('#login-password').type("{enter}")
        })
        })
        describe('test muose action',function(){
            it ('mouse action', ()=>{
                cy.visit("./project/login/login.html")
            
                cy.get('#login-email').type("saeedzandi29@gmail.com",{delay:50}).dblclick().should('have.value','saeedzandi29@gmail.com')
                cy.get('#login-password').type("abc123456789",{delay:50})

                cy.contains("Log In").click()
                cy.get('a').click()
               
            })
            })
        
        
           //* it('test key holde', ()=>{
               //* cy.visit("./project/login/login.html")
            
                //* cy.get('#login-email').type("saeedzandi29@gmail.com")
                //* .realpress(['control ',' A'])
                //* .realpress(['control ',' X'])
               //  .realpress(['control ','V'])
               //* cy.get('#login-password').type("abc123456789").click
            //* })
