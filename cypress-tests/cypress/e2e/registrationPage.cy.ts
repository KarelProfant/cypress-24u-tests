import menuComponent from "../pages/components/menuComponent";
import registrationPage, { Countries, RegistrationData } from "../pages/registrationPage";
import { faker, fakerCS_CZ } from '@faker-js/faker';

describe('Registration tests', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('a[class*="CaSaveAll"]').click()
        menuComponent.openRegisterPage()
    });

    it('Zkontroluje, že odkaz v menu směřuje na správnou URL', () => {
        registrationPage.getTitle()
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'Vytvořit účet')
    });

    it('Po vyplnění nevalidního e-mailu by se měla objevit chybová hláška', () => {
        cy.fixture('data.json').then((data) => {
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
            registrationPage.fillRegistrationData(credentialsNotComplete)
            registrationPage.getBadDomainAlert()
                .should('have.attr', 'class').and('contain', 'show')
        })

    });

    it('Po vyplnění všech polí a a uložení by se mělo objevit antiSPAM okno', () => {
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
        registrationPage.fillRegistrationData(credentialsComplete)
        registrationPage.getSaveButton().click()
        registrationPage.getAntiSpamWindow()
                .should('have.attr', 'class').and('contain', 'show')
    });
});