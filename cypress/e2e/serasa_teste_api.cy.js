describe("Exemplo de automação de teste de API", () => {
  it("Checando o retorno do status", () => {
    cy.request({
      method: "GET",
      url: "https://8dac9f4e-fcb2-4e8f-857a-e4ed3497a0d8.mock.pstmn.io/bank/",
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
