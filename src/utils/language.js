const appPage = {
    id: {
        appName: 'Aplikasi Catatan',
        header: {
            archives: 'Terarsip',
        },
        search: {
            title: 'Cari catatan',
            description: 'Masukkan judul catatan untuk melakukan pencarian catatan',
            placeholder: 'Cari berdasarkan judul catatan',
        },
        input: {
            label: {
                name: 'Nama',
                email: 'Email',
                password: 'Password',
                confirmPassword: 'Konfirmasi Password',
            },
            placeholder: {
                name: 'Masukkan Nama',
                email: 'Masukkan Email',
                password: 'Masukkan Password',
                confirmPassword: 'Masukkan Konfirmasi Password',
                title: 'Isi Judul Catatan',
                body: 'Tuliskan catatanmu disini ....',
            },
        },
        addNote: {
            title: 'Simpan Catatanmu',
            tagline: 'Formulir Catatan',
            remainingCharacters: 'Sisa Karakter:',
            button: 'Buat Catatan',
        },
        message: {
            toasts: {
                success: {
                    create: 'Catatan berhasil ditambahkan',
                    delete: 'Catatan telah dihapus.',
                    archive: 'Catatan berhasil diarsipkan.',
                    unarchive: 'Catatan dipulihkan dari arsip.',
                },
            },
        },
        login: 'Masuk',
        register: 'Daftar',
    },
    en: {
        appName: 'Notes App',
        header: {
            archives: 'Archived',
        },
        search: {
            title: 'Search notes',
            description: 'Enter the note title to search for notes',
            placeholder: 'Search by note title',
        },
        input: {
            label: {
                name: 'Name',
                email: 'Email',
                password: 'Password',
                confirmPassword: 'Confirm Password',
            },
            placeholder: {
                name: 'Enter Name',
                email: 'Enter Email',
                password: 'Enter Password',
                confirmPassword: 'Enter Confirm Password',
                title: 'Fill Note Title',
                body: 'Write your note here ....',
            },
        },
        addNote: {
            title: 'Save Your Note',
            tagline: 'Note Form',
            remainingCharacters: 'Remaining Characters:',
            button: 'Create Note',
        },
        message: {
            toasts: {
                success: {
                    create: 'Note successfully added',
                    delete: 'Note has been deleted.',
                    archive: 'Note successfully archived.',
                    unarchive: 'Note restored from archive.',
                },
            },
        },
        login: 'Login',
        register: 'Register',
    }
}

const homePage = {
    id: {
        tagline: 'Daftar Catatan',
        title: 'Catatan Aktif',
    },
    en: {
        tagline: 'Notes List',
        title: 'Active Notes',
    }
}

const archivedPage = {
    id: {
        tagline: 'Daftar Catatan',
        title: 'Catatan Arsip',
    },
    en: {
        tagline: 'Notes List',
        title: 'Archived Notes',
    }
}

const loginPage = {
    id: {
        header: 'Yuk, login untuk menggunakan aplikasi.',
        title: 'Masuk',
        footer: 'Belum punya akun?',
        footerLink: 'Daftar',
    },
    en: {
        header: 'Login to use app, please.',
        title: 'Login',
        footer: 'Don\'t have an account?',
        footerLink: 'Register',
    }
}

const registerPage = {
    id: {
        header: 'Isi form untuk mendaftar akun.',
        title: 'Daftar Akun',
        footer: 'Sudah punya akun?',
        footerLink: 'Masuk',
    },
    en: {
        header: 'Fill the form to register an account.',
        title: 'Register Account',
        footer: 'Already have an account?',
        footerLink: 'Login',
    }
}

const notFoundPage = {
    id: {
        description: 'Halaman yang anda tuju saat ini tidak tersedia. Hal ini mungkin karena halaman tidak ada atau telah dipindahkan.',
        button: 'Kembali ke Beranda',
    },
    en: {
        description: 'The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.',
        button: 'Back to Home',
    }
}

const content = {
    appPage,
    homePage,
    archivedPage,
    loginPage,
    registerPage,
    notFoundPage,
}

export default content
