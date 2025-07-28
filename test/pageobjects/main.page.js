import Page from './page.js';

class MainPage extends Page {

    get btnLogin () {
        return $('#login');
    }

}
export default new MainPage();
