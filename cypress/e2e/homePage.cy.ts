const baseUrlL = Cypress?.config()?.baseUrl?.toString()!;

describe('Home page', () => {
  it('Should redirect to featured post', () => {
    cy.visit('/');
    cy.get('a').contains('Read more >').click();
    cy.url().should('eq', `${baseUrlL}/en/post/1`);
  });

  it('Should redirect to second post', () => {
    cy.visit('/');
    cy.get('a[data-cy=featured-post-link]').click();
    cy.url().should('eq', `${baseUrlL}/en/post/2`);
  });

  it('Should redirect to blog page', () => {
    cy.visit('/');
    cy.get('a').contains('View all').click();
    cy.url().should('eq', `${baseUrlL}/en/blog`);
  });

  it('Should redirect to about page', () => {
    cy.visit('/');
    cy.scrollTo(0, 1500, { duration: 1000 });
    cy.get('a[data-cy=read-more-about]').click();
    cy.url().should('eq', `${baseUrlL}/en/about`);
  });

  it('Should redirect to category', () => {
    cy.visit('/');
    cy.scrollTo(0, 1500, { duration: 1000 });
    cy.get('h5').contains('Business').click();
    cy.url().should('eq', `${baseUrlL}/en/category/business`);
  });

  it('Should redirect to about page', () => {
    cy.visit('/');
    cy.scrollTo(0, 1500, { duration: 1000 });
    cy.scrollTo(0, 3000, { duration: 1000 });
    cy.get('a').contains('Discover our story >').click();
    cy.url().should('eq', `${baseUrlL}/en/about`);
  });

  it('Should redirect to author page', () => {
    cy.visit('/');
    cy.scrollTo(0, 1500, { duration: 1000 });
    cy.scrollTo(0, 3000, { duration: 1000 });
    cy.get('a').contains('Floyd Miles').click();
    cy.url().should('eq', `${baseUrlL}/en/author/1`);
  });

  it('Should redirect to contact us page', () => {
    cy.visit('/');
    cy.scrollTo(0, 1500, { duration: 1000 });
    cy.scrollTo(0, 3000, { duration: 1000 });
    cy.scrollTo(0, 4500, { duration: 1000 });
    cy.scrollTo(0, 6000, { duration: 1000 });
    cy.scrollTo(0, 7500, { duration: 1000 });
    cy.get('a').contains('Join Now').click();
    cy.url().should('eq', `${baseUrlL}/en/contact`);
  });
});

export {};
