class Contact {
    inName(){
        return cy.get(`input[name="name"]`)
    }
    inSurname(){
        return cy.get(`input[name="surname"]`)
    }
    inMail(){
        return cy.get(`input[name="email"]`)
    }
    inTitle(){
        return cy.get(`input[name="subject"]`)
    }
    inDescription(){
        return cy.get(`textarea[name="message"]`)
    }
}
export default Contact