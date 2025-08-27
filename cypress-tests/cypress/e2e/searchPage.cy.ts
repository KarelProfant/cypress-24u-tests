import searchPage from "../pages/searchPage";

describe('Testy na vyhledávací stránku', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('a[class*="CaSaveAll"]').click({force: true})
    });
    it('Ověří, že po zadání klíčového slova se web přesměruje na správný web a zobrazí relevantní výsledky', () => {
        cy.fixture('data.json').then((data) => {
            cy.searchProducts(data.searchItems)
            searchPage.getTitle()
                .should('exist')
                .and('be.visible')
                .and('contain.text', data.searchItems)
            cy.url().should('eq', `https://obchod.24u.cz/search?phrase=${data.searchItems}`)
            searchPage.checkSearchCategories(data.searchItems)
        })
    });
});