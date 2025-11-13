class RegistrationForm {

    get nameInput() {
        return cy.get('#signupName');
    }

    get nameError() {
        return this.nameInput.closest('.form-group').find('.invalid-feedback');
    }

    typeNameAndBlur(value = '') {
        this.nameInput.clear();      
            if (value !== '') {           
                this.nameInput.type(value); 
            }
        this.nameInput.blur();       
    }

    get lastNameInput() {
        return cy.get('#signupLastName');
    }

    get lastNameError() {
        return this.lastNameInput.closest('.form-group').find('.invalid-feedback');
    }

    typeLastNameAndBlur(value = '') {
        this.lastNameInput.clear();
        if (value !== '') {
            this.lastNameInput.type(value);
        }
        this.lastNameInput.blur();
    }
    get emailInput() {
        return cy.get('#signupEmail');
    }

    get emailError() {
        return this.emailInput.closest('.form-group').find('.invalid-feedback');
    }

    typeEmailAndBlur(value = '') {
        this.emailInput.clear();
        if (value !== '') {
            this.emailInput.type(value);
        }
        this.emailInput.blur();
    }
     get passwordInput() {
        return cy.get('#signupPassword');
    }

    get passwordError() {
        return this.passwordInput.closest('.form-group').find('.invalid-feedback');
    }

    typePassword(value) {
        this.passwordInput.type(value);
    }

    typePasswordAndBlur(value = '') {
        this.passwordInput.clear();
        if (value !== '') {
            this.passwordInput.type(value);
        }
        this.passwordInput.blur();
    }
    
    get repeatPasswordInput() {
        return cy.get('#signupRepeatPassword');
    }

    get repeatPasswordError() {
        return this.repeatPasswordInput.closest('.form-group').find('.invalid-feedback');
    }

    typeRepeatPasswordAndBlur(value = '') {
        this.repeatPasswordInput.clear();
        if (value !== '') {
            this.repeatPasswordInput.type(value);
        }
        this.repeatPasswordInput.blur();
    }
    get registerButton() {
       return cy.get('app-signup-modal .modal-footer button.btn.btn-primary');
    }

    clickRegister() {
        this.registerButton.click();  
    }
}
export default new RegistrationForm();