describe("AllPages", function () {
  it("Pages", function () {
    cy.viewport(1920, 1080);
    cy.visit("https://bestcomp.net/az");
    cy.location("protocol").should("eq", "https:");
    cy.get('ul[class="sub-menu"]').invoke('show').click({force:true, multiple: true});
    cy.get('a[href="https://bestcomp.net/az/menu/3/heller-ve-xidmetler"]').click({force:true, multiple: true});
    cy.get('ul[class="sub-menu"]').invoke('show').click({force:true, multiple: true});
    cy.get('a[href="https://bestcomp.net/az/menu/detail/7/sistem-inteqrasiyasi"]').click({force:true, multiple: true});
  });
});