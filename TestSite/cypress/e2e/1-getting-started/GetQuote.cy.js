describe("GetAQuote", function(){
    it("Page", function() {
        cy.viewport(1920, 1080);
        cy.visit("https://bestcomp.net/az");
        cy.location("protocol").should("eq", "https:");
        cy.contains("SORĞU GÖNDƏR").click();
        cy.get('a[href="https://bestcomp.net/en/lang"]').click({force:true, multiple: true});
        cy.get('input[name="name"]').type("Idrak");
        cy.get('input[name="surname"]').type("Mirzoyev");
        cy.get('input[name="email"]').type("idrakmirzoyev@gmail.com");
        cy.get('input[name="subject"]').type("Test");
        cy.get('textarea[name="message"]').type("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum elementum dui, quis dapibus lacus. Sed fringilla libero quis metus tempus dictum. Sed sed mi id mi mattis efficitur ac ac dolor. Proin posuere semper sem. Nulla eros libero, consectetur finibus quam a, sagittis commodo arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus arcu et lacus interdum rhoncus.Suspendisse ornare nunc a eros cursus, id vestibulum diam vestibulum. Nunc congue facilisis vulputate. Nullam et lorem quam. Sed molestie odio ac orci tincidunt tincidunt et ut libero. Curabitur aliquam vitae dui ac lacinia. Quisque luctus tristique ipsum ut.");
        cy.get('input[value="SEND MESSAGE"').click().wait(5000)
        cy.get('a[href="https://bestcomp.net/ru/lang"]').click({force:true, multiple: true});
        cy.get('input[name="name"]').type("Idrak");
        cy.get('input[name="surname"]').type("Mirzoyev");
        cy.get('input[name="email"]').type("idrakmirzoyev@gmail.com");
        cy.get('input[name="subject"]').type("Test");
        cy.get('textarea[name="message"]').type("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum elementum dui, quis dapibus lacus. Sed fringilla libero quis metus tempus dictum. Sed sed mi id mi mattis efficitur ac ac dolor. Proin posuere semper sem. Nulla eros libero, consectetur finibus quam a, sagittis commodo arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus arcu et lacus interdum rhoncus.Suspendisse ornare nunc a eros cursus, id vestibulum diam vestibulum. Nunc congue facilisis vulputate. Nullam et lorem quam. Sed molestie odio ac orci tincidunt tincidunt et ut libero. Curabitur aliquam vitae dui ac lacinia. Quisque luctus tristique ipsum ut.");
        cy.get('input[value="Отправить"]').click().wait(5000)
        cy.get('a[href="https://bestcomp.net/az/lang"]').click({force:true, multiple: true});
        cy.get('input[name="name"]').type("Idrak");
        cy.get('input[name="surname"]').type("Mirzoyev");
        cy.get('input[name="email"]').type("idrakmirzoyev@gmail.com");
        cy.get('input[name="subject"]').type("Test");
        cy.get('textarea[name="message"]').type("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum elementum dui, quis dapibus lacus. Sed fringilla libero quis metus tempus dictum. Sed sed mi id mi mattis efficitur ac ac dolor. Proin posuere semper sem. Nulla eros libero, consectetur finibus quam a, sagittis commodo arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus arcu et lacus interdum rhoncus.Suspendisse ornare nunc a eros cursus, id vestibulum diam vestibulum. Nunc congue facilisis vulputate. Nullam et lorem quam. Sed molestie odio ac orci tincidunt tincidunt et ut libero. Curabitur aliquam vitae dui ac lacinia. Quisque luctus tristique ipsum ut.");
        cy.contains("Göndər").click().wait(5000);
        // test
    })
});