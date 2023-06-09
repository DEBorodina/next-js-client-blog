describe('Contact us page', () => {
  it('Shouldn`t send empty email', () => {
    cy.visit('/contact');
    cy.get('button')
      .contains('Send Message')
      .trigger('mouseover')
      .wait(1000)
      .click();
    cy.get('p').eq(6).contains('Email is required');
  });
});
