describe("servers", () => {
  it("login", () => {
    cy.intercept("https://playground.tesonet.lt/v1/tokens", {
      token: "mock-token",
    }).as("getToken");
    cy.get("input[name='username']").type("tesonet");
    cy.get("input[name='password']").type("partyanimal");
    cy.get('button[type="submit"]').click();
    cy.wait("@getToken").then((interception) => {
      cy.log("@getToken loaded");
      cy.log(interception.response?.body);
    });
  });

  it("fetch servers", () => {
    cy.intercept("https://playground.tesonet.lt/v1/servers", [
      { name: "server 2 #2", distance: "2" },
      { name: "server 1 #1", distance: "1" },
    ]).as("getServers");
    cy.get('[href="/servers"]').click();
    cy.wait("@getServers").then((interception) => {
      cy.log("@getServers loaded");
      cy.log(interception.response?.body);
    });
  });

  it("sort servers", () => {
    cy.get("#distance-header").click();
    cy.get("#servers-header").click();
  });
});
