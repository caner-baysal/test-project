import { errorMessages } from "../../src/components/Register";



describe('Register Page', () => {



  describe("Error Messages", () => {
  it('name input throws error for 2 chars', () => {
    //Arrange
    cy.visit('http://localhost:5173/')
    //Act
    cy.get("[data-cy='ad-input']").type("ca");
    //Assert
    cy.contains(errorMessages.ad);
  })
  it('surname input throws error for 2 chars', () => {
    //Arrange
    cy.visit('http://localhost:5173/')
    //Act
    cy.get("[data-cy='soyad-input']").type("ba");
    //Assert
    cy.contains(errorMessages.soyad);
  })
    it('email input throws error for caner@yah.', () => {
    //Arrange
    cy.visit('http://localhost:5173/')
    //Act
    cy.get("[data-cy='email-input']").type("caner@yah.");
    //Assert
    cy.contains(errorMessages.email);
  })
    it('password input throws error for 1234', () => {
    //Arrange
    cy.visit('http://localhost:5173/')
    //Act
    cy.get("[data-cy='password-input']").type("1234");
    //Assert
    cy.contains(errorMessages.password);
  })
  it('button is disabled for invalidated inputs', () => {
    //Arrange
    cy.visit('http://localhost:5173/')
    //Act
    cy.get("[data-cy='ad-input']").type("ca");
    cy.get("[data-cy='soyad-input']").type("ba");
    cy.get("[data-cy='email-input']").type("caner@yah");
    cy.get("[data-cy='password-input']").type("1234");
    //Assert
    cy.get("[data-cy='submit-button']").should("be.disabled");
  })
})
describe("form inputs validated" , () => {
  it('button enabled for validated input', () => {
    //Arrange
    cy.visit('http://localhost:5173/')
    //Act
    cy.get("[data-cy='ad-input']").type("caner");
    cy.get("[data-cy='soyad-input']").type("baysal");
    cy.get("[data-cy='email-input']").type("caner@yahoo.com");
    cy.get("[data-cy='password-input']").type("1234Aa*");
    //Assert
    cy.get("[data-cy='submit-button']").should("be.enabled");
  })
  it('shows response message on valid submit', () => {
    //Arrange
    cy.visit('http://localhost:5173/')
    //Act
    cy.get("[data-cy='ad-input']").type("caner");
    cy.get("[data-cy='soyad-input']").type("baysal");
    cy.get("[data-cy='email-input']").type("caner@yahoo.com");
    cy.get("[data-cy='password-input']").type("1234Aa*");
    cy.get("[data-cy='submit-button']").click();
    //Assert
    cy.get("[data-cy='response-message']").should("be.visible");
  })
})
})
