describe ("Vendors", function() {
    it("Page", function() {
        cy.viewport(1920, 1080);
        cy.visit("https://bestcomp.net/az");
        cy.location("protocol").should("eq", "https:");
        cy.get('a[href="https://bestcomp.net/az/vendors"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/en/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/ru/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/az/lang"]').click({force:true, multiple: true});
    })
});