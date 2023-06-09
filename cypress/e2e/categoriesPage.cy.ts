describe('Test categories page', () => {
  it('Should choose tag', () => {
    cy.visit('/category/startup');
    cy.get('span')
      .contains('Marketing')
      .trigger('mouseover')
      .wait(1000)
      .click()
      .invoke('attr', 'class')
      .should('match', /.+selected.+/);
  });
  it('Should remove chosen tag', () => {
    cy.visit('/category/startup');
    cy.get('span')
      .contains('Marketing')
      .trigger('mouseover')
      .wait(1000)
      .click()
      .trigger('mouseover')
      .wait(1000)
      .click()
      .invoke('attr', 'class')
      .should('not.match', /.+selected.+/);
  });
  it('Should choose tag with search input', () => {
    cy.visit('/category/startup');
    cy.get('input[placeholder*="Search for tag..."]')
      .focus()
      .wait(100)
      .type('UI')
      .wait(100);

    cy.get('span').contains('UI').trigger('mouseover').wait(1000).click();
    cy.get('span')
      .contains('UI')
      .invoke('attr', 'class')
      .should('match', /.+selected.+/);
  });
});

export {};
