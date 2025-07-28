import LoginPage from '../pageobjects/login.page.js'
import DashboardPage from '../pageobjects/dashboard.page.js'

describe('Login Cases', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('admin', 'admin1235');
        await expect(DashboardPage.btnlogout).toBeExisting();
    });

it('should show error with invalid username', async () => {
    await LoginPage.open();
    await LoginPage.login('wronguser', 'admin1235');
    await expect(await LoginPage.alertMessage.getText()).toContain('Invalid credentials');
});

it('should show error with invalid password', async () => {
    await LoginPage.open();
    await LoginPage.login('admin', 'wrongpass');
    await expect(await LoginPage.alertMessage.getText()).toContain('Invalid credentials');
});

it('should show error with invalid credentials then login successfully with valid credentials', async () => {
    await LoginPage.open();
    await LoginPage.login('admin', 'wrongpass');
    await expect(await LoginPage.alertMessage.getText()).toContain('Invalid credentials');
  await LoginPage.login('admin', 'admin1235');
await expect(DashboardPage.btnlogout).toBeExisting();
});

it('should show error when fields are empty', async () => {
    await LoginPage.open();
    await LoginPage.login('', '');
    await expect(await LoginPage.alertMessage.getText()).toContain('Please enter both username and password');
});
it('should show error when password is empty', async () => {
    await LoginPage.open();
    await LoginPage.login('admin', '');
    await expect(await LoginPage.alertMessage.getText()).toContain('Please enter both username and password');
});
it('should show error when username is empty', async () => {
    await LoginPage.open();
    await LoginPage.login('', 'admin1235');
    await expect(await LoginPage.alertMessage.getText()).toContain('Please enter both username and password');
});
});
