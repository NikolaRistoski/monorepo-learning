describe('shared-ui: Master component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=master--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Master!');
    });
});
