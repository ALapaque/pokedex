describe('shared-ui: PokemonCard component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pokemoncard--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to PokemonCard!');
    });
});
