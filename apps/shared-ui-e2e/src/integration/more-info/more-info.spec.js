describe('shared-ui: MoreInfo component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=moreinfo--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to MoreInfo!');
    });
});
