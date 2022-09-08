class ScrollTo {
    Top(){
        return cy.scrollTo('top')
    }
    Center(){
        return cy.scrollTo('center')
    }
    Bottom(){
        return cy.scrolTo('bottom')
    }
}
export default ScrollTo