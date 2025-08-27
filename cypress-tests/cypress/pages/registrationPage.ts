export default new class RegistrationPage {
    getNameField = () => cy.get('input[id="frmcustomerRegistrationForm-firstname"]')
    getSurnameField = () => cy.get('input[id="frmcustomerRegistrationForm-surname"]')
    getStreetField = () => cy.get('input[id="frmcustomerRegistrationForm-invoice_street"]')
    getCityField = () => cy.get('input[id="frmcustomerRegistrationForm-invoice_city"]')
    getZipField = () => cy.get('input[id="frmcustomerRegistrationForm-invoice_zip"]')
    getCountryField = () => cy.get('select[id="frmcustomerRegistrationForm-invoice_country_id"]')
    getEmailField = () => cy.get('input[id="frmcustomerRegistrationForm-email"]')
    getPhoneField = () => cy.get('input[id="frm-phone"]')
    getBadDomainAlert = () => cy.get('div[class*="CheckoutEmailAlert-domain"]')
    getSaveButton = () => cy.get('form[id="frm-customerRegistrationForm"]')
    .find('button').contains('Uložit')
    getAntiSpamWindow = () => cy.get('div[class*="dialogInfo"]')

    fillRegistrationData(credentials: RegistrationData) {
        this.getNameField().clear().type(credentials.name)
        this.getSurnameField().clear().type(credentials.surname)
        this.getStreetField().clear().type(credentials.street)
        this.getCityField().clear().type(credentials.city)
        this.getZipField().clear().type(credentials.ZIP)
        this.getCountryField().select(credentials.country)
        this.getEmailField().clear().type(credentials.email)
        this.getPhoneField().clear().type(credentials.phone)
    }
}

export interface RegistrationData {
    name: string,
    surname: string,
    street: string,
    city: string,
    ZIP: string,
    country: Countries,
    email: string,
    phone: string
}

export enum Countries {
    cz = 'Česká republika',
    sk = 'Slovensko'
}