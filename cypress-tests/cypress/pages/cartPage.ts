import { Countries } from "./registrationPage"

export default new class CartPage {
    getAddedToCartDialog = () => cy.get('[class*="addedToCartDialog"]')
    getToCartFromDialogButton = () => this.getAddedToCartDialog().find('a').contains('Přejít do košíku')
    getCartTitleBox = () => cy.get('a').contains('Košík')
    getShipmentTitleBox = () => cy.get('a').contains('Doprava a platba')
    getCheckoutTitleBox = () => cy.get('a').contains('Dodací údaje')
    getContinueToShipmentButton = () => cy.get('a').contains('Pokračovat na dopravu')
    getShipmentWrapper = () => cy.get('table[id="ShipmentsList"]')
    getShipmentSalesroomInput = () =>
        this.getShipmentWrapper().find('tr[class*="shp-ship-1"]')
    getShipmentDPDInput = () =>
        this.getShipmentWrapper().find('tr[class*="shp-ship-2"]')
    getPaymentWrapper = () => cy.get('table[id="PaymentsList"]')
    getPaymentCashInput = () =>
        this.getPaymentWrapper().find('tr[class*="Payment_1"]')
    getPaymentBankTransferInput = () =>
        this.getPaymentWrapper().find('tr[class*="Payment_3"]')
    getPaymentBankCardInput = () =>
        this.getPaymentWrapper().find('tr[class*="shp-pay-21-CARD_CZ_COMGATE"]')
    getPaymentMethodsToggle = () => cy.get('tr[class*="shp-pay-quick-heading"]')
    getPaymentApplePayInput = () =>
        this.getPaymentWrapper().find('tr[class*="shp-pay-21-APPLEPAY_REDIRECT"]')
    getPaymentGooglePayInput = () =>
        this.getPaymentWrapper().find('tr[class*="shp-pay-21-GOOGLEPAY_REDIRECT"]')
    getPaymentTwistoLaterInput = () =>
        this.getPaymentWrapper().find('tr[class*="shp-pay-21-LATER_TWISTO"]')
    getPaymentSkipPayLaterInput = () =>
        this.getPaymentWrapper().find('tr[class*="shp-pay-21-LATER_SKIPPAY"]')
    getPaymentPlatimPakLaterInput = () =>
        this.getPaymentWrapper().find('tr[class*="shp-pay-21-LATER_PLATIMPAK"]')
    getPaymentTwistoPartInput = () =>
        this.getPaymentWrapper().find('tr[class*="shp-pay-21-PART_TWISTO"]')
    getPaymentSkipPayPartInput = () =>
        this.getPaymentWrapper().find('tr[class*="shp-pay-21-PART_SKIPPAY"]')
    getPaymentEssoxPartInput = () =>
        this.getPaymentWrapper().find('tr[class*="shp-pay-21-PART_ESSOX"]')
    getPaymentAirBankInput = () =>
        this.getPaymentWrapper().find('tr[class*="shp-pay-21-BANK_CZ_AB_PSD2"]')
    getPaymentCeskaSporitelnaInputi = () =>
        this.getPaymentWrapper().find('tr[class*="shp-pay-21-BANK_CZ_CS_PSD2"]')
    getPaymentCSOBInput = () =>
        this.getPaymentWrapper().find('tr[class*="shp-pay-21-BANK_CZ_CSOB_PSD2"]')
    getPaymentFioBankaInput = () =>
        this.getPaymentWrapper().find('tr[class*="shp-pay-21-BANK_CZ_FB_PSD2"]')
    getPaymentKomercniBankaInput = () =>
        this.getPaymentWrapper().find('tr[class*="shp-pay-21-BANK_CZ_KB_PSD2"]')
    getPaymentMBankInput = () =>
        this.getPaymentWrapper().find('tr[class*="shp-pay-21-BANK_CZ_MB_P"]')
    getPaymentMonetaMoneyBankInput = () =>
        this.getPaymentWrapper().find('tr[class*="shp-pay-21-BANK_CZ_MO"]')
    getPaymentRaiffeisenbankInput = () =>
        this.getPaymentWrapper().find('tr[class*="shp-pay-21-BANK_CZ_RB"]')
    getPaymentCofidisLoanInput = () =>
        this.getPaymentWrapper().find('tr[class*="shp-pay-21-LOAN_COFIDIS"]')
    getPaymentEssoxLoanInput = () =>
        this.getPaymentWrapper().find('tr[class*="shp-pay-21-LOAN_ESSOX"]')
    getPaymentOtherBanksInput = () =>
        this.getPaymentWrapper().find('tr[class*="shp-pay-21-BANK_CZ_OTHER"]')
    getPaymentHomecreditLoanInput = () =>
        this.getPaymentWrapper().find('tr[class*="shp-pay-21-LOAN_HOMECREDIT"]')
    getContinueToCheckoutButton = () => cy.get('button[class*="CartShipmentContinue"]')
    getEmailField = () => cy.get('input[id="frmregisterSummaryForm-email"]')
    getPhoneField = () => cy.get('input[id="frm-phone"]')
    getNameField = () => cy.get('input[id="frmregisterSummaryForm-firstname"]')
    getSurnameField = () => cy.get('input[id="frmregisterSummaryForm-surname"]')
    getStreetField = () => cy.get('input[id="frmregisterSummaryForm-invoice_street"]')
    getCityField = () => cy.get('input[id="frmregisterSummaryForm-invoice_city"]')
    getZipField = () => cy.get('input[id="frmregisterSummaryForm-invoice_zip"]')
    getCountryField = () => cy.get('select[id="frmregisterSummaryForm-invoice_country_id"]')
    getFinishOrderButton = () => cy.get('form[id="frm-registerSummaryForm"]')
        .find('button').contains('Dokončit závazně objednávku')
    getConfirmOrderAgreementInput = () => cy.get('input[id="frmregisterSummaryForm-agreements-agreement_1"]')

    // Přejít do košíku a zkontrolovat, že jsme v košíku
    goToCartAndAssert() {
        // Act
        this.getToCartFromDialogButton().click()
        // Assert
        // je zvýrazněný správný title
        this.getCartTitleBox()
            .should('have.attr', 'class')
            .and('contain', 'active')
        // URL adresa odpovídá
        cy.url().should('eq', `${Cypress.env('baseUrl')}cart`)
    }

    // Přejít do volby dopravy a platby a zkontrolovat, že tam jsme a zvolit dopravu a platbu
    goToShipmentAndAssert(shipment: Shipment, payment: Payments) {
        // Act
        this.getContinueToShipmentButton().click()
        // Assert
        // je zvýrazněný správný title
        this.getShipmentTitleBox()
            .should('have.attr', 'class')
            .and('contain', 'active')
        // URL adresa odpovídá
        cy.url().should('eq', `${Cypress.env('baseUrl')}shipment`)
        // Act
        // Vyplnění metody doručení
        switch (shipment) {
            case Shipment.SALESROOM:
                this.getShipmentSalesroomInput().click()
                break;
            case Shipment.DPD:
                this.getShipmentDPDInput().click()
                break;
            default:
                throw new Error(`Unknown shipment> ${shipment}`)
                break;
        }
        // Při zaslání poštou není platba v hotovosti možná
        if (shipment == Shipment.DPD && payment == Payments.CASH) {
            throw new Error('Forbidden DPD shipment and cash payment combination')
        }
        // Rozkliknutí dalších metod platby
        if (payment != Payments.CASH && payment != Payments.BANK_TRANSFER && payment != Payments.BANK_CARD) {
            this.getPaymentMethodsToggle().click()
        }
        // Vyplnění metody platby
        switch (payment) {
            case Payments.CASH:
                this.getPaymentCashInput().click()
                break;
            case Payments.BANK_TRANSFER:
                this.getPaymentBankTransferInput().click()
                break;
            case Payments.BANK_CARD:
                this.getPaymentBankCardInput().click()
                break;
            case Payments.APPLE_PAY:
                this.getPaymentApplePayInput().click()
                break;
            case Payments.GOOGLE_PAY:
                this.getPaymentGooglePayInput().click()
                break;
            case Payments.TWISTO_LATER:
                this.getPaymentTwistoLaterInput().click()
                break;
            case Payments.SKIPPAY_LATER:
                this.getPaymentSkipPayLaterInput().click()
                break;
            case Payments.PLATIMPAK_LATER:
                this.getPaymentPlatimPakLaterInput().click()
                break;
            case Payments.TWISTO_PART:
                this.getPaymentTwistoPartInput().click()
                break;
            case Payments.SKIPPAY_PART:
                this.getPaymentSkipPayPartInput().click()
                break;
            case Payments.ESSOX_PART:
                this.getPaymentEssoxPartInput().click()
                break;
            case Payments.AIR_BANK:
                this.getPaymentAirBankInput().click()
                break;
            case Payments.CESKA_SPORITELNA:
                this.getPaymentCeskaSporitelnaInputi().click()
                break;
            case Payments.CSOB:
                this.getPaymentCSOBInput().click()
                break;
            case Payments.FIO_BANKA:
                this.getPaymentFioBankaInput().click()
                break;
            case Payments.KOMERCNI_BANKA:
                this.getPaymentKomercniBankaInput().click()
                break;
            case Payments.MBANK:
                this.getPaymentMBankInput().click()
                break;
            case Payments.MONETA_MONEY_BANK:
                this.getPaymentMonetaMoneyBankInput().click()
                break;
            case Payments.RAIFFEISENBANK:
                this.getPaymentRaiffeisenbankInput().click()
                break;
            case Payments.COFIDIS_LOAN:
                this.getPaymentCofidisLoanInput().click()
                break;
            case Payments.ESSOX_LOAN:
                this.getPaymentEssoxLoanInput().click()
                break;
            case Payments.OTHER_BANKS:
                this.getPaymentOtherBanksInput().click()
                break;
            case Payments.HOMECREDIT_LOAN:
                this.getPaymentHomecreditLoanInput().click()
                break;
            default:
                throw new Error(`Unknown payment> ${payment}`)
                break;
        }
    }

    // Přejít do kroku zadání osobních údajů, ověřit, že tam jsme a vyplnit osobní údaje k objednávce
    goToCheckoutAndAssert(credentials: OrderData) {
        // Act
        this.getContinueToCheckoutButton().click()
        // Assert
        // je zvýrazněný správný title
        this.getCheckoutTitleBox()
            .should('have.attr', 'class')
            .and('contain', 'active')
        // URL adresa odpovídá
        cy.url().should('eq', `${Cypress.env('baseUrl')}checkout`)
        // Act
        // Vyplnění osobních údajů
        this.getNameField().clear().type(credentials.name)
        this.getSurnameField().clear().type(credentials.surname)
        this.getStreetField().clear().type(credentials.street)
        this.getCityField().clear().type(credentials.city)
        this.getZipField().clear().type(credentials.ZIP)
        this.getCountryField().select(credentials.country)
        this.getEmailField().clear().type(credentials.email)
        this.getPhoneField().clear().type(credentials.phone)
    }

    //Dokončit objednávku a zkontrolovat, zda je dokončená
    finishOrderAndAssert() {
        // Act
        this.getFinishOrderButton().click()
        // Assert
        // Pokud není zaškrtnut souhlas s obchodními podmínkami, zobrazí se alert
        if (this.getConfirmOrderAgreementInput().should('not.be.checked')) {
            cy.on('window:alert', (text) => {
                expect(text).to.eq('Musíte souhlasit s Souhlasím a potvrzuji, že jsem se seznámil s OBCHODNÍMI PODMÍNKAMI. Pokračuji v nákupu.')
            })
        }
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

export enum Shipment {
    SALESROOM,
    DPD
}

export enum Payments {
    CASH,
    BANK_TRANSFER,
    BANK_CARD,
    APPLE_PAY,
    GOOGLE_PAY,
    TWISTO_LATER,
    SKIPPAY_LATER,
    PLATIMPAK_LATER,
    TWISTO_PART,
    SKIPPAY_PART,
    ESSOX_PART,
    AIR_BANK,
    CESKA_SPORITELNA,
    CSOB,
    FIO_BANKA,
    KOMERCNI_BANKA,
    MBANK,
    MONETA_MONEY_BANK,
    RAIFFEISENBANK,
    COFIDIS_LOAN,
    ESSOX_LOAN,
    OTHER_BANKS,
    HOMECREDIT_LOAN
}