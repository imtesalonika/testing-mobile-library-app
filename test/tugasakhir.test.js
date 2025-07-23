const {remote} = require('webdriverio');
const assert = require('assert');


describe('Tugas Akhir', function () {
    this.timeout(100000);

    const capabilities = {
        "platformName": "Android",
        "appium:platformVersion": "15.0",
        "appium:deviceName": "RRCX909A1RT",
        "appium:automationName": "UiAutomator2",
        "appium:app": "/home/tesalonika/Documents/projects/library-application-mobile/build/app/outputs/flutter-apk/app-release.apk",
        "appium:autoGrantPermissions": true,
        "appium:noReset": true
    };

    it('Navigasi tab Katalog Buku dapat berpindah ke Tugas Akhir', async () => {
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

            const tabKatalogBuku = await driver.$('//android.widget.Button[@content-desc="Katalog Buku"]');
            await tabKatalogBuku.click();

            const tabTugasAkhir = await driver.$('//android.widget.Button[@content-desc="Tugas Akhir"]');
            await tabTugasAkhir.click();

            await driver.pause(5500);
            await driver.$('//android.view.View[@content-desc="Profil"]').click()
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('User menguji navigasi pada tiap  kategori fakultas.', async () => {
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

            const tabTugasAkhir = await driver.$('//android.widget.Button[@content-desc="Tugas Akhir"]');
            await tabTugasAkhir.click();

            //Navigasi FITE
            const tabFite = await driver.$('//android.view.View[@content-desc="FAKULTAS INFORMATIKA DAN TEKNIK ELEKTRO"]');
            await tabFite.click();

            const backButtonFite = await driver.$('//android.view.View[@content-desc="Tugas Akhir FITE"]/android.widget.Button[1]');
            await backButtonFite.click();

            //Navigasi FTI
            const tabFTI = await driver.$('//android.view.View[@content-desc="FAKULTAS TEKNIK INDUSTRI"]');
            await tabFTI.click();

            const backButtonFTI = await driver.$('//android.view.View[@content-desc="Tugas Akhir FTI"]/android.widget.Button[1]');
            await backButtonFTI.click();

            //Navigasi Bioproses
            const tabBioproses = await driver.$('//android.view.View[@content-desc="FAKULTAS BIOPROSES"]');
            await tabBioproses.click();

            const backButtonBioproses = await driver.$('//android.view.View[@content-desc="Tugas Akhir Bioproses"]/android.widget.Button[1]');
            await backButtonBioproses.click();

            //Navigasi Vokasi
            const tabVokasi = await driver.$('//android.view.View[@content-desc="FAKULTAS VOKASI"]');
            await tabVokasi.click();

            const backButtonVokasi = await driver.$('//android.view.View[@content-desc="Tugas Akhir Vokasi"]/android.widget.Button[1]');
            await backButtonVokasi.click();

            await driver.pause(5500);
            await driver.$('//android.view.View[@content-desc="Profil"]').click()
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('User menguji navigasi pada tiap prodi yang ada.', async () => {
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

            const tabTugasAkhir = await driver.$('//android.widget.Button[@content-desc="Tugas Akhir"]');
            await tabTugasAkhir.click();

            //Navigasi FITE
            const tabFite = await driver.$('//android.view.View[@content-desc="FAKULTAS INFORMATIKA DAN TEKNIK ELEKTRO"]');
            await tabFite.click();

            const tabProdiSI = await driver.$('//android.view.View[@content-desc="Sistem Informasi\n' +
                'Tab 2 of 3"]');
            await tabProdiSI.click();

            const tabProdiIF = await driver.$('//android.view.View[@content-desc="Informatika\n' +
                'Tab 1 of 3"]');
            await tabProdiIF.click();

            const tabProdiTE = await driver.$('//android.view.View[@content-desc="Teknik Elektro\n' +
                'Tab 3 of 3"]');
            await tabProdiTE.click();

            const backButtonFite = await driver.$('//android.view.View[@content-desc="Tugas Akhir FITE"]/android.widget.Button[1]');
            await backButtonFite.click();

            //Navigasi FTI
            const tabFTI = await driver.$('//android.view.View[@content-desc="FAKULTAS TEKNIK INDUSTRI"]');
            await tabFTI.click();

            const tabProdiMR = await driver.$('//android.view.View[@content-desc="Manajemen Rekayasa\n' +
                'Tab 1 of 2"]');
            await tabProdiMR.click();

            const tabProdiMetal = await driver.$('//android.view.View[@content-desc="Metalurgi\n' +
                'Tab 2 of 2"]');
            await tabProdiMetal.click();

            const backButtonFTI = await driver.$('//android.view.View[@content-desc="Tugas Akhir FTI"]/android.widget.Button[1]');
            await backButtonFTI.click();

            //Navigasi Bioproses
            const tabBioproses = await driver.$('//android.view.View[@content-desc="FAKULTAS BIOPROSES"]');
            await tabBioproses.click();

            const tabProdiBioproses = await driver.$('//android.view.View[@content-desc="Bioproses\n' +
                'Tab 1 of 1"]');
            await tabProdiBioproses.click();

            const backButtonBioproses = await driver.$('//android.view.View[@content-desc="Tugas Akhir Bioproses"]/android.widget.Button[1]');
            await backButtonBioproses.click();

            //Navigasi Vokasi
            const tabVokasi = await driver.$('//android.view.View[@content-desc="FAKULTAS VOKASI"]');
            await tabVokasi.click();

            const tabProdiTI = await driver.$('//android.view.View[@content-desc="Teknologi Informasi\n' +
                'Tab 1 of 3"]');
            await tabProdiTI.click();

            await driver.pause(5000);

            const tabProdiTK = await driver.$('//android.view.View[@content-desc="Teknologi Komputer\n' +
                'Tab 2 of 3"]');
            await tabProdiTK.click();

            const tabProdiTrpl = await driver.$('//android.view.View[@content-desc="Teknologi Rekayasa Perangkat Lunak\n' +
                'Tab 3 of 3"]');
            await tabProdiTrpl.click();

            const backButtonVokasi = await driver.$('//android.view.View[@content-desc="Tugas Akhir Vokasi"]/android.widget.Button[1]');
            await backButtonVokasi.click();

            await driver.pause(5500);
            await driver.$('//android.view.View[@content-desc="Profil"]').click()
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('User menguji fitur pencarian (search)', async () => {
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

            const tabTugasAkhir = await driver.$('//android.widget.Button[@content-desc="Tugas Akhir"]');
            await tabTugasAkhir.click();

            //Navigasi FITE
            const tabFite = await driver.$('//android.view.View[@content-desc="FAKULTAS INFORMATIKA DAN TEKNIK ELEKTRO"]');
            await tabFite.click();

            const tabProdiSI = await driver.$('//android.view.View[@content-desc="Sistem Informasi\n' +
                'Tab 2 of 3"]');
            await tabProdiSI.click();

            const elemenSearchTASI = await driver.$('//android.view.View[@content-desc="Tugas Akhir FITE"]/android.widget.Button[2]')
            await elemenSearchTASI.click()
            const elemenPengisianSI = await driver.$('//android.widget.EditText')
            await elemenPengisianSI.click();
            await elemenPengisianSI.setValue('Pengembangan')
            await driver.pause(3000);

            const backButtonSI = await driver.$('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.widget.Button');
            await backButtonSI.click();

            const tabProdiIF = await driver.$('//android.view.View[@content-desc="Informatika\n' +
                'Tab 1 of 3"]');
            await tabProdiIF.click();

            const elemenSearchTAIF = await driver.$('//android.view.View[@content-desc="Tugas Akhir FITE"]/android.widget.Button[2]')
            await elemenSearchTAIF.click()
            const elemenPengisianIF = await driver.$('//android.widget.EditText')
            await elemenPengisianIF.click();
            await elemenPengisianIF.setValue('Investigasi')
            await driver.pause(3000);

            const backButtonIF = await driver.$('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.widget.Button');
            await backButtonIF.click();

            const tabProdiTE = await driver.$('//android.view.View[@content-desc="Teknik Elektro\n' +
                'Tab 3 of 3"]');
            await tabProdiTE.click();

            const elemenSearchTATE = await driver.$('//android.view.View[@content-desc="Tugas Akhir FITE"]/android.widget.Button[2]')
            await elemenSearchTATE  .click()
            const elemenPengisianTE = await driver.$('//android.widget.EditText')
            await elemenPengisianTE.click();
            await elemenPengisianTE.setValue('Perancangan')
            await driver.pause(3000);

            const backButtonTE = await driver.$('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.widget.Button');
            await backButtonTE.click();

            const backButtonFite = await driver.$('//android.view.View[@content-desc="Tugas Akhir FITE"]/android.widget.Button[1]');
            await backButtonFite.click();

            await driver.pause(5000);
            await driver.$('//android.view.View[@content-desc="Profil"]').click()
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('User dapat melihat detail tugas akhir.', async () => {
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

            const tabTugasAkhir = await driver.$('//android.widget.Button[@content-desc="Tugas Akhir"]');
            await driver.pause(4000);
            await tabTugasAkhir.click();

            //Navigasi FITE
            const tabFite = await driver.$('//android.view.View[@content-desc="FAKULTAS INFORMATIKA DAN TEKNIK ELEKTRO"]');
            await tabFite.click();

            //Prodi SI
            const tabProdiSI = await driver.$('//android.view.View[@content-desc="Sistem Informasi\n' +
                'Tab 2 of 3"]');
            await tabProdiSI.click();

            const validationElementTASI = await driver.$('//android.widget.ImageView[@content-desc="Perancangan Aplikasi Virtual Fax machine\n' +
                'Fitri Fahreza, Harul Monang Sihotang"]');
            const isElementTASIExists = await validationElementTASI.isExisting();
            const isElementTASIDisplayed = await validationElementTASI.isDisplayed();
            await driver.pause(4000);
            await validationElementTASI.click()

            const validationJudulTASI = await driver.$('//android.view.View[@content-desc="Perancangan Aplikasi Virtual Fax machine"]');
            const isvalidationJudulTASIExists = await validationJudulTASI.isExisting();
            const isvalidationJudulTASIDisplayed = await validationJudulTASI.isDisplayed();

            console.log('\n\n\n-------------------------------------------------------------------------')
            console.log('Scroll ke bagian abstrak TA')
            console.log('-------------------------------------------------------------------------\n\n\n')
            await driver.pause(10000);


            const validationabstrakTASI = await driver.$('//android.view.View[@content-desc="Abstrak"]');
            const isvalidationabstrakTASIExists = await validationabstrakTASI.isExisting();
            const isvalidationabstrakTASIDisplayed = await validationabstrakTASI.isDisplayed();

            const backButtonSI = await driver.$('//android.widget.Button');
            await backButtonSI.click();

            assert.ok( isElementTASIExists && isElementTASIDisplayed, '⚠️ Element TA tidak ditemukan atau tidak terlihat!');
            assert.ok( isvalidationJudulTASIExists && isvalidationJudulTASIDisplayed, '⚠️ Element TA tidak ditemukan atau tidak terlihat!');
            assert.ok( isvalidationabstrakTASIExists && isvalidationabstrakTASIDisplayed, '⚠️ Element TA tidak ditemukan atau tidak terlihat!');

            // Prodi IF
            const tabProdiIF = await driver.$('//android.view.View[@content-desc="Informatika\n' +
                'Tab 1 of 3"]');
            await tabProdiIF.click();

            const validationElementTAIF = await driver.$('//android.widget.ImageView[@content-desc="Development of Crossword Puzzle Generator\n' +
                'Elga F. Silaban, Amson ujung, Grace Isabella"]');
            const isElementTAIFExists = await validationElementTAIF.isExisting();
            const isElementTAIFDisplayed = await validationElementTAIF.isDisplayed();
            await validationElementTAIF.click()

            const validationJudulTAIF = await driver.$('//android.view.View[@content-desc="Development of Crossword Puzzle Generator"]');
            const isvalidationJudulTAIFExists = await validationJudulTAIF.isExisting();
            const isvalidationJudulTAIFDisplayed = await validationJudulTAIF.isDisplayed();

            console.log('\n\n\n-------------------------------------------------------------------------')
            console.log('Scroll ke bagian abstrak TA')
            console.log('-------------------------------------------------------------------------\n\n\n')
            await driver.pause(10000);

            const validationabstrakTAIF = await driver.$('//android.view.View[@content-desc="Abstrak"]');
            const isvalidationabstrakTAIFExists = await validationabstrakTAIF.isExisting();
            const isvalidationabstrakTAIFDisplayed = await validationabstrakTAIF.isDisplayed();

            const backButtonIF = await driver.$('//android.widget.Button');
            await backButtonIF.click();

            assert.ok( isElementTAIFExists && isElementTAIFDisplayed, '⚠️ Element TA tidak ditemukan atau tidak terlihat!');
            assert.ok( isvalidationJudulTAIFExists && isvalidationJudulTAIFDisplayed, '⚠️ Element TA tidak ditemukan atau tidak terlihat!');
            assert.ok( isvalidationabstrakTAIFExists && isvalidationabstrakTAIFDisplayed, '⚠️ Element TA tidak ditemukan atau tidak terlihat!');

            //Prodi TE
            const tabProdiTE = await driver.$('//android.view.View[@content-desc="Teknik Elektro\n' +
                'Tab 3 of 3"]');
            await tabProdiTE.click();

            const validationElementTATE = await driver.$('//android.widget.ImageView[@content-desc="Rancang Bangun Pengendalian Dan Pemantauan Nutrisi Pada Sistem Pertanian Vertikal Indoor Dengan Panel Surya\n' +
                'Ando Samuel Sitinjak"]');
            const isElementTATEExists = await validationElementTATE.isExisting();
            const isElementTATEDisplayed = await validationElementTATE.isDisplayed();
            await validationElementTATE.click()

            const validationJudulTATE = await driver.$('//android.view.View[@content-desc="Rancang Bangun Pengendalian Dan Pemantauan Nutrisi Pada Sistem Pertanian Vertikal Indoor Dengan Panel Surya"]');
            const isvalidationJudulTATEExists = await validationJudulTATE.isExisting();
            const isvalidationJudulTATEDisplayed = await validationJudulTATE.isDisplayed();

            console.log('\n\n\n-------------------------------------------------------------------------')
            console.log('Scroll ke bagian abstrak TA')
            console.log('-------------------------------------------------------------------------\n\n\n')
            await driver.pause(10000);

            const validationabstrakTATE = await driver.$('//android.view.View[@content-desc="Abstrak"]');
            const isvalidationabstrakTATEExists = await validationabstrakTATE.isExisting();
            const isvalidationabstrakTATEDisplayed = await validationabstrakTATE.isDisplayed();

            const backButtonTE = await driver.$('//android.widget.Button');
            await backButtonTE.click();

            assert.ok( isElementTATEExists && isElementTATEDisplayed, '⚠️ Element TA tidak ditemukan atau tidak terlihat!');
            assert.ok( isvalidationJudulTATEExists && isvalidationJudulTATEDisplayed, '⚠️ Element TA tidak ditemukan atau tidak terlihat!');
            assert.ok( isvalidationabstrakTATEExists && isvalidationabstrakTATEDisplayed, '⚠️ Element TA tidak ditemukan atau tidak terlihat!');

            const backButtonFite = await driver.$('//android.view.View[@content-desc="Tugas Akhir FITE"]/android.widget.Button[1]');
            await backButtonFite.click();

            await driver.pause(5500);
            await driver.$('//android.view.View[@content-desc="Profil"]').click()
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })






















})
