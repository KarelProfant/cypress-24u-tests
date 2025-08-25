import menuComponent from "../pages/components/menuComponent";
import homePage, { menuCategories } from "../pages/homePage";

describe('Ověření prvků na domovské stránce', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('a[class*="CaSaveAll"]').click()
  });
  
  it('Ověří přítomnost klíčových prvků na domovské stránce', () => {
    homePage.verifyHomePageElements()
  })

  it('Ověří zobrazení nabídky Category Menu a hlavních titles', () => {
      homePage.verifyCategoriesContains([
        menuCategories.AKCE,
        menuCategories.BACK_TO_SCHOOL
      ], 10)
  });

    it('Ověří rozbalení vyhledávání, přítomnost vyhledávacího pole a tlačítka, a zabalení vyhledávání', () => {
homePage.verifySearchElements()

  });
})

describe('Ověří vyhledávání', () => {
    it('Ověří funkčnost a správnost vyhledávání', () => {
        menuComponent.getSearchButton().click()
        menuComponent.getSearchField().type('iPhone')
        menuComponent.getSearchButton().click()
    });
});