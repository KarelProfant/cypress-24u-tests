import menuComponent from "../pages/components/menuComponent";
import registrationPage, { Countries, RegistrationData } from "../pages/registrationPage";
import { faker, fakerCS_CZ } from '@faker-js/faker';

describe('Testy na registrační stránce', () => {
    beforeEach(() => {
        // Arrange
        cy.visit('/', {timeout: 60000})
        cy.get('a[class*="CaSaveAll"]').click({force: true})
        // Act
        menuComponent.openRegisterPage()
    });

    it('Zkontroluje, že odkaz v menu směřuje na správnou URL', () => {
        // Asset
        registrationPage.getTitle()
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'Vytvořit účet')
    });

    it('Po vyplnění nevalidního e-mailu by se měla objevit chybová hláška', () => {
        cy.fixture('data.json').then((data) => {
            // Arrange
            const credentialsNotComplete: RegistrationData = {
                name: fakerCS_CZ.person.firstName(),
                surname: fakerCS_CZ.person.lastName(),
                street: fakerCS_CZ.location.streetAddress(),
                city: fakerCS_CZ.location.city(),
                ZIP: fakerCS_CZ.location.zipCode(),
                country: Countries.cz,
                email: data.emailInvalid,
                phone: fakerCS_CZ.phone.number({style: "international"})
            }
            // Act
            registrationPage.fillRegistrationData(credentialsNotComplete)
            // Asset
            registrationPage.getBadDomainAlert()
                .should('have.attr', 'class').and('contain', 'show')
        })

    });

    it('Po vyplnění všech polí a a uložení by se mělo objevit antiSPAM okno', () => {
        // Arrange
        const credentialsComplete: RegistrationData = {
            name: fakerCS_CZ.person.firstName(),
            surname: fakerCS_CZ.person.lastName(),
            street: fakerCS_CZ.location.streetAddress(),
            city: fakerCS_CZ.location.city(),
            ZIP: fakerCS_CZ.location.zipCode(),
            country: Countries.cz,
            email: fakerCS_CZ.internet.email(),
            phone: fakerCS_CZ.phone.number({style: "international"})
        }
        // Act
        registrationPage.fillRegistrationData(credentialsComplete)
        registrationPage.getSaveButton().click()
        // Asset
        registrationPage.getAntiSpamWindow()
                .should('have.attr', 'class').and('contain', 'show')
    });
});