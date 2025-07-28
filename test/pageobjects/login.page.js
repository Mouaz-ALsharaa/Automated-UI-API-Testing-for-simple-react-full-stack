import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username'); // Assuming the input has an id of 'username'
    }

    get inputPassword () {
        return $('#password'); // Assuming the input has an id of 'password'
    }

    get btnSubmit () {
        return $('#login'); // Assuming the button has an id of 'login'
    }
    get alertMessage () {
        return $('#alertMassage'); // Assuming the alert message has an id of 'alertMassage'
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
