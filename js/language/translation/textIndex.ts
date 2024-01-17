import { textPublicContact } from "./public";

export interface Trasnslate {
    [key: string]: {
        [key: string]: string
    }
};

export type TranslationObject = {
    [key: string]: Trasnslate
};

export const sorry: string = 'sorry, no translation';

/**
 * Перевод надписи стрелки.
 */
export const back = {
    pl: 'Powrót do strony Projektów',
    en: 'Back to Projects page',
    ru: 'Назад к странице Проекты',
    de: 'Zurück zur Seite Projekte'
}

/**
 * Перевод для главной страницы.
 */
export const textMain: Trasnslate = {
    'main title': {
        pl: 'Nasze polecane projekty.',
        en: 'Our Featured Projects.',
        ru: 'Наши основные проекты.',
        de: sorry
    },
    //:project-1 
    'title project-1': {
        pl: 'BUDYNEK BIUROWY ,,TECHMAR’’ W KIELCACH',
        en: '"TECHMAR" OFFICE BUILDING IN KIELCE',
        ru: 'Офисное здание "TECHMAR" в KIELCE',
        de: sorry
    },
    //:project-2 
    'title project-2': {
        pl: 'DOM Z WIÓRA',
        en: 'CHIP HOUSE',
        ru: sorry,
        de: sorry
    },
    //:project-3 
    'title project-3': {
        pl: 'DOM Z BETONU',
        en: 'CONCRETE HOUSE',
        ru: sorry,
        de: sorry
    },
    //:project-4 
    'title project-4': {
        pl: 'ZOREN-SLICZNA, BUDYNEK MIESZKALNY-WIELORODZINNY',
        en: 'ZOREN-SLICZNA, RESIDENTIAL-MULTI-FAMILY BUILDING',
        ru: sorry,
        de: sorry
    },
    //:project-5 
    'title project-5': {
        pl: 'BRZYCZYNA, OSIEDLE DOMÓW',
        en: 'BRZYCZYNA, ESTATE OF HOUSES',
        ru: sorry,
        de: sorry
    },
    //:project-6 
    'title project-6': {
        pl: 'KLINY - BUDYNEK MIESZKALNY-WIELORODZINNY',
        en: 'KLINY - RESIDENTIAL-MULTI-FAMILY BUILDING',
        ru: sorry,
        de: sorry
    },
    //:project-7 
    'title project-7': {
        pl: 'TARNÓW – RESTAURACJA NA WZGÓRZU ZGŁOBICE',
        en: 'TARNÓW – RESTAURANT ON THE ZGŁOBICE HILL',
        ru: sorry,
        de: sorry
    },
    //: contacts 
    ...textPublicContact
}


