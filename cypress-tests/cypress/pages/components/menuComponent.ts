import categoryPage from "../CategoryPage"
import menuCategoryComponent, { menuCategories } from "./menuCategoryComponent"

export default new class MenuComponent {
    getLogoPicture = () => cy.get('img[class*="img-logo"]')
    getSearchButton = () => cy.get('i[class*="fa-search"]')
    getCartButton = () => cy.get('i[class*="fa-shopping-cart"]')
    getCartBadge = () => cy.get('span[class*="BasketTotalQuantity"]')
    getMenuButton = () => cy.get('i[class*="fa-bars"]')

    openMenu(){
        this.getMenuButton().click()
    }

    navigateToHome() {
        this.getLogoPicture().click()
    }

    checkCartBadge(badgeNumber: number): boolean {
        if (this.getCartBadge().should('contain.text', badgeNumber)) {
            return true
        }
        return false
    }

    validMenuComponent() {
        this.getLogoPicture().should('exist')
        this.getSearchButton().should('exist')
        this.getCartButton().should('exist')
        expect(this.checkCartBadge(0)).to.be.true
        this.getMenuButton().should('exist')
        menuCategoryComponent.navigateToCategory(menuCategories.AKCE)
        categoryPage.getHeaderText().contains(String(menuCategories.AKCE))
    }
}
