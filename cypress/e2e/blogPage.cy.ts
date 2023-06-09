import { baseUrlL } from '../constants';

describe('Global navigation', () => {
  it('Should redirect to featured post', () => {
    cy.visit('/blog');
    cy.get('a').contains('Read more >').click();
    cy.url().should('eq', `${baseUrlL}/en/post/1`);
  });

  it('Should redirect to post list item', () => {
    cy.visit('/blog');
    cy.get('span').contains('startup').click();
    cy.url().should('eq', `${baseUrlL}/en/post/1`);
  });
});
