import { baseUrlL } from '../constants';

describe('Global navigation', () => {
  it('Should redirect to page with language specified', () => {
    cy.visit('/');
    cy.url().should('eq', `${baseUrlL}/en`);
  });
});

describe('Test header navigation', () => {
  it('Should redirect to blog page', () => {
    cy.visit('/');
    cy.get('a').contains('Blog').click();
    cy.url().should('eq', `${baseUrlL}/en/blog`);
  });
  it('Should redirect to about page', () => {
    cy.visit('/');
    cy.get('a').contains('About us').click();
    cy.url().should('eq', `${baseUrlL}/en/about`);
  });
  it('Should redirect to contact page', () => {
    cy.visit('/');
    cy.get('a').contains('Contact us').click();
    cy.url().should('eq', `${baseUrlL}/en/contact`);
  });
});

describe('Test footer navigation', () => {
  it('Should redirect to blog page', () => {
    cy.visit('/');
    cy.get('nav > a').contains('Blog').last().click();
    cy.url().should('eq', `${baseUrlL}/en/blog`);
  });
  it('Should redirect to about page', () => {
    cy.visit('/');
    cy.get('nav > a').contains('About us').last().click();
    cy.url().should('eq', `${baseUrlL}/en/about`);
  });
  it('Should redirect to contact page', () => {
    cy.visit('/');
    cy.get('nav > a').contains('Contact us').last().click();
    cy.url().should('eq', `${baseUrlL}/en/contact`);
  });
  it('Should redirect to privacy policy page', () => {
    cy.visit('/');
    cy.get('a').contains('Privacy policy').click();
    cy.url().should('eq', `${baseUrlL}/en/privacy-policy`);
  });
});

export {};
