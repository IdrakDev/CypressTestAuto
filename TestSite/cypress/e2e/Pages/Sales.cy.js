import Lang from '../PagesObjects/Language.cy'
import Scroll from '../PagesObjects/ScrollTo.cy'



describe("Sales", function () {

  const lang = new Lang

  const scroll = new Scroll




    it("Page", function () {
      cy.viewport(1920, 1080);
      cy.visit("https://bestcomp.net/az");
      cy.location("protocol").should("eq", "https:");
      cy.get('ul[class="sub-menu"]').invoke('show').click({force:true, multiple: true});
      cy.get('a[href="https://bestcomp.net/az/menu/sales/all/4/satis"]').click({force:true, multiple: true});
      lang.inEn();
      scroll.Center().wait(3000)
      lang.inRu();
      scroll.Center().wait(3000)
      lang.inAZ();
      scroll.Center().wait(3000)
      cy.get('a[href="https://bestcomp.net/az/menu/sales/detail/42/korporativ-satis"]').click({force:true, multiple: true});
      lang.inEn();
      scroll.Center().wait(3000)
      lang.inRu();
      scroll.Center().wait(3000)
      lang.inAZ();
      scroll.Center().wait(3000)
      cy.get('a[href="https://bestcomp.net/az/menu/sales/detail/43/perakende-satis"]').click({force:true, multiple: true});
      lang.inEn();
      scroll.Center().wait(3000)
      lang.inRu();
      scroll.Center().wait(3000)
      lang.inAZ();
      scroll.Center().wait(3000)
      cy.contains(' SATIŞ NÖQTƏLƏRİ').click({force:true, multiple: true});
      cy.get('a[href="https://bestel.az/"]').click({force:true, multiple: true});
      cy.get('a[href="https://bestservice.az/"]').click({force:true, multiple: true});
    });
  });