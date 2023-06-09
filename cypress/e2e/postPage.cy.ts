import { baseUrlL } from '../constants';

describe('Test post page', () => {
  it('Should redirect to author page', () => {
    cy.visit('/post/1');
    cy.get('a').contains('Floyd Miles').click();
    cy.url().should('eq', `${baseUrlL}/en/author/1`);
  });

  it('Should redirect to read next post page', () => {
    cy.visit('/post/1');
    cy.get('a')
      .contains('How to build rapport with your web design clients')
      .click();
    cy.url().should('eq', `${baseUrlL}/en/post/2`);
  });
});
