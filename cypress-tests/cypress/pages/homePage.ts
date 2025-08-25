import menuCategoryComponent from "./components/menuCategoryComponent";
import menuComponent from "./components/menuComponent"

export default new class HomePage {
getFooter = () => cy.get('footer')

    verifyHomePageElements() {
        menuComponent.getMenuBar().should("be.visible")
        menuComponent.getLogoPicture().should("be.visible")
        menuComponent.getSearchButton().should('be.visible')
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

  verifyCategoriesContains(textArray: menuCategories[], expectedCount?: number) {
    menuComponent.openCategories()
    menuCategoryComponent.getCategoryItems()
      .should("be.visible")
      .should("have.length.at.least", expectedCount);
    textArray.forEach((text) => {
      menuCategoryComponent.getCategoryItems().should("contain.text", text);
    });
    menuCategoryComponent.closeCategories()
  }

  verifySearchElements(){
      menuComponent.getSearchButton().click()
  menuComponent.getSearchField().should('be.visible')
  menuComponent.getSearchConfirmButton().should('be.visible')
  menuComponent.getSearchButton().click()
  menuComponent.getSearchField().should('not.be.visible')
  menuComponent.getSearchConfirmButton().should('not.be.visible')
  }
}

export enum menuCategories {
    AKCE = 'Akce',
    BACK_TO_SCHOOL = 'Back to School'
}