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

    it('User membuka halaman profile.', async () => {
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
            const navigasiMenuProfil = await driver.$('//android.view.View[@content-desc="Profil"]');
            await navigasiMenuProfil.click()

            const validationHalamanProfil = await driver.$('//android.view.View[@content-desc="Tesalonika Aprisda Sitopu"]');
            const isHalamanProfilExists = await validationHalamanProfil.isExisting();
            const isHalamanProfilDisplayed = await validationHalamanProfil.isDisplayed();
            assert.ok( isHalamanProfilExists && isHalamanProfilDisplayed, '⚠️ Halaman Profile tidak ditemukan atau tidak terlihat!');

            await driver.pause(5500);
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('User dapat melihat informasi akun pribadi pengguna.', async () => {
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
            const navigasiMenuProfil = await driver.$('//android.view.View[@content-desc="Profil"]');
            await navigasiMenuProfil.click()

            await driver.pause(5500);
            const navigasiMenuInformasiAkun = await driver.$('//android.view.View[@content-desc="Informasi Akun"]');
            await navigasiMenuInformasiAkun.click()

            const validationInformasiNamaTersedia = await driver.$('//android.view.View[@content-desc="Nama: Tesalonika Aprisda Sitopu"]');
            const isvalidationInformasiNamaTersediaExists = await validationInformasiNamaTersedia.isExisting();
            const isvalidationInformasiNamaTersediaDisplayed = await validationInformasiNamaTersedia.isDisplayed();

            const validationInformasiEmailTersedia = await driver.$('//android.view.View[@content-desc="Nama: Tesalonika Aprisda Sitopu"]');
            const isvalidationInformasiEmailTersediaExists = await validationInformasiEmailTersedia.isExisting();
            const isvalidationInformasiEmailTersediaDisplayed = await validationInformasiEmailTersedia.isDisplayed();
            await driver.pause(5000);

            await driver.back();

            assert.ok( isvalidationInformasiNamaTersediaExists && isvalidationInformasiNamaTersediaDisplayed, '⚠️ Pop Up Informasi Akun tidak ditemukan')
            assert.ok( isvalidationInformasiEmailTersediaExists && isvalidationInformasiEmailTersediaDisplayed, '⚠️ Pop Up Informasi Akun tidak ditemukan')

            await driver.pause(5500);
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('User dapat melihat kontak pustakawan.', async () => {
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
            const navigasiMenuProfil = await driver.$('//android.view.View[@content-desc="Profil"]');
            await navigasiMenuProfil.click()

            const navigasiMenuKontakPustakawan = await driver.$('//android.view.View[@content-desc="Kontak Pustakawan"]');
            await navigasiMenuKontakPustakawan.click()

            const validationInformasiNamaPustawakanTersedia = await driver.$('//android.view.View[@content-desc="Jesika Hutabarat"]');
            const isvalidationInformasiNamaPustakawanTersediaExists = await validationInformasiNamaPustawakanTersedia.isExisting();
            const isvalidationInformasiNamaPustakawanTersediaDisplayed = await validationInformasiNamaPustawakanTersedia.isDisplayed();

            const validationInformasiEmailPustakawanTersedia = await driver.$('//android.widget.Button[@content-desc="jesikahutabarat@gmail.com"]');
            const isvalidationInformasiEmailPustakawanTersediaExists = await validationInformasiEmailPustakawanTersedia.isExisting();
            const isvalidationInformasiEmailPustakawanTersediaDisplayed = await validationInformasiEmailPustakawanTersedia.isDisplayed();
            await driver.pause(2000);

            await driver.back();

            assert.ok( isvalidationInformasiNamaPustakawanTersediaExists && isvalidationInformasiNamaPustakawanTersediaDisplayed, '⚠️ Pop Up Informasi Akun tidak ditemukan')
            assert.ok( isvalidationInformasiEmailPustakawanTersediaExists && isvalidationInformasiEmailPustakawanTersediaDisplayed, '⚠️ Pop Up Informasi Akun tidak ditemukan')

            await driver.pause(5500);
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('User dapat melihat status peminjaman buku melalui halaman pinjam buku.', async () => {
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
            const navigasiMenuProfil = await driver.$('//android.view.View[@content-desc="Profil"]');
            await navigasiMenuProfil.click()

            const navigasiMenuPinjamBuku = await driver.$('//android.view.View[@content-desc="Pinjam Buku"]');
            await navigasiMenuPinjamBuku.click()

            const tabDiproses = await driver.$('//android.widget.Button[@content-desc="Diproses"]');
            await tabDiproses.click()

            const listBukuDiproses = await driver.$('//android.view.View[@content-desc="Develop an accounting package using Visual Ba\n' +
                'Tanggal Peminjaman: -\n' +
                'Batas Kembali: -"]');
            const islistBukuDiprosesExists = await listBukuDiproses.isExisting();
            const islistBukuDiprosesDisplayed = await listBukuDiproses.isDisplayed();

            await driver.pause(2000);

            const tabDiterima = await driver.$('//android.widget.Button[@content-desc="Diterima"]');
            await tabDiterima.click()

            const listBukuDiterima = await driver.$('//android.view.View[@content-desc="4 model tes TOEFL: Memuat 600 soal TOEFL leng\n' +
                'Tanggal Peminjaman: 24 Mei 2025 11:11\n' +
                'Batas Kembali: 31 Mei 2025 11:11"]');
            const islistBukuDiterimaExists = await listBukuDiterima.isExisting();
            const islistBukuDiterimaDisplayed = await listBukuDiterima.isDisplayed();

            await driver.pause(2000);

            const tabDitolak = await driver.$('//android.widget.Button[@content-desc="Ditolak"]');
            await tabDitolak.click()

            const listBukuDitolak = await driver.$('//android.view.View[@content-desc="Kalkulus dan geometri analitis Jilid 2\n' +
                'Tanggal Peminjaman: -\n' +
                'Batas Kembali: -"]');
            const islistBukuDitolakExists = await listBukuDitolak.isExisting();
            const islistBukuDitolakDisplayed = await listBukuDitolak.isDisplayed();

            assert.ok( islistBukuDiprosesExists && islistBukuDiprosesDisplayed, '⚠️ Informasi Daftar Buku Diproses tidak ditemukan')
            assert.ok( islistBukuDiterimaExists && islistBukuDiterimaDisplayed, ' Informasi Daftar Buku Diterima tidak ditemukan')
            assert.ok( islistBukuDitolakExists && islistBukuDitolakDisplayed, ' Informasi Daftar Buku Ditolak tidak ditemukan')

            const backButtonPinjamBuku = await driver.$('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button[1]');
            await backButtonPinjamBuku.click();

            await driver.pause(5500);
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('User dapat mencari buku pada tab Diproses.', async () => {
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
            const navigasiMenuProfil = await driver.$('//android.view.View[@content-desc="Profil"]');
            await navigasiMenuProfil.click()

            const navigasiMenuPinjamBuku = await driver.$('//android.view.View[@content-desc="Pinjam Buku"]');
            await navigasiMenuPinjamBuku.click()

            const elemenPencarianDiproses = await driver.$('//android.widget.EditText')
            await elemenPencarianDiproses.click();
            await elemenPencarianDiproses.setValue('develop')

            const bukudiproses = await driver.$('//android.view.View[@content-desc="Develop an accounting package using Visual Ba\n' +
                'Tanggal Peminjaman: -\n' +
                'Batas Kembali: -"]');
            const isbukudiprosesExists = await bukudiproses.isExisting();
            const isbukudiprosesDisplayed = await bukudiproses.isDisplayed();

            await driver.pause(2000);

            assert.ok( isbukudiprosesExists && isbukudiprosesDisplayed, '⚠️  Buku Diproses tidak ditemukan')

            const backButtonPinjamBuku = await driver.$('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button[1]');
            await backButtonPinjamBuku.click();

            await driver.pause(5500);
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('User dapat mencari buku pada tab Diterima.', async () => {
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
            const navigasiMenuProfil = await driver.$('//android.view.View[@content-desc="Profil"]');
            await navigasiMenuProfil.click()

            const navigasiMenuPinjamBuku = await driver.$('//android.view.View[@content-desc="Pinjam Buku"]');
            await navigasiMenuPinjamBuku.click()

            await driver.pause(2000);
            const tabDiterima = await driver.$('//android.widget.Button[@content-desc="Diterima"]');
            await tabDiterima.click()

            const elemenPencarianDiterima = await driver.$('//android.widget.EditText')
            await elemenPencarianDiterima.click();
            await elemenPencarianDiterima.setValue('appleworks')

            const bukuditerima = await driver.$('//android.view.View[@content-desc="Appleworks 6 : the missing manual\n' +
                'Tanggal Peminjaman: 17 Mei 2025 15:44\n' +
                'Batas Kembali: 24 Mei 2025 15:44"]');
            const isbukuditerimaExists = await bukuditerima.isExisting();
            const isbukuditerimaDisplayed = await bukuditerima.isDisplayed();

            await driver.pause(2000);

            assert.ok( isbukuditerimaExists && isbukuditerimaDisplayed, '⚠️  Buku Diterima tidak ditemukan')

            const backButtonPinjamBuku = await driver.$('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button[1]');
            await backButtonPinjamBuku.click();

            await driver.pause(5500);
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('User dapat mencari buku pada tab Ditolak.', async () => {
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
            const navigasiMenuProfil = await driver.$('//android.view.View[@content-desc="Profil"]');
            await navigasiMenuProfil.click()

            const navigasiMenuPinjamBuku = await driver.$('//android.view.View[@content-desc="Pinjam Buku"]');
            await navigasiMenuPinjamBuku.click()

            await driver.pause(2000);
            const tabDitolak = await driver.$('//android.widget.Button[@content-desc="Ditolak"]');
            await tabDitolak.click()

            const elemenPencarianDitolak = await driver.$('//android.widget.EditText')
            await elemenPencarianDitolak.click();
            await elemenPencarianDitolak.setValue('kalkulus')

            const bukuditolak = await driver.$('//android.view.View[@content-desc="Kalkulus dan geometri analitis Jilid 2\n' +
                'Tanggal Peminjaman: -\n' +
                'Batas Kembali: -"]');
            const isbukuditolakExists = await bukuditolak.isExisting();
            const isbukuditolakDisplayed = await bukuditolak.isDisplayed();

            await driver.pause(2000);

            assert.ok( isbukuditolakExists && isbukuditolakDisplayed, '⚠️  Buku Ditolak tidak ditemukan')

            const backButtonPinjamBuku = await driver.$('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button[1]');
            await backButtonPinjamBuku.click();

            await driver.pause(5000);
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('User dapat Melihat daftar riwayat peminjaman dan menggunakan fitur pencarian.', async () => {
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
            const navigasiMenuProfil = await driver.$('//android.view.View[@content-desc="Profil"]');
            await navigasiMenuProfil.click()

            const navigasiMenuRiwayatPinjamBuku = await driver.$('//android.view.View[@content-desc="Riwayat Peminjaman"]');
            await navigasiMenuRiwayatPinjamBuku.click()

            const searchRiwayatPinjamBuku = await driver.$('//android.widget.EditText')
            await searchRiwayatPinjamBuku.click()
            await searchRiwayatPinjamBuku.setValue('access')

            const riwayatBuku = await driver.$('//android.view.View[@content-desc="Access database design and Programming\n' +
                'Tgl. Pinjam: 04 May 2025\n' +
                'Tgl. Kembali: 04 May 2025"]');
            const isriwayatBukuExists = await riwayatBuku.isExisting();
            const isriwayatBukuDisplayed = await riwayatBuku.isDisplayed();

            await driver.pause(2000);

            assert.ok( isriwayatBukuExists && isriwayatBukuDisplayed, '⚠️  Riwayat buku tidak ditemukan')

            const backButtonRiwayat = await driver.$('//android.widget.Button');
            await backButtonRiwayat.click();

            await driver.pause(5500);
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('User dapat mengedit foto.', async () => {
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
            const navigasiMenuProfil = await driver.$('//android.view.View[@content-desc="Profil"]');
            await navigasiMenuProfil.click()

            const buttonEditProfil = await driver.$('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.widget.Button[1]');
            await buttonEditProfil.click()

            const buttonPilihDariGaleri = await driver.$('//android.widget.Button[@content-desc="Pilih dari Galeri"]');
            await buttonPilihDariGaleri.click()

            const buttonPilihFoto = await driver.$('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[6]/android.view.View[2]/android.view.View[2]/android.view.View');
            await buttonPilihFoto.click()

            const buttonSimpan = await driver.$('//android.widget.Button[@content-desc="Simpan"]');
            await buttonSimpan.click()

            await driver.pause(2000);
            const confirmationText = await driver.$('//android.view.View[@content-desc="Sukses"]');
            const isconfirmationTextExists = await confirmationText.isExisting();
            const isconfirmationTextDisplayed = await confirmationText.isDisplayed();
            assert.ok( isconfirmationTextExists && isconfirmationTextDisplayed, '⚠️  Riwayat buku tidak ditemukan')

            const buttonOK = await driver.$('//android.widget.Button[@content-desc="OK"]');
            await buttonOK.click()

            await driver.pause(5500);
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('User gagal mengedit nama dengan karakter khusus', async () => {
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
            const navigasiMenuProfil = await driver.$('//android.view.View[@content-desc="Profil"]');
            await navigasiMenuProfil.click()

            const buttonEditProfil = await driver.$('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.widget.Button[1]');
            await buttonEditProfil.click()

            await driver.pause(2000);
            const fieldNama = await driver.$('//android.widget.EditText');
            await fieldNama.click()
            await fieldNama.setValue('Tesa#$%')

            const buttonSimpan = await driver.$('//android.widget.Button[@content-desc="Simpan"]');
            await buttonSimpan.click()

            await driver.pause(2000);
            const erorrMessage = await driver.$('//android.view.View[@content-desc="Gagal"]');
            const iserorrMessageExists = await erorrMessage.isExisting();
            const iserorrMessageDisplayed = await erorrMessage.isDisplayed();
            assert.ok( iserorrMessageExists && iserorrMessageDisplayed, '⚠️  Error Message tidak ditemukan')

            const buttonOK = await driver.$('//android.widget.Button[@content-desc="OK"]');
            await buttonOK.click()

            await driver.back();
            await driver.back();

            await driver.pause(5500);
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })

    it('User berhasil mengedit nama dengan karakter yang sesuai', async () => {
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
            const navigasiMenuProfil = await driver.$('//android.view.View[@content-desc="Profil"]');
            await navigasiMenuProfil.click()

            const buttonEditProfil = await driver.$('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.widget.Button[1]');
            await buttonEditProfil.click()

            const fieldNama = await driver.$('//android.widget.EditText');
            await fieldNama.click()
            await fieldNama.setValue('Tesalonika Aprisda Sitopu')

            const buttonSimpan = await driver.$('//android.widget.Button[@content-desc="Simpan"]');
            await buttonSimpan.click()

            await driver.pause(2000);
            const pesanBerhasil = await driver.$('//android.view.View[@content-desc="Sukses"]');
            const ispesanBerhasilExists = await pesanBerhasil.isExisting();
            const ispesanBerhasilDisplayed = await pesanBerhasil.isDisplayed();
            assert.ok( ispesanBerhasilExists && ispesanBerhasilDisplayed, '⚠️  Pesan Berhasil tidak ditemukan')

            const buttonOK = await driver.$('//android.widget.Button[@content-desc="OK"]');
            await buttonOK.click()

            await driver.back();

            await driver.pause(5500);
            await driver.$('//android.widget.Button[@content-desc="Log Out"]').click()
        } finally {
            await driver.terminateApp('com.mycompany.libraryapplication');
            await driver.deleteSession();
        }
    })


})
