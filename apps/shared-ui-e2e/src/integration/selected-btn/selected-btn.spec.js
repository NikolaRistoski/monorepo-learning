describe('shared-ui: SelectedBtn component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=selectedbtn--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SelectedBtn!');
    });
});
