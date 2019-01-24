const pages = [
  '/data_sources/new',
  '/users',
  '/groups',
  '/destinations/new',
  '/settings/organization',
  '/users/me',
];

describe('Percy Page Screenshots', () => {
  pages.forEach((page) => {
    it(`takes a screenshot of ${page}`, () => {
      cy.login();
      cy.visit(page);
      cy.wait(1000);
      cy.percySnapshot(page);
    });
  });
});
