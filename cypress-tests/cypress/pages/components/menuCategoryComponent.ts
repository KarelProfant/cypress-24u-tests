import menuComponent from "./menuComponent"

export default new class MenuCategoryComponent {
    menuItemsWrapper = () => cy.get('ul[class*="Menu ReOpenMenu"]')
    categoryItem = () => this.menuItemsWrapper().find('li[class*="nav-item"]')
    navigateToCategory(category: menuCategories) {
        menuComponent.getMenuButton().click({force: true})
        this.categoryItem().contains(String(category)).should('be.visible').click()
    }
}
    export enum menuCategories {
        AKCE = 'Akce',
        BACK_TO_SCHOOL = 'Back to School'
    }