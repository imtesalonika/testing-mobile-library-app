const {remote} = require('webdriverio');
const assert = require('assert');


describe('Pengumuman', function () {
    this.timeout(40000);

    const capabilities = {
        "platformName": "Android",
        "appium:platformVersion": "15.0",
        "appium:deviceName": "RRCX909A1RT",
        "appium:automationName": "UiAutomator2",
        "appium:app": "/home/tesalonika/Documents/projects/library-application-mobile/build/app/outputs/flutter-apk/app-release.apk",
        "appium:autoGrantPermissions": true,
        "appium:noReset": true
    };

    it('User dapat melihat daftar pengumuman', async () => {
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
            await driver.pause(6000);

            const navigasiMenuPengumuman = await driver.$('//android.view.View[@content-desc="Pengumuman"]');
            await navigasiMenuPengumuman.click()

            const validationDaftarPengumuman = await driver.$('//android.view.View[@content-desc="[Info] Pengumuman Penutupan Sementara\n' +
                '23 May 2025, 10:03"]');
            const isElementDaftarPengumumanExists = await validationDaftarPengumuman.isExisting();
            const isElementDaftarPengumumanDisplayed = await validationDaftarPengumuman.isDisplayed();
            assert.ok( isElementDaftarPengumumanExists && isElementDaftarPengumumanDisplayed, '⚠️ Element Pengumuman tidak ditemukan atau tidak terlihat!');

            // assert.ok( isElementPengumumanExists && isElementPengumumanDisplayed, '⚠️ Element Pengumuman tidak ditemukan atau tidak terlihat!');
            await driver.pause(5500);
            await driver.$('//android.view.View[@content-desc="Profil"]').click()
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('User dapat menguji fitur pencarian pengumuman', async () => {
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
            await driver.pause(2000);

            const navigasiMenuPengumuman = await driver.$('//android.view.View[@content-desc="Pengumuman"]');
            await driver.pause(5500);
            await navigasiMenuPengumuman.click()

            const elemenSearch = await driver.$('//android.widget.EditText')
            await elemenSearch.click()
            const elemenPengisianSearch = await driver.$('//android.widget.EditText')
            await elemenPengisianSearch.click();
            await elemenPengisianSearch.setValue('sosialisasi')

            await driver.pause(1000);

            const validationPengumumanTersedia = await driver.$('//android.view.View[@content-desc="[Info P2MW] Sosialisasi Program Pembinaan Mahasiswa Wirausaha (P2MW) Tahun 2025 , Selasa 06 Mei 2025\n' +
                '23 May 2025, 09:30"]');
            const isvalidationPengumumanTersediaExists = await validationPengumumanTersedia.isExisting();
            console.log(isvalidationPengumumanTersediaExists)
            const isvalidationPengumumanTersediaDisplayed = await validationPengumumanTersedia.isDisplayed();

            assert.ok( isvalidationPengumumanTersediaExists && isvalidationPengumumanTersediaDisplayed, '⚠️ Element Pengumuman tidak ditemukan')

            await driver.pause(4000);
            await driver.$('//android.view.View[@content-desc="Profil"]').click()
            await driver.pause(4000);
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('User dapat melihat detail pengumuman', async () => {
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
            await driver.pause(5500);

            const navigasiMenuPengumuman = await driver.$('//android.view.View[@content-desc="Pengumuman"]');
            await navigasiMenuPengumuman.click()

            const validationJudulPengumuman = await driver.$('//android.view.View[@content-desc="[Info] POJOK STATISTIK HADIR KEMBALI\n' +
                '23 May 2025, 09:59"]');
            await validationJudulPengumuman.click()
            // const isvalidationJudulPengumumanExists = await validationJudulPengumuman.isExisting();
            // const isvalidationJudulPengumumanDisplayed = await validationJudulPengumuman.isDisplayed();
            // assert.ok( isvalidationJudulPengumumanExists && isvalidationJudulPengumumanDisplayed, '⚠️ Element Pengumuman tidak ditemukan atau tidak terlihat!');


            const validationisiPengumuman = await driver.$('//android.view.View[@content-desc="POJOK STATISTIK HADIR KEMBALI"]');
            const isvalidationIsiPengumumanExists = await validationisiPengumuman.isExisting();
            const isvalidationIsiPengumumanDisplayed = await validationisiPengumuman.isDisplayed();
            assert.ok( isvalidationIsiPengumumanExists && isvalidationIsiPengumumanDisplayed, '⚠️ Isi Pengumuman tidak ditemukan atau tidak terlihat!');
            await driver.pause(5500);

            const backButtonPengumuman = await driver.$('//android.widget.Button[@content-desc="Back"]');
            await backButtonPengumuman.click();

            await driver.pause(4000);
            await driver.$('//android.view.View[@content-desc="Profil"]').click()
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()

        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

})
