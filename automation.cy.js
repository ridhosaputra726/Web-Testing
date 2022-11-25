/// <reference types ="cypress" />
describe('Login/ Logout Test', () => {
    before(() => {
        cy.visit('https://itera-qa.azurewebsites.net/')
        
        
    });
    
    it('Textarea practice', () => {
        cy.get ('a').contains('Test Automation'). click()
        cy.fixture("user").then(user =>{
            const name = user.name
            const phone = user.phone
            const email = user.email
            const password = user.password
            const address = user.address

            cy.get('#name').type(name)
            cy.get('#phone').type(phone)
              cy.get('#email').type(email)
              cy.get('#password').type(password)
             cy.get('#address').type(address)
        })
       
    });

    it('CheckBox & Radio Button practice', () => {
        cy.get('#male'). click()
        cy.get('#monday'). click()
        cy.get('#tuesday'). click()
        cy.get('#wednesday'). click()
        cy.get('#thursday'). click()
        cy.get('#friday'). click()
        cy.get('#saturday'). click()
        cy.get('#sunday'). click()
        
    });
    it('DropDown practice', () => {
        cy.get('select').select('Spain').should('have.value', '2') 
        
    });

    it('CheckBox & Radio Button practice Xpath', () => {
        cy.contains('1 year').click()

        cy.contains('Selenium Webdriver').click()
        cy.contains('Cucumber').click()
        cy.contains('TestNG').click()
        cy.contains('Serenity BDD').click()
        cy.contains('Mabl').click()
        cy.contains('Testim').click()

        

    });

it('Home page', () => {
    cy.get ('a').contains('Home'). click()
    cy.get('h1').should('contain.text', 'Test Automation')

});

it('Practice page', () => {
    cy.get ('a').contains('Practice'). click()
    cy.get('[data-target="#collapse1"]'). click()
    cy.get('[data-target="#collapse2"]'). click()
    cy.get('[data-target="#collapse3"]'). click()
    cy.get('[data-target="#collapse4"]'). click()
});

it("Tutorial page", () => {
    cy.get ('a').contains('Tutorial'). click()
    cy.get('h2').should('contain.text', 'Tutorial')
    cy.get('a').contains('Sign Up'). click()
    
});

it('Sign up', () => {
    cy.get('a').contains('Sign Up'). click()
    cy.get('#FirstName').type('Ridho')
    cy.get('#Surname').type('Saputra')
    cy.get('#E_post').type('123')
    cy.get('#Mobile').type('089506825893')
    cy.get('#Username').type('ridhosaputra')
    cy.get('#Password').type('password')
    cy.get('#ConfirmPassword').type('password')
    cy.get('#submit'). click()

    
    
});
it('Login', () => {
    cy.get('a').contains('Login'). click()
    cy.get('#Username').type('ridhosaputra')
    cy.get('#Password').type('password')
    cy.get('input[name="login"]').click()
    cy.get('h3').should('contain.text', 'Welcome ridhosaputra')

});

it('Create New', () => {
    cy.get('a').contains('Create New'). click()
    cy.get('#Name').type('FinoAnggara')
    cy.get('#Company').type('PT.ABC')
    cy.get('#Address').type('Kp.jembatan jakarta timur')
    cy.get('#City').type('DKI Jakarta')
    cy.get('#Phone').type('08999999999')
    cy.get('#Email').type('finoanggara@gmail.com')
    cy.get('input[value="Create"]').click()



    
});


});