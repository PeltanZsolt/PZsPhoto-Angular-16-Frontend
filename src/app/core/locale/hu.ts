import { LocaleModel } from '../models/locales.model';

export const locale: LocaleModel = {
    lang: 'hu',
    data: {
        Menu: {
            Welcome: 'Üdvözlünk',
            Login: 'Bejelentkezés',
            Logout: 'Kijelentekezés',
            SignUp: 'Regisztráció',
            Contact: 'Kapcsolat',
            Legal: 'Impresszum',
            Admin: 'Admin',
            Upload: 'Feltöltés',
            DBbackup: 'DB mentése',
            FilesBackup: "Fájlok mentése",
            Users: 'Felhasználók',
            Statistics: 'Statisztikák',
            en: 'Angol',
            hu: 'Magyar',
        },
        Login: {
            Login: 'BEJELENTKEZÉS',
            Username: 'Felhasználói név',
            UsernameOrEmail: 'Név vagy email-cím',
            RequiredField: 'Kötelezően kitöltendő',
            Password: 'Jelszó',
            InputPassword: 'Írja be a jelszót',
            Submit: 'Elküld',
        },
        Signup: {
            SignUp: 'REGISZTRÁCIÓ',
            Username: 'Felhasználói név',
            UsernameOrEmail: 'Név vagy email-cím',
            RequiredField: 'Kötelezően kitöltendő',
            Password: 'Jelszó',
            InputStrongPwd:
                'Írjon be erős jelszót, vagy használja az ajánlottat',
            ConfirmPassword: 'Jelszó megerősítése',
            TypePwdAgain: 'Írja be újra a jelszót',
            PwdStrenghtError:
                'A jelszónak tartalmaznia kell kis- és nagy betűt és számot. Legalább 3 karakter. Speciális karakterek nem megengedettek.',
            PwdDifferentError: 'A két jelszó meg kell egyezzen.',
            Submit: 'Elküld',
        },
        Logout: {
            SureToLogOut: 'Biztos hogy kijelentkezel?',
            Stay: 'Maradok',
            Logout: 'Kijelentkezek',
        },
        Upload: {
            Upload: 'FOTÓ FELTÖLTÉS',
            SelectPhoto: 'Válassz fotót',
            FileSelected: 'Kiválaszott fájl',
            NoFile: 'Nincs fájl kiválasztva',
            Title: 'Cím',
            TypeTitle: 'Fotó címe',
            RequiredField: 'Kötelező mező',
            SelectCategory: 'Válassz kategóriát',
            CreateCategory: 'Új kategória létrehozása...',
            Description: 'Leírás',
            Year: 'Év',
            YearOfCapture: 'Készítés éve',
            Place: 'Hely:',
            PlaceExplained: 'Ahol a kép készült',
            Submit: 'Küldés',
            ResetForm: 'Mezők törlése',
        },
        Home: {
            'still life': 'csendélet',
            portrait: 'portré',
            life: 'életkép',
            commercial: 'üzleti',
            nature: 'természetfotó',
            panorama: 'panoráma',
            city: 'város',
        },
        Gallery: {
            views: 'megtekintés',
        },
        Carousel: {
            views: 'megtekintés',
            Title: 'Cím',
            Place: 'Hely',
            Date: 'Dátum',
            Description: 'Leírás',
            Comments: 'Megjegyzések',
            PostComment: 'Megjegyzés hozzáfűzése',
            UploadComment: 'Megjegyzés feltöltése',
            Cancel: 'Mégse',
            TypeComment: 'Írd be a megjegyzést',
        },
        Input: {
            CreateNewCategory: 'Új kategória létrehozása',
            Inputcategory: 'Írja be az kategória nevét',
            CategoryName: 'Kategória neve',
            Cancel: 'Mégse',
            OK: 'OK',
        },
        Error: {
            GotIt: 'Rendben',
        },
        Footer: {
            backToTop: 'Ugrás a lap tetejéhez',
            copyrightText:
                '(c) Peltán Zsolt, 2023. Minden jog fenntartva. Képek: Peltán Zsolt.',
            Version: 'Verzószám',
            connectedClientsCount1: 'Jelenleg',
            connectedClientsCount2: 'felhasználó böngészi ezt az oldalt',
            visitorsCountText: 'Eddigi megtekintések száma:',
        },
    },
};
