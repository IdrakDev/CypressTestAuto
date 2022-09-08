import Lang from '../PagesObjects/Language.cy'
import Scroll from '../PagesObjects/ScrollTo.cy'


describe('Search', function(){

    const lang = new Lang

    const scroll = new Scroll

    it('search', function(){
        cy.viewport(1920, 1080);
        cy.visit("https://bestcomp.net/az");
        cy.location("protocol").should("eq", "https:");
        cy.get('ul[class="sub-menu"]').invoke('show').click({force:true, multiple: true});
        cy.get('div[class="search-icon"]').click();
        cy.get('input[id="s"]').type('Bestcomp Group Cisco{enter}');
        cy.contains('Bestcomp Group Cisco').click();
        lang.inAZ();
        scroll.Center().wait(3000)
        lang.inEn();
        scroll.Center().wait(3000)
        lang.inRu();
        scroll.Center().wait(3000)
        lang.inAZ();
        scroll.Center().wait(3000)
        cy.get('div[class="search-icon"]').click();
        cy.get('input[id="s"]').type('Bestcomp Group Şuşada {enter}');
        cy.contains('Bestcomp Group Şuşada').click();

        lang.inAZ();
        scroll.Center().wait(3000)
        lang.inEn();
        scroll.Center().wait(3000)
        lang.inRu();
        scroll.Center().wait(3000)
        lang.inAZ();
        scroll.Center().wait(3000)
        cy.get('div[class="search-icon"]').click();
        cy.get('input[id="s"]').type('Bestcomp Group azad olunmuş ərazilərdəki məktəblər üçün 1000 ədəd kompüter ianə etdi {enter}');
        cy.contains('Bestcomp Group azad olunmuş ərazilərdəki məktəblər üçün 1000 ədəd kompüter ianə etdi').click();
        lang.inAZ();
        scroll.Center().wait(3000)
        lang.inEn();
        scroll.Center().wait(3000)
        lang.inRu();
        scroll.Center().wait(3000)
        lang.inAZ();
        scroll.Center().wait(3000)
        cy.get('div[class="search-icon"]').click();
        cy.get('input[id="s"]').type('İT şirkəti {enter}');
        cy.contains('İT şirkəti').click();
        lang.inAZ();
        scroll.Center().wait(3000)
        lang.inEn();
        scroll.Center().wait(3000)
        lang.inRu();
        scroll.Center().wait(3000)
        lang.inAZ();
        scroll.Center().wait(3000)
    })
})