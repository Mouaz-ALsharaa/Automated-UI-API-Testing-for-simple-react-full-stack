import LoginPage from '../pageobjects/login.page.js'
import DashboardPage from '../pageobjects/dashboard.page.js'
import MainPage from '../pageobjects/main.page.js';

describe('Dashboard Cases', () => {

    it('should not access dashboard without login', async () => {
        await DashboardPage.open();
        await expect(MainPage.btnLogin).toBeExisting();
    });

    it('should logout successfully', async () => {
        await LoginPage.open();
        await LoginPage.login('admin', 'admin1235');
        await expect(DashboardPage.btnlogout).toBeExisting();
        await DashboardPage.btnlogout.click();
        await expect(MainPage.btnLogin).toBeExisting();
    });

    it('should add new item', async () => {
        await LoginPage.open();
        await LoginPage.login('admin', 'admin1235');
        const value = 'Test Item ' + Date.now();
        await DashboardPage.inputValue.setValue(value);
        await DashboardPage.btnAdd.click();
        await expect(await DashboardPage.getItemByValue(value)).toBeExisting();
    });

    it('should edit an item', async () => {
        await LoginPage.open();
        await LoginPage.login('admin', 'admin1235');
        const value = 'Item to Edit ' + Date.now();
        await DashboardPage.inputValue.setValue(value);
        await DashboardPage.btnAdd.click();
        await DashboardPage.getEditButtonByValue(value).click();
        const newValue = value + ' Edited';
        await DashboardPage.inputValue.setValue(newValue);
        await DashboardPage.btnEdit.click();
        await expect(await DashboardPage.getItemByValue(newValue)).toBeExisting();
    });

    it('should delete an item', async () => {
        await LoginPage.open();
        await LoginPage.login('admin', 'admin1235');
        const value = 'Item to Delete ' + Date.now();
        await DashboardPage.inputValue.setValue(value);
        await DashboardPage.btnAdd.click();
        await DashboardPage.getDeleteButtonByValue(value).click();
        await expect(await DashboardPage.getItemByValue(value)).not.toBeExisting();
    });

});

