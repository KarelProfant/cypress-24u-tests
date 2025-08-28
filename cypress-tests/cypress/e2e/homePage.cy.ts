import menuCategoryComponent from "../pages/components/menuCategoryComponent";
import menuComponent, { menuCategories } from "../pages/components/menuComponent";
import homePage from "../pages/homePage";

describe('Ověření prvků na domovské stránce', () => {
  beforeEach(() => {
    // Arrange
    cy.visit('/', {timeout: 60000})
    cy.get('a[class*="CaSaveAll"]').click()
  });

  it('Ověří přítomnost klíčových prvků na domovské stránce', () => {
    //Asset
    homePage.verifyHomePageElements()
  })

  it('Ověří zobrazení nabídky Category Menu a hlavních titles', () => {
    // Arrange
    const menuCategoriesForCheck: menuCategories[] = ([
      menuCategories.AKCE,
      menuCategories.BACK_TO_SCHOOL,
      menuCategories.MAC,
      menuCategories.IPAD,
      menuCategories.IPHONE])
    menuComponent.openCategories()
    // Asset
    menuCategoryComponent.getCategoryItems()
      .should("be.visible")
      .should("have.length.at.least", 10);//očekávaný počet
    menuCategoriesForCheck.forEach((text) => {
      menuCategoryComponent.getCategoryItems().should("contain.text", text);
    });
  });

  it('Ověří rozbalení vyhledávání, přítomnost vyhledávacího pole a tlačítka', () => {
    // Act
    menuComponent.getSearchButton().click()
    // Asset
    menuComponent.getSearchBar().should('have.attr', 'class').and('contain', 'show')
    menuComponent.getSearchField().should('be.visible')
    menuComponent.getSearchConfirmButton().should('be.visible')
  });

  it('Ověří zabalení vyhledávání a nepřítomnost vyhledávacího pole a tlačítka', () => {
    // Act
    menuComponent.getSearchButton().click()
    cy.wait(1000)
    menuComponent.getSearchButton().click()
    // Asset
    menuComponent.getSearchBar().should('have.attr', 'class').and('not.contain', 'show')
    menuComponent.getSearchField().should('not.be.visible')
    menuComponent.getSearchConfirmButton().should('not.be.visible')
  });
})