import Lang from '../PagesObjects/Language.cy'
import Scroll from '../PagesObjects/ScrollTo.cy'


describe("AboutUs", function() {

    const lang = new Lang
    const scroll= new Scroll
    it("Page", function() {
        cy.viewport(1920, 1080);
        cy.visit("https://bestcomp.net/az");
        cy.location("protocol").should("eq", "https:");
        cy.get('ul[class="sub-menu"]').invoke('show').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/az/about_us"]').click({force:true, multiple: true});
        lang.inEn();
        scroll.Center().wait(3000);
        lang.inRu();
        scroll.Center().wait(3000);
        lang.inAZ();
        scroll.Center().wait(3000);
        cy.get('a[href="https://bestcomp.net/az/prizes"]').click({force:true, multiple: true});
        lang.inEn();
        scroll.Center().wait(3000);
        lang.inRu();
        scroll.Center().wait(3000);
        lang.inAZ();
        scroll.Center().wait(3000);
        cy.get('a[href="https://bestcomp.net/az/resources"]').click({force:true, multiple: true});
        lang.inEn();
        scroll.Center().wait(3000);
        lang.inRu();
        scroll.Center().wait(3000);
        lang.inAZ();
        scroll.Center().wait(3000);
        cy.get('a[href="https://bestcomp.net/az/news"]').click({force:true, multiple: true});
        lang.inEn();
        scroll.Center().wait(3000);
        lang.inRu();
        scroll.Center().wait(3000);
        lang.inAZ();
        scroll.Center().wait(3000);
        cy.get('a[href="https://bestcomp.net/az/testimonials"]').click({force:true, multiple: true});
        lang.inEn();
        scroll.Center().wait(3000);
        lang.inRu();
        scroll.Center().wait(3000);
        lang.inAZ();
        scroll.Center().wait(3000);
        cy.get('a[href="https://bestcomp.net/az/contact"]').click({force:true, multiple: true});
        lang.inEn();
        scroll.Center().wait(3000);
        lang.inRu();
        scroll.Center().wait(3000);
        lang.inAZ();
        scroll.Center().wait(3000);
        cy.get('a[href="https://bestcomp.net/az/career"]').click({force:true, multiple: true});
        lang.inEn();
        scroll.Center().wait(3000);
        lang.inRu();
        scroll.Center().wait(3000);
        lang.inAZ();
        scroll.Center().wait(3000);
    })
})