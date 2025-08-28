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
    getCategoryAkce = () => cy.get('a[id="ct_1400"]')
    getCategoryBackSchool = () => cy.get('a[id="ct_1356"]')
    getCategoryMac = () => cy.get('a[id="ct_1292"]')
    getCategoryIpad = () => cy.get('a[id="ct_1293"]')
    getCategoryIphone = () => cy.get('a[id="ct_1294"]')

    openRegisterPage() {
        this.getCategoriesButton().click()
        this.getUserMenuButton().click()
        this.getCreateAccountButton().click()
    }

    openCategories() {
        this.getCategoriesButton().click()
    }

    openCategoryPage(category: menuCategories) {
        this.openCategories()
        switch (category) {
            case menuCategories.AKCE:
                this.getCategoryAkce().click()
                break;
            case menuCategories.BACK_TO_SCHOOL:
                this.getCategoryBackSchool().click()
                break;
            case menuCategories.MAC:
                this.getCategoryMac().click()
                break;
            case menuCategories.IPAD:
                this.getCategoryIpad().click()
                break;
            case menuCategories.IPHONE:
                this.getCategoryIphone().click()
                break;
            default:
                throw new Error(`Unknown category> ${category}`)
                break;
        }
    }

    navigateToHome() {
        this.getLogoPicture().click()
    }
}

export enum menuCategories {
  AKCE = 'Akce',
  BACK_TO_SCHOOL = 'Back to School',
  MAC = 'Mac',
  IPAD = 'iPad',
  IPHONE = 'iPhone'
}