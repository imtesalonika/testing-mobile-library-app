const {remote} = require('webdriverio');
const assert = require('assert');


describe('Katalog Buku', function () {
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

    it('User dapat melihat daftar buku terbaru', async () => {
        let driver = await remote({
            hostname: process.env.APPIUM_HOST || 'localhost',
            port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
            logLevel: 'error',
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
            await driver.pause(5000);

            const validationElementBukuTerbaru = await driver.$('//android.view.View[@content-desc="Appleworks 6 : the m..."]');
            const isElementBukuTerbaruExists = await validationElementBukuTerbaru.isExisting();
            const isElementBukuTerbaruDisplayed = await validationElementBukuTerbaru.isDisplayed();

            // const validationElementBukuFavorit = await driver.$('//android.view.View[@content-desc="Buku Favorit"]');
            // const isElementBukuFavoritExists = await validationElement.isExisting();
            // const isElementBukuFavoritDisplayed = await validationElement.isDisplayed();

            assert.ok( isElementBukuTerbaruExists && isElementBukuTerbaruDisplayed, '⚠️ Element Buku tidak ditemukan atau tidak terlihat!');
            await driver.pause(6000);
            await driver.$('//android.view.View[@content-desc="Profil"]').click()
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('User dapat menambahkan buku ke favorite dan melihat list buku favorite', async () => {
        let driver = await remote({
            hostname: process.env.APPIUM_HOST || 'localhost',
            port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
            logLevel: 'error',
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

            const bukuTarget = await driver.$('//android.view.View[@content-desc="Embedded Microproces..."]');
            await bukuTarget.click();

            console.log('\n\n\n-------------------------------------------------------------------------')
            console.log('Scroll ke tombol simpan ke favoritnya')
            console.log('-------------------------------------------------------------------------\n\n\n')

            await driver.pause(10000);
            const favButton = await driver.$('//android.widget.Button[@content-desc="Simpan ke Favorit"]');
            await favButton.click();

            const backButton = await driver.$('//android.widget.Button');
            await backButton.click();

            const validationElementBukuFavorit = await driver.$('//android.view.View[@content-desc="Embedded Microproces..."]');
            const isElementBukuFavoritExists = await validationElementBukuFavorit.isExisting();
            const isElementBukuFavoritDisplayed = await validationElementBukuFavorit.isDisplayed();

            assert.ok( isElementBukuFavoritExists && isElementBukuFavoritDisplayed, '⚠️ Element Buku tidak ditemukan atau tidak terlihat!');
            await driver.pause(6000);
            await driver.$('//android.view.View[@content-desc="Profil"]').click()
            await driver.pause(5000);
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('User dapat User dapat menghapus buku dari daftar buku favorite ', async () => {
        let driver = await remote({
            hostname: process.env.APPIUM_HOST || 'localhost',
            port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
            logLevel: 'error',
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

            const bukuTarget = await driver.$('//android.view.View[@content-desc="Embedded Microproces..."]');
            await bukuTarget.click();

            console.log('\n\n\n-------------------------------------------------------------------------')
            console.log('Scroll ke tombol hapus dari favorit')
            console.log('-------------------------------------------------------------------------\n\n\n')

            await driver.pause(10000);
            const favButton = await driver.$('//android.widget.Button[@content-desc="Hapus dari Favorit"]');
            await favButton.click();

            const backButton = await driver.$('//android.widget.Button');
            await backButton.click();

            await driver.pause(4000);
            await driver.$('//android.view.View[@content-desc="Profil"]').click()
            await driver.pause(4000);
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('User dapat menguji fitur pencarian buku', async () => {
        let driver = await remote({
            hostname: process.env.APPIUM_HOST || 'localhost',
            port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
            logLevel: 'error',
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
            const elemenSearch = await driver.$('//android.widget.ScrollView/android.view.View[2]')
            await elemenSearch.click()
            const elemenPengisianSearch = await driver.$('//android.widget.EditText')
            await elemenPengisianSearch.click();
            await elemenPengisianSearch.setValue('kalkulus')

            await driver.pause(1000);

            const validationBukuTersedia = await driver.$('//android.widget.ImageView[@content-desc="Kalkulus dan geometri analitis Jilid 2\n' +
                'Edwin J. Purcell dan Dale Varberg"]');
            const isvalidationBukuTersediaExists = await validationBukuTersedia.isExisting();
            console.log(isvalidationBukuTersediaExists)
            const isvalidationBukuTersediaDisplayed = await validationBukuTersedia.isDisplayed();

            assert.ok( isvalidationBukuTersediaExists && isvalidationBukuTersediaDisplayed, '⚠️ Element Buku tidak ditemukan');

            const backButton = await driver.$('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.widget.Button');
            await backButton.click();

            await driver.pause(5500);
            await driver.$('//android.view.View[@content-desc="Profil"]').click()
            await driver.pause(5500);
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('User dapat melihat detail buku', async () => {
        let driver = await remote({
            hostname: process.env.APPIUM_HOST || 'localhost',
            port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
            logLevel: 'error',
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

            const validationElementBuku = await driver.$('//android.view.View[@content-desc="Appleworks 6 : the m..."]');
            await validationElementBuku.click()

            const validationJudulBuku = await driver.$('//android.view.View[@content-desc="Appleworks 6 : the missing manual"]');
            const isvalidationJudulBukuExists = await validationJudulBuku.isExisting();
            const isvalidationJudulBukuDisplayed = await validationJudulBuku.isDisplayed();

            const backButton = await driver.$('//android.widget.Button');
            await backButton.click();

            assert.ok( isvalidationJudulBukuExists && isvalidationJudulBukuDisplayed, '⚠️ Element Buku tidak ditemukan atau tidak terlihat!');
            await driver.pause(5500);
            await driver.$('//android.view.View[@content-desc="Profil"]').click()
            await driver.pause(5500);
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()

        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('User dapat melihat confirmation dialog pinjam buku', async () => {
        let driver = await remote({
            hostname: process.env.APPIUM_HOST || 'localhost',
            port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
            logLevel: 'error',
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

            const ListBuku = await driver.$('//android.view.View[@content-desc="Appleworks 6 : the m..."]');
            await ListBuku.click();

            const validationJudulBuku = await driver.$('//android.view.View[@content-desc="Appleworks 6 : the missing manual"]');
            const isvalidationJudulBukuExists = await validationJudulBuku.isExisting();
            assert.ok( isvalidationJudulBukuExists, '⚠️ Element Buku tidak ditemukan atau tidak terlihat!');

            console.log('\n\n\n-------------------------------------------------------------------------')
            console.log('Scroll ke tombol pinjam buku')
            console.log('-------------------------------------------------------------------------\n\n\n')

            await driver.pause(10000);
            const pinjamBukuButton = await driver.$('//android.widget.Button[@content-desc="Pinjam Buku"]');
            await pinjamBukuButton.click();

            const confirmationDialog = await driver.$('//android.view.View[@content-desc="Apakah Anda yakin ingin meminjam buku ini?"]');
            const isconfirmationDialogExists = await confirmationDialog.isExisting();

            await driver.pause(100);
            const batalPinjamBukuButton = await driver.$('//android.widget.Button[@content-desc="Batal"]');
            await batalPinjamBukuButton.click();

            const backButton = await driver.$('//android.widget.Button');
            await backButton.click();

            assert.ok( isconfirmationDialogExists, '⚠️ Element Buku tidak ditemukan atau tidak terlihat!');
            await driver.pause(200);
            await driver.$('//android.view.View[@content-desc="Profil"]').click()
            await driver.pause(200);
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()

        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('User dapat meminjam buku jika buku tersedia', async () => {
        let driver = await remote({
            hostname: process.env.APPIUM_HOST || 'localhost',
            port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
            logLevel: 'error',
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

            const ListBuku = await driver.$('//android.view.View[@content-desc="Appleworks 6 : the m..."]');
            await ListBuku.click();

            const validationJudulBuku = await driver.$('//android.view.View[@content-desc="Appleworks 6 : the missing manual"]');
            const isvalidationJudulBukuExists = await validationJudulBuku.isExisting();
            assert.ok( isvalidationJudulBukuExists, '⚠️ Element Buku tidak ditemukan atau tidak terlihat!');

            console.log('\n\n\n-------------------------------------------------------------------------')
            console.log('Scroll ke tombol pinjam buku')
            console.log('-------------------------------------------------------------------------\n\n\n')

            await driver.pause(10000);
            const pinjamBukuButton = await driver.$('//android.widget.Button[@content-desc="Pinjam Buku"]');
            await pinjamBukuButton.click();

            const confirmationDialog = await driver.$('//android.view.View[@content-desc="Apakah Anda yakin ingin meminjam buku ini?"]');
            const isconfirmationDialogExists = await confirmationDialog.isExisting();

            console.log(isconfirmationDialogExists)

            assert.ok( isconfirmationDialogExists, '⚠️ Element Buku tidak ditemukan atau tidak terlihat!');

            await driver.pause(100);
            const setujuPinjamBukuButton = await driver.$('//android.widget.Button[@content-desc="Ya"]');
            await setujuPinjamBukuButton.click();

            const backButton = await driver.$('//android.widget.Button');
            await backButton.click();


            await driver.pause(4000);
            await driver.$('//android.view.View[@content-desc="Profil"]').click()
            await driver.pause(1000);
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()

        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('User tidak dapat meminjam buku jika buku tidak tersedia', async () => {
        let driver = await remote({
            hostname: process.env.APPIUM_HOST || 'localhost',
            port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
            logLevel: 'error',
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

            const ListBuku = await driver.$('//android.view.View[@content-desc="Creating web applica..."]');
            await ListBuku.click();

            // const validationJudulBuku = await driver.$('//android.view.View[@content-desc="Creating web applica..."]');
            // const isvalidationJudulBukuExists = await validationJudulBuku.isExisting();
            // assert.ok( isvalidationJudulBukuExists, '⚠️ Judul Buku tidak ditemukan atau tidak terlihat!');

            console.log('\n\n\n-------------------------------------------------------------------------')
            console.log('Scroll ke tombol pinjam buku')
            console.log('-------------------------------------------------------------------------\n\n\n')

            await driver.pause(10000);
            const pinjamBukuButton = await driver.$('//android.widget.Button[@content-desc="Pinjam Buku"]');
            await pinjamBukuButton.click();

            await driver.pause(100);
            const errorMessage = await driver.$('//android.view.View[@content-desc="Buku sudah tidak tersedia."]');
            await errorMessage.click();

            const backButton = await driver.$('//android.widget.Button');
            await backButton.click();

            await driver.pause(4000);
            await driver.$('//android.view.View[@content-desc="Profil"]').click()
            await driver.pause(1000);
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()

        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })






})
