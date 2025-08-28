export default class CategoryItemComponent {
    itemName = ""
    constructor(itemName: string) {
        this.itemName = itemName
    }
    parentElement = () => cy.get('h4').contains(this.itemName).parent()

    getNameDiv = () => this.parentElement().parent().find('h4')
    getAddToCartButton = () => this.parentElement().parent().find('a[class*="AddProductToCart"]')

    addItemToCart() {
        this.getAddToCartButton().click()
    }
}