import Quote from '../PagesObjects/Inputs.cy'
import Lang from '../PagesObjects/Language.cy'

const name = "Idrak"
const surname = "Mirzoyev"
const email = "idrakmirzoyev@gmail.com"
const tite = "Test automatisation"
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet mauris mauris. Quisque facilisis lacus quis ullamcorper ornare. Cras mattis sapien augue"

describe("GetAQuote", function(){

    const lang = new Lang

    const input = new Quote

    it("Page", function() {
        cy.viewport(1920, 1080);
        cy.visit("https://bestcomp.net/az");
        cy.location("protocol").should("eq", "https:");
        cy.contains("SORĞU GÖNDƏR").click();
        lang.inEn();
        input.inName().type(`${name}`);
        input.inSurname().type(`${surname}`);
        input.inMail().type(`${email}`);
        input.inTitle().type(`${tite}`);
        input.inDescription().type(`${description}`);
        cy.get('input[value="SEND MESSAGE"').click();
        cy.scrollTo('center').wait(3000);
        lang.inRu();
        input.inName().type(`${name}`);
        input.inSurname().type(`${surname}`);
        input.inMail().type(`${email}`);
        input.inTitle().type(`${tite}`);
        input.inDescription().type(`${description}`);
        cy.get('input[value="Отправить"]').click();
        cy.scrollTo('center').wait(3000);
        lang.inAZ();
        input.inName().type(`${name}`);
        input.inSurname().type(`${surname}`);
        input.inMail().type(`${email}`);
        input.inTitle().type(`${tite}`);
        input.inDescription().type(`${description}`);
        cy.contains("Göndər").click();
        cy.scrollTo('center').wait(3000);
        
    })
});