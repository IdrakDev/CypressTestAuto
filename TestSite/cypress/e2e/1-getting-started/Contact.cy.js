describe("Contact Us", function () {
  it("Contact", function () {
    cy.viewport(1920, 1080);
    cy.visit("https://bestcomp.net/az/contact");
    cy.location('protocol').should('eq', 'https:');    
    cy.title().should('eq', 'Əlaqə');
    cy.get(`input[name="name"]`).type("Idrak");
    cy.get(`input[name="surname"]`).type("Mirzeyev");
    cy.get(`input[name="email"]`).type("idrakmirzoyev@gmail.com");
    cy.get(`input[name="subject"]`).type("Test automatisation");
    cy.get(`textarea[name="message"]`).type("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet mauris mauris. Quisque facilisis lacus quis ullamcorper ornare. Cras mattis sapien augue,");
    cy.get(`input[type="submit"]`).click();
    
  });
});
