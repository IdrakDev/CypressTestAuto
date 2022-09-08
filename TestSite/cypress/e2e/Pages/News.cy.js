import Lang from '../PagesObjects/Language.cy'
import Scroll from '../PagesObjects/ScrollTo.cy'


describe("NEW", function () {

  const lang = new Lang
  
  const scroll = new Scroll



    it("Search New", function () {
      cy.viewport(1920, 1080);
      cy.visit("https://bestcomp.net/az/news");
      cy.location('protocol').should('eq', 'https:');    
      cy.title().should('eq', 'Xəbərlər');
      cy.contains('Bestcomp Group azad olunmuş ərazilərdəki məktəblər üçün 1000 ədəd kompüter ianə etdi').click();
      lang.inEn();
      scroll.Center().wait(3000);
      lang.inRu();
      scroll.Center().wait(3000);
      lang.inAZ();
      scroll.Center().wait(3000);
      cy.get('input[value]')
      .should('be.visible')
      .type('Bestcomp Group Cisco həllərinə həsr olunmuş tədbir keçirdi')
      .type('{enter}');
      cy.contains('Bestcomp Group Cisco həllərinə həsr olunmuş tədbir keçirdi').click();
      lang.inEn();
      scroll.Center().wait(3000);
      lang.inRu();
      scroll.Center().wait(3000);
      lang.inAZ();
      scroll.Center().wait(3000);
      cy.get('div[class="nav-next"]').click();
      cy.get('div[class="nav-previous"]').click();
      cy.contains('Bakutel').click();
      cy.get('a[class="bounce-effect"]').click();
      cy.get('div[class="nav-previous"]').click();
      cy.get('div[class="nav-next"]').wait(1000).click({multiple: true}).should('be.visible');
      cy.get('div[class="nav-next"]').wait(2000).click({multiple: true}).should('be.visible').click({multiple: true});
      cy.contains('Distribyutor').click();
      cy.contains('Bestcomp Group Almaniyanın MONACOR INTERNATIONAL şirkətinin Azərbaycanda rəsmi distibütor adını aldı').click();
      lang.inEn();
      scroll.Center().wait(3000);
      lang.inRu();
      scroll.Center().wait(3000);
      lang.inAZ();
      scroll.Center().wait(3000);
      cy.get('div[class="nav-next"]').wait(1000).click({multiple: true}).should('be.visible');
      cy.contains('Ədalət sistemi').click();
      cy.contains('Avropa Şurası Azərbaycanda məhkəmə-hüquq sisteminə tarixi qiymət verdi').click().wait(1000);
      lang.inEn();
      scroll.Center().wait(3000);
      lang.inRu();
      scroll.Center().wait(3000);
      lang.inAZ();
      scroll.Center().wait(3000);
      cy.get('a[href="https://bestcomp.net/az/news?tag=3"]').click();
      cy.get('a[class="bounce-effect"]').click();
      cy.contains('Sərgi').click();
      cy.contains('“BakuTel 2017” sərgisində “Bestcomp Group” şirkəti “Ən yaxşı şirkət təqdimatı” mükafatına layiq görülüb').click().wait(1000);
      lang.inEn();
      scroll.Center().wait(3000);
      lang.inRu();
      scroll.Center().wait(3000);
      lang.inAZ();
      scroll.Center().wait(3000);
      cy.contains('Təhlükəsizlik forumu').click();
      cy.contains('Bakıda “Age of Security” informasiya təhlükəsizliyi forumu keçirilib').click().wait(1000);
      lang.inEn();
      scroll.Center().wait(3000);
      lang.inRu();
      scroll.Center().wait(3000);
      lang.inAZ();
      scroll.Center().wait(3000);
      cy.get('a[href="https://bestcomp.net/az/news?tag=6"]').click();
      cy.contains('Bestcomp Group şirkəti Hewlett Packard Enterprise şirkətinin regionda ilk Platinum tərəfdaşı oldu').click().wait(1000);
      lang.inEn();
      scroll.Center().wait(3000);
      lang.inRu();
      scroll.Center().wait(3000);
      lang.inAZ();
      scroll.Center().wait(3000);
      cy.get('a[href="https://bestcomp.net/az/news?tag=6"]').click();
      cy.contains('Bestcomp Group Cisco-nun “Premyer tərəfdaş” statusuna layiq görülmüşdür').click().wait(1000);
      lang.inEn();
      scroll.Center().wait(3000);
      lang.inRu();
      scroll.Center().wait(3000);
      lang.inAZ();
      scroll.Center().wait(3000);
    });
  });
  