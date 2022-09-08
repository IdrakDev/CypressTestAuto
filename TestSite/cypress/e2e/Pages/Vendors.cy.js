import Lang from '../PagesObjects/Language.cy'



describe ("Vendors", function() {

    const lang = new Lang

    it("Page", function() {
        cy.viewport(1920, 1080);
        cy.visit("https://bestcomp.net/az");
        cy.location("protocol").should("eq", "https:");
        cy.get('a[href="https://bestcomp.net/az/vendors"]').click({force:true, multiple: true});
        lang.inEn().wait(3000);
        lang.inRu().wait(3000);
        lang.inAZ().wait(3000);
    })
});