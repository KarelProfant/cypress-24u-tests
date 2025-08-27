describe('SearchPage tests', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('a[class*="CaSaveAll"]').click()
    });
    it('Ověří, že po zadání klíčového slova se web přesměruje na správný web a zobrazí relevantní výsledky', () => {
        cy.fixture('data.json').then((data) => {
            cy.searchProducts(data.searchItems)
            cy.url().should('have.text', `https://obchod.24u.cz/search?phrase=${data.searchItems}`)
        })
    });
});