import menuCategoryComponent from "./components/menuCategoryComponent";
import menuComponent from "./components/menuComponent"

export default new class HomePage {
  getFooter = () => cy.get('footer')

  verifyHomePageElements() {
    menuComponent.getMenuBar().should("be.visible")
    menuComponent.getLogoPicture().should("be.visible")
    menuComponent.getSearchButton().should('be.visible')
    menuComponent.getSearchBar().should('have.attr', 'class').and('not.contain', 'show')
    menuComponent.getCartButton().should('be.visible')
    menuComponent.getCartBadge().should('have.text', '0')
    menuComponent.getCategoriesButton().should('be.visible')
    menuComponent.openCategories()
    menuCategoryComponent.menuItemsWrapper().should('be.visible')
    menuCategoryComponent.getCloseCategoriesButton().should('be.visible')
    menuCategoryComponent.closeCategories()
    menuCategoryComponent.menuItemsWrapper().should('not.be.visible')
    this.getFooter().should("be.visible")
  }
}