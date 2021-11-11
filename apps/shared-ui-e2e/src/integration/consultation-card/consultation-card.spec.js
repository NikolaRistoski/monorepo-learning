describe('shared-ui: ConsultationCard component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=consultationcard--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ConsultationCard!');
    });
});
