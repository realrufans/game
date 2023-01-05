
describe('should fetch only 3 post', () => {
  it('should fetch 3 latest blog posts', () => {
    cy.visit('http://localhost:3000/blog')
    cy.get('a').should('have.length', 3)

  })
})