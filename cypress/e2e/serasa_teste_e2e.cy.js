describe("Dado que estou realizando o desafio QA para a vaga de Analista de Testes", function () {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  it("Como usuário gostaria de simular um empréstimo de R$ 1.000,00 em 6x de R$ 271,27 para pagar minhas dívidas", function () {
    cy.visit("https://www.serasa.com.br/ecred/simulador/");
    cy.get("#slider-range").click();
    cy.wait(2000);
    cy.get("#slider-range").realType(
      "{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}"
    );
    cy.scrollTo("top");
    cy.get("#amount").contains("R$ 1.000,00");
    cy.get("#month-amount-output").contains("6x");
    cy.get("#price-number").contains("271,27");
  });

  it("Como usuário gostaria de simular um empréstimo de R$ 4.000,00 em 12x de R$ 478,49 para pagar minhas dívidas", function () {
    cy.visit("https://www.serasa.com.br/ecred/simulador/");
    cy.get("#slider-range-month").click();
    cy.wait(2000);
    cy.get("#slider-range-month").realType("{rightarrow}{leftarrow}");
    cy.scrollTo("top");
    cy.get("#slider-range").click();
    cy.wait(2000);
    cy.get("#slider-range").realType(
      "{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{rightarrow}"
    );
    cy.scrollTo("top");
    cy.get("#amount").contains("R$ 4.000,00");
    cy.get("#month-amount-output").contains("12x");
    cy.get("#price-number").contains("478,49");
  });

  it("Como usuário gostaria de simular um empréstimo de R$ 6.000,00 em 24x de R$ 347,89 para pagar minhas dívidas", function () {
    cy.visit("https://www.serasa.com.br/ecred/simulador/");
    cy.get("#slider-range-month").click();
    cy.wait(2000);
    cy.get("#slider-range-month").realType("{rightarrow}");
    cy.scrollTo("top");
    cy.get("#slider-range").click();
    cy.wait(2000);
    cy.get("#slider-range").realType(
      "{rightarrow}{rightarrow}{rightarrow}{rightarrow}"
    );
    cy.scrollTo("top");
    cy.get("#amount").contains("R$ 6.000,00");
    cy.get("#month-amount-output").contains("24x");
    cy.get("#price-number").contains("347,89");
  });
});
