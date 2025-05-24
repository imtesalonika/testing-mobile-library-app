const {remote} = require('webdriverio');
const assert = require('assert');

describe('Login', function () {
    this.timeout(40000);

    const capabilities = {
        "platformName": "Android",
        "appium:platformVersion": "14.0",
        "appium:deviceName": "RRCX909A1RT",
        "appium:automationName": "UiAutomator2",
        "appium:app": "/home/tesalonika/Documents/projects/library-application-mobile/build/app/outputs/flutter-apk/app-release.apk",
        "appium:autoGrantPermissions": true,
        "appium:noReset": true
    };

   it('Berhasil Login', async () => {
       let driver = await remote({
           hostname: process.env.APPIUM_HOST || 'localhost',
           port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
           logLevel: 'info',
           capabilities,
       });

       try {
           await driver.$('//android.view.View[@content-desc="Profil"]').click()
           await driver.$('//android.widget.Button[@content-desc="Log In"]').click()

           const inputUsername = await driver.$('//android.widget.ImageView/android.widget.EditText[1]')
           await inputUsername.click()
           await inputUsername.setValue('ifs21005')

           const inputPassword = await driver.$('//android.widget.ImageView/android.widget.EditText[2]')
           await inputPassword.click()
           await inputPassword.setValue('nana21005')

           await driver.$('//android.widget.Button[@content-desc="Login"]').click()

           const validationElement = await driver.$('//android.widget.Button[@content-desc="Tugas Akhir"]');
           const isElementExists = await validationElement.isExisting();
           const isElementDisplayed = await validationElement.isDisplayed();

           assert.ok(isElementExists && isElementDisplayed, '⚠️ Element Tugas Akhir tidak ditemukan atau tidak terlihat!');
           await driver.pause(5500);
           await driver.$('//android.view.View[@content-desc="Profil"]').click()
           await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()
       } finally {
           await driver.terminateApp('com.mycompany.libraryapplication');
           await driver.deleteSession();
       }
   })

    it('Tidak Berhasil Login karena Username Salah', async () => {
        let driver = await remote({
            hostname: process.env.APPIUM_HOST || 'localhost',
            port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
            logLevel: 'info',
            capabilities,
        });

        try {
            await driver.$('//android.view.View[@content-desc="Profil"]').click()
            await driver.$('//android.widget.Button[@content-desc="Log In"]').click()

            const inputUsername = await driver.$('//android.widget.ImageView/android.widget.EditText[1]')
            await inputUsername.click()
            await inputUsername.setValue('ifs210005')

            const inputPassword = await driver.$('//android.widget.ImageView/android.widget.EditText[2]')
            await inputPassword.click()
            await inputPassword.setValue('nana21005')

            await driver.$('//android.widget.Button[@content-desc="Login"]').click()

            const validationElement = await driver.$('//android.view.View[@content-desc="Login gagal. Periksa kembali kredensial Anda."]');
            const isElementExists = await validationElement.isExisting();
            const isElementDisplayed = await validationElement.isDisplayed();

            assert.ok(isElementExists && isElementDisplayed, '⚠️ Snackbar username salah tidak terlihat!');
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('Tidak Berhasil Login karena Password Salah', async () => {
        let driver = await remote({
            hostname: process.env.APPIUM_HOST || 'localhost',
            port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
            logLevel: 'info',
            capabilities,
        });

        try {
            await driver.$('//android.view.View[@content-desc="Profil"]').click()
            await driver.$('//android.widget.Button[@content-desc="Log In"]').click()

            const inputUsername = await driver.$('//android.widget.ImageView/android.widget.EditText[1]')
            await inputUsername.click()
            await inputUsername.setValue('ifs210005')

            const inputPassword = await driver.$('//android.widget.ImageView/android.widget.EditText[2]')
            await inputPassword.click()
            await inputPassword.setValue('nana2105')

            await driver.$('//android.widget.Button[@content-desc="Login"]').click()

            const validationElement = await driver.$('//android.view.View[@content-desc="Login gagal. Periksa kembali kredensial Anda."]');
            const isElementExists = await validationElement.isExisting();
            const isElementDisplayed = await validationElement.isDisplayed();

            assert.ok(isElementExists && isElementDisplayed, '⚠️ Snackbar password salah tidak terlihat!');
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('Tidak Berhasil Login karena Username Kosong', async () => {
        let driver = await remote({
            hostname: process.env.APPIUM_HOST || 'localhost',
            port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
            logLevel: 'info',
            capabilities,
        });

        try {
            await driver.$('//android.view.View[@content-desc="Profil"]').click()
            await driver.$('//android.widget.Button[@content-desc="Log In"]').click()

            const inputUsername = await driver.$('//android.widget.ImageView/android.widget.EditText[1]')
            await inputUsername.click()
            await inputUsername.setValue('')

            const inputPassword = await driver.$('//android.widget.ImageView/android.widget.EditText[2]')
            await inputPassword.click()
            await inputPassword.setValue('nana2105')

            await driver.$('//android.widget.Button[@content-desc="Login"]').click()

            const validationElement = await driver.$('//android.view.View[@content-desc="Harap isi semua kolom"]');
            const isElementExists = await validationElement.isExisting();
            const isElementDisplayed = await validationElement.isDisplayed();

            assert.ok(isElementExists && isElementDisplayed, '⚠️ Snackbar username kosong tidak terlihat!');
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('Tidak Berhasil Login karena Password Kosong', async () => {
        let driver = await remote({
            hostname: process.env.APPIUM_HOST || 'localhost',
            port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
            logLevel: 'info',
            capabilities,
        });

        try {
            await driver.$('//android.view.View[@content-desc="Profil"]').click()
            await driver.$('//android.widget.Button[@content-desc="Log In"]').click()

            const inputUsername = await driver.$('//android.widget.ImageView/android.widget.EditText[1]')
            await inputUsername.click()
            await inputUsername.setValue('ifs21005')

            const inputPassword = await driver.$('//android.widget.ImageView/android.widget.EditText[2]')
            await inputPassword.click()
            await inputPassword.setValue('')

            await driver.$('//android.widget.Button[@content-desc="Login"]').click()

            const validationElement = await driver.$('//android.view.View[@content-desc="Harap isi semua kolom"]');
            const isElementExists = await validationElement.isExisting();
            const isElementDisplayed = await validationElement.isDisplayed();

            assert.ok(isElementExists && isElementDisplayed, '⚠️ Snackbar password kosong tidak terlihat!');
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })



})
