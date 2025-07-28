import Page from './page.js';



class DashboardPage extends Page {
 
    get btnlogout () {
        return $('#logout');
    }

    get inputValue () {
        return $('#inputValue'); // Assuming the input has an id of 'inputValue'
    }
    get btnAdd () {
        return $('#Add'); // Assuming the button has an id of 'Add'
    }
    get btnEdit () {
        return $('#Edit'); // Assuming the button has an id of 'Edit'
    }  
getItemByValue(value) {
     return $(`//li[contains(text(),"${value}")]`);
}
getEditButtonByValue(value) {
  return $(`//li[contains(text(),"${value}")]//button[contains(text(),"Edit")]`);
}
getDeleteButtonByValue(value) {
    return $(`//li[contains(text(),"${value}")]//button[contains(text(),"Delete")]`);
}
    open () {
        return super.open('dashboard');
    }
}

export default new DashboardPage();
