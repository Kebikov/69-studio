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
    'slogan': {
        pl: 'Architekci do spraw pozornie nierealnych, koncepcje, projekty, management, realizacja',
        en: 'Architectc for seemingly unrealistic matters, concepts, projects, management implementation',
        ru: 'Архитекторы для задач, концепций, проектов, надзора за реализацией проектов, а так же для задач, которые кажутся нереальными',
        de: sorry
    },
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
    'title project-2': { //
        pl: 'DOM Z WIÓRA OSIKOWEGO',
        en: 'aspen shingle house',
        ru: 'ДОМ ИЗ ОСИНОВЫХ ЩЕПОК',
        de: sorry
    },
    //:project-3 
    'title project-3': {
        pl: 'DOM Z BETONU',
        en: 'CONCRETE HOUSE',
        ru: 'ДОМ ИЗ БЕТОНА',
        de: sorry
    },
    //:project-4 
    'title project-4': {
        pl: 'ZOREN-SLICZNA, BUDYNEK MIESZKALNY-WIELORODZINNY',
        en: 'ZOREN-SLICZNA, RESIDENTIAL-MULTI-FAMILY BUILDING',
        ru: 'ЖИЛОЕ-МНОГОКВАРТИРНОЕ ЗДАНИЕ "ZOREN-SLICZNA"',
        de: sorry
    },
    //:project-5 
    'title project-5': {
        pl: 'BRZYCZYNA, OSIEDLE DOMÓW',
        en: 'BRZYCZYNA, ESTATE OF HOUSES',
        ru: 'УСАДЬБА ДОМОВ, "BRZYCZYNA"',
        de: sorry
    },
    //:project-6 
    'title project-6': {
        pl: 'KLINY - BUDYNEK MIESZKALNY-WIELORODZINNY',
        en: 'KLINY - RESIDENTIAL-MULTI-FAMILY BUILDING',
        ru: '"KLINY" - МНОГОКВАРТИРНОЕ ЖИЛОЕ ЗДАНИЕ',
        de: sorry
    },
    //:project-7 
    'title project-7': {
        pl: 'TARNÓW – RESTAURACJA NA WZGÓRZU ZGŁOBICE',
        en: 'TARNÓW – RESTAURANT ON THE ZGŁOBICE HILL',
        ru: 'TARNÓW – РЕСТОРАН НА ЗВОБИНСКОМ ХОЛМЕ',
        de: sorry
    },
    //: contacts 
    ...textPublicContact
}



