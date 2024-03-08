/// <refrence types = *cypress* />
describe('test suit login',function(){
    it ('doshboard test', ()=>{
        cy.visit("./login/login.html")
    
        cy.get('#login-email').type("saeedzandi29@gmail.com")
        cy.get('#login-password').type("abc123456789")
        cy.get("button[name=Log In]").click()
    })
    })