import { menuCategories } from "../homePage"
import menuComponent from "./menuComponent"

export default new class MenuCategoryComponent {
    menuItemsWrapper = () => cy.get('ul[class*="Menu ReOpenMenu"]')
    getCategoryItems = () => this.menuItemsWrapper().find('li[class*="nav-item"]')
    getCloseCategoriesButton = () => cy.get('a[class*="cross"]')

    navigateToCategory(category: menuCategories) {
        menuComponent.getCategoriesButton().should('be.visible').click()
        this.getCategoryItems().contains(String(category)).should('be.visible').click()
    }

    closeCategories() {
        this.getCloseCategoriesButton().click()
    }

}
