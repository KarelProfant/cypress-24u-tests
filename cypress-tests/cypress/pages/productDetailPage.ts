export default new class ProductDetailPage {
    getTitle = () => cy.get('h2')
    getAddToCartButton = () => cy.get('button[class*="AddToCartButton"]')

    addItemToCart() {
        this.getAddToCartButton().click()
    }
}