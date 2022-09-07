class Language {
    inAZ(){
        return cy.get('a[href="https://bestcomp.net/az/lang"]').click({force:true, multiple: true});
    }
    inEn(){
        return cy.get('a[href="https://bestcomp.net/en/lang"]').click({force:true, multiple: true});
    }
    inRu(){
        return cy.get('a[href="https://bestcomp.net/ru/lang"]').click({force:true, multiple: true});
    }
}
export default Language