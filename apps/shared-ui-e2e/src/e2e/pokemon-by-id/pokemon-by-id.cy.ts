describe('shared-ui: PokemonById component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pokemonbyid--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to PokemonById!');
    });
});
