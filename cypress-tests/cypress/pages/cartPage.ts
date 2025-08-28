import { Countries } from "./registrationPage"

export default new class CartPage {
    getAddedToCartDialog = () => cy.get('[class*="addedToCartDialog"]')
    getToCartFromDialogButton = () => this.getAddedToCartDialog().find('a').contains('Přejít do košíku')
    getCartTitleBox = () => cy.get('a').contains('Košík')
    getShipmentTitleBox = () => cy.get('a').contains('Doprava a platba')
    getCheckoutTitleBox = () => cy.get('a').contains('Dodací údaje')
    getContinueToShipmentButton = () => cy.get('a').contains('Pokračovat na dopravu')
    getShipmentSalesroomInput = () => cy.get('tr[class*="shp-ship-1"]')
    getPaymentCardInput = () => cy.get('tr[class*="shp-pay-21-CARD_CZ_COMGATE"]')
    getContinueToCheckoutButton = () => cy.get('button[class*="CartShipmentContinue"]')
    getEmailField = () => cy.get('input[id="frmregisterSummaryForm-email"]')
    getPhoneField = () => cy.get('input[id="frm-phone"]')
    getNameField = () => cy.get('input[id="frmregisterSummaryForm-firstname"]')
    getSurnameField = () => cy.get('input[id="frmregisterSummaryForm-surname"]')
    getStreetField = () => cy.get('input[id="frmregisterSummaryForm-invoice_street"]')
    getCityField = () => cy.get('input[id="frmregisterSummaryForm-invoice_city"]')
    getZipField = () => cy.get('input[id="frmregisterSummaryForm-invoice_zip"]')
    getCountryField = () => cy.get('select[id="frmregisterSummaryForm-invoice_country_id"]')
    
    fillOrderData(credentials: OrderData) {
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

export interface OrderData {
    name: string,
    surname: string,
    street: string,
    city: string,
    ZIP: string,
    country: Countries,
    email: string,
    phone: string
}