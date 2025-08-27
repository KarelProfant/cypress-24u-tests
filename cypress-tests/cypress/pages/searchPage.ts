export default new class SearchPage {
    getTitle = () => cy.get('h1')
    getCategoriesDivs = () => cy.get('div[id="collapseSubcategories"]').find('div')
    getProductsTitle = () => cy.get('div[id="snippet-searchedProducts-productList"').find('h4')
}