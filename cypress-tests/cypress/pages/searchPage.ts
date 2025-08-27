export default new class SearchPage {
    getTitle = () => cy.get('h1')
    getCategoriesWrapper = () => cy.get('div[id="collapseSubcategories"]')

    checkSearchCategories(searchString: string) {
        const categoryItems = this.getCategoriesWrapper().find('div')
    }
}