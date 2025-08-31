import categoryPage from "../pages/categoryPage";
import menuComponent, { menuCategories } from "../pages/components/menuComponent";
import categoryItemComponent from "../pages/components/categoryItemComponent"
import productDetailPage from "../pages/productDetailPage";
import cartPage, { OrderData, Payments, Shipment } from "../pages/cartPage";
import { faker, fakerCS_CZ } from '@faker-js/faker';
import { Countries } from "../pages/registrationPage";

describe('Testy na vytváření objednávek ze stránky kategorie', () => {
    beforeEach(() => {
        // Arrange
        cy.visit('/')
        cy.get('a[class*="CaSaveAll"]').click()
        // Act
        menuComponent.openCategoryPage(menuCategories.IPHONE)
    });

    it('Zkontroluje, že je odkaz v menu na kategorii přesměrován na správný web', () => {
        cy.fixture('data.json').then((data) => {
            // Assert
            categoryPage.getTitle()
                .should('exist')
                .and('be.visible')
                .and('contain.text', menuCategories.IPHONE)
            cy.url().should('eq', `${Cypress.env('baseUrl')}${data.urlPartIphone}`)
        })
    });

    it('Přidání produktu do košíku ze stránek kategorie a ověření přidání do košíku', () => {
        cy.fixture('data.json').then((data) => {
            // Arrange
            const item = new categoryItemComponent(data.itemToCart.name)
            cy.intercept('GET', /https:\/\/obchod.24u.cz\/(.*)\?do=addCart/).as('addCart')
            // Act
            item.addItemToCart()
            cy.wait('@addCart', { timeout: 120000 }).then((odpoved) => {
                // Assert
                cartPage.getAddedToCartDialog()
                    .should('exist')
                    .should('be.visible')
                    .should('contain.text', data.itemToCart.name)
                    .and('contain.text', data.itemToCart.price)
                menuComponent.getCartBadge().should('have.text', '1')
            })
        })
    });

    it('Přidání produktu do košíku ze stránek detailu a ověření přidání do košíku', () => {
        cy.fixture('data.json').then((data) => {
            // Arrange
            const item = new categoryItemComponent(data.itemToCart.name)
            cy.intercept('POST', /https:\/\/obchod.24u.cz\/p\/(.*)\?do=productForm-submit/).as('addCart')
            // Act
            item.getNameDiv().click()
            cy.wait(2000)
            // Assert
            cy.url().should('contain', `${Cypress.env('baseUrl')}p/`)
            productDetailPage.getTitle()
                .should('exist')
                .and('be.visible')
                .and('contain.text', data.itemToCart.name)
            productDetailPage.addItemToCart()
            cy.wait('@addCart', { timeout: 120000 }).then((odpoved) => {
                cartPage.getAddedToCartDialog()
                    .should('exist')
                    .should('be.visible')
                    .should('contain.text', data.itemToCart.name)
                    .and('contain.text', data.itemToCart.price)
                menuComponent.getCartBadge().should('have.text', '1')
            })
        })
    });

    it('Přidání produktu do košíku ze stránek kategorie a dokončení procesu nákupu', () => {
        // Arrange
        const credentials: OrderData = {
            name: fakerCS_CZ.person.firstName(),
            surname: fakerCS_CZ.person.lastName(),
            street: fakerCS_CZ.location.streetAddress(),
            city: fakerCS_CZ.location.city(),
            ZIP: fakerCS_CZ.location.zipCode(),
            country: Countries.cz,
            email: fakerCS_CZ.internet.email(),
            phone: fakerCS_CZ.phone.number({ style: "international" })
        }
        cy.fixture('data.json').then((data) => {
            // Arrange
            const item = new categoryItemComponent(data.itemToCart.name)
            cy.intercept('GET', /https:\/\/obchod.24u.cz\/(.*)\?do=addCart/).as('addCart')
            // Act
            item.addItemToCart()
            cy.wait('@addCart', { timeout: 120000 }).then((odpoved) => {
                cartPage.goToCartAndAssert()
                cartPage.goToShipmentAndAssert(Shipment.DPD, Payments.AIR_BANK)
                cartPage.goToCheckoutAndAssert(credentials)
                cartPage.finishOrderAndAssert()
            })
        })
    });
});