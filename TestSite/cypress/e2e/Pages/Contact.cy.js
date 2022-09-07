import Contact from "../PagesObjects/ContactUs.cy"

const name = "Idrak"
const surname = "Mirzoyev"
const email = "idrakmirzoyev@gmail.com"
const tite = "Test automatisation"
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet mauris mauris. Quisque facilisis lacus quis ullamcorper ornare. Cras mattis sapien augue"


describe("Contact Us", function () {

  const contact = new Contact

  it("Contact", function () {
    cy.viewport(1920, 1080);
    cy.visit("https://bestcomp.net/az/contact").scrollTo('bottom');
    cy.location('protocol').should('eq', 'https:');    
    cy.title().should('eq', 'Əlaqə');
    contact.inName().type(`${name}`);
    contact.inSurname().type(`${surname}`);
    contact.inMail().type(`${email}`);
    contact.inTitle().type(`${tite}`);
    contact.inDescription().type(`${description}`);
    cy.get(`input[type="submit"]`).click();
    
  });
});
