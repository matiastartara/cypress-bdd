class homeSaucePage {
    
    elements = {
      usernameInput: () => cy.get("#user-name"),
      passwordInput: () => cy.get("#password"),
      loginBtn: () => cy.get("#login-button"),
      errorMessage: () => cy.get('h3[data-test="error"]'),
    };
  
    typeUsername(username:string) {
      this.elements.usernameInput().type(username);
    }
  
    typePassword(password:string) {
      this.elements.passwordInput().type(password);
    }
  
    clickLogin() {
      this.elements.loginBtn().click();
    }
  
    submitLogin(username:string,password:string){
      this.elements.usernameInput().type(username);
      this.elements.passwordInput().type(password);
      this.elements.loginBtn().click();
    }
  }
  
  module.exports = new homeSaucePage();