export class submitForm {
  Submit() {
    cy.get("form").submit();
  }
}
export const FormSubmit = new submitForm();
