import searchPage from "../pages/searchPage";

describe('Testy na vyhledávací stránku', () => {
    beforeEach(() => {
        // Arrange
        cy.visit('/')
        cy.get('a[class*="CaSaveAll"]').click({force: true})
    });
    it('Ověří, že po zadání klíčového slova se web přesměruje na správný web a zobrazí relevantní výsledky', () => {
        cy.fixture('data.json').then((data) => {
            // Act
            cy.searchProducts(data.searchItems)
            // Asset
            searchPage.getTitle()
                .should('exist')
                .and('be.visible')
                .and('contain.text', data.searchItems)
            cy.url().should('eq', `${Cypress.env('baseUrl')}search?phrase=${data.searchItems}`)
            searchPage.getCategoriesDivs().each((categoryDiv) => {
                expect(categoryDiv).contain(data.searchItems)
            });
            searchPage.getProductsTitle().each((productTitle) => {
                expect(productTitle).contain(data.searchItems)
            });
        })
    });
});