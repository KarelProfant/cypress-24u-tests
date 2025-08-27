export default new class MenuComponent {
    getMenuBar = () => cy.get('header')
    getLogoPicture = () => cy.get('img[class*="img-logo"]')
    getSearchButton = () => cy.get('a[class*="HdrSrch"]')
    getSearchBar = () => cy.get('div[id="searchCollapse"]')
    getSearchField = () => cy.get('input[class*="frmsearchForm-phrase"]')
    getSearchConfirmButton = () => cy.get('button[class*="frmsearchForm-search"]')
    getCartButton = () => cy.get('i[class*="fa-shopping-cart"]')
    getCartBadge = () => cy.get('span[class*="badge-toggle"]')
    getCategoriesButton = () => cy.get('i[class*="fa-bars"]')
    getUserMenuButton = () => cy.get('div[id="menuCollapse"]').find('i[class="fa fa-user fa-lg"]')
    getCreateAccountButton = () => cy.get('div[id="ts-account-menu"]').find('a').contains('Vytvořit účet')

    openRegisterPage() {
        this.getCategoriesButton().click()
        this.getUserMenuButton().click()
        this.getCreateAccountButton().click()
    }

    openCategories() {
        this.getCategoriesButton().click()
    }

    navigateToHome() {
        this.getLogoPicture().click()
    }
}
