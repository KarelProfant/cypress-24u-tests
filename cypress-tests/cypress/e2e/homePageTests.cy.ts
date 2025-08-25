import homePage from "../pages/homePage";

describe('Ověření domovské stránky', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('a[class*="CaSaveAll"]').click()
  });
  
  it('passes', () => {
    homePage.validMenuComponent()
  })
})