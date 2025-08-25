export default new class MenuComponent {
    getMenuBar = () => cy.get('header')
    getLogoPicture = () => cy.get('img[class*="img-logo"]')
    getSearchButton = () => cy.get('a[class*="HdrSrch"]')
    getSearchField = () => cy.get('input[class*="frmsearchForm-phrase"]')
    getSearchConfirmButton = () => cy.get('button[class*="frmsearchForm-search"]')
    getCartButton = () => cy.get('i[class*="fa-shopping-cart"]')
    getCartBadge = () => cy.get('span[class*="badge-toggle"]')
    getCategoriesButton = () => cy.get('i[class*="fa-bars"]')

    openCategories(){
        this.getCategoriesButton().click()
    }

    navigateToHome() {
        this.getLogoPicture().click()
    }
}
