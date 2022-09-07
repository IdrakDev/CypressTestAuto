describe("AboutUs", function() {
    it("Page", function() {
        cy.viewport(1920, 1080);
        cy.visit("https://bestcomp.net/az");
        cy.location("protocol").should("eq", "https:");
        cy.get('ul[class="sub-menu"]').invoke('show').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/az/about_us"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/en/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/ru/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/az/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/az/prizes"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/en/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/ru/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/az/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/az/resources"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/en/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/ru/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/az/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/az/news"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/en/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/ru/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/az/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/az/testimonials"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/en/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/ru/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/az/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/az/contact"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/en/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/ru/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/az/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/az/career"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/en/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/ru/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/az/lang"]').click({force:true, multiple: true});
    })
})