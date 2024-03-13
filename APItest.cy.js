
describe('type information user',()=>{
    it('usre API Test' ,()=>{
      
        cy.request('https://restcountries.com/v3.1/lang/spanish').then(($response)=>{

        expect($response.status).to.eq(200)
        expect($response.body[3].capital[3])
    })

        })
    })

