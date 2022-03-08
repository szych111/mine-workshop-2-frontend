/// <reference types="cypress" />

function websiteIsOpened() {
    cy.visit("http://localhost:3000");
}

function buttonIsClicked(providerName: string) {
    cy.get('button').contains(providerName).click()
}


describe('OpenWeather', () => {
    it('fetches data from OpenWeather', () => {
        // given
        websiteIsOpened()
        // when
        buttonIsClicked('OpenWeather')
        //then
        cy.get('.provider-data').contains('OpenWeather')
        cy.get('.temp-data').should('not.be.empty')
    })
})

describe('VisualCrossing', () => {
    it('fetches data from VisualCrossing', () => {
        // given
        websiteIsOpened()
        // when
        buttonIsClicked('VisualCrossing')
        //then
        cy.get('.provider-data').contains('VisualCrossing')
        cy.get('.temp-data').should('not.be.empty')
    })
})