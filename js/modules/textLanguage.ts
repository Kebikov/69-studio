export interface Trasnslate {
    [key: string]: {
        [key: string]: string
    }
}

/**
 * Обьект с обьектами названий меню ( textMenu.home.ru: 'Главная' ).
 */
export const textMenu: Trasnslate = {
    home: {
        ru: 'Главная',
        en: 'Home',
        pl: 'Strona główna',
        de: 'Startseite'
    },
    'our story': {
        ru: 'наша история',
        en: 'our-story',
        pl: 'nasza historia',
        de: 'unsere Geschichte'
    },
    projects: {
        ru: 'проекты',
        en: 'projects',
        pl: 'projekty',
        de: 'Projekte'
    },
    contacts: {
        ru: 'контакты',
        en: 'contacts',
        pl: 'kontakty',
        de: 'Kontakte'
    }
}

/**
 * Обьект, содержащий обьекты с текстом для страницы: 
 * - Главная.
 */
export const textMain: Trasnslate = {
    'main title': {
        ru: 'Наши основные проекты.',
        en: 'Our Featured Projects.',
        pl: 'Nasze polecane projekty.',
        de: 'Unsere vorgestellten Projekte.'
    },

    'title project no.1': {
        ru: 'Проект №1',
        en: 'Project no.1',
        pl: 'Projekt nr.1',
        de: 'Projekt Nr.1'
    },
    'text project no.1': {
        ru: 'Я - абзац. Нажмите здесь, чтобы добавить свой собственный текст и отредактировать меня. Дайте своим пользователям узнать вас.',
        en: 'I am a paradeaph. Click here to add your own text and edit me. Let your users get to know you.',
        pl: 'Jestem paradą. Kliknij tutaj, aby dodać własny tekst i edytować mnie. Pozwól użytkownikom Cię poznać.',
        de: 'Ich bin ein Paradeaph. Klicken Sie hier, um Ihren eigenen Text hinzuzufügen und mich zu bearbeiten. Lassen Sie Ihre Benutzer Sie kennenlernen.'
    },

    'title project no.2': {
        ru: 'Проект №2',
        en: 'Project no.2',
        pl: 'Projekt nr.2',
        de: 'Projekt Nr.2'
    },
    'text project no.2': {
        ru: 'Я - абзац. Нажмите здесь, чтобы добавить свой собственный текст и отредактировать меня. Дайте своим пользователям узнать вас.',
        en: 'I am a paradeaph. Click here to add your own text and edit me. Let your users get to know you.',
        pl: 'Jestem paradą. Kliknij tutaj, aby dodać własny tekst i edytować mnie. Pozwól użytkownikom Cię poznać.',
        de: 'Ich bin ein Paradeaph. Klicken Sie hier, um Ihren eigenen Text hinzuzufügen und mich zu bearbeiten. Lassen Sie Ihre Benutzer Sie kennenlernen.'
    },

    'title project no.3': {
        ru: 'Проект №3',
        en: 'Project no.3',
        pl: 'Projekt nr.3',
        de: 'Projekt Nr.3'
    },
    'text project no.3': {
        ru: `Я абзац. Нажмите здесь, чтобы добавить свой собственный текст и изменить меня. Это легко. Просто нажмите кнопку "Изменить текст" или дважды щелкните меня, чтобы добавить свой собственный контент и внести изменения в шрифт. Не стесняйтесь перетащить меня в любое место на вашей странице. Я - отличное место, чтобы рассказать историю и дать пользователям немного больше о вас.<br/><br/>Это отличное место для написания длинного текста о Вашей компании и Ваших услугах. Вы можете использовать это пространство, чтобы перейти к более подробной информации о вашей компании. Расскажите о вашей команде и о том, какие услуги вы предоставляете. Расскажите своим посетителям историю о том, как вы придумали идею для своего бизнеса и что отличает вас от ваших конкурентов. Выделите свою компанию и покажите посетителям, кто вы.`,
        en: 'I am a paradeaph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a deeat place for you to tell a story and let your users know a little more about you.<br/><br/>This is a deeat space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.',
        pl: 'Jestem paradą. Kliknij tutaj, aby dodać własny tekst i edytować mnie. To jest łatwe. Wystarczy kliknąć “ Edytuj tekst ” lub dwukrotnie kliknąć mnie, aby dodać własną treść i wprowadzić zmiany w czcionce. Możesz przeciągnąć i upuścić mnie w dowolnym miejscu na swojej stronie. Jestem miejscem, w którym możesz opowiedzieć historię i poinformować użytkowników o tobie trochę więcej. < br / > < br/> Jest to miejsce na deeat do pisania długiego tekstu o Twojej firmie i twoich usługach. Możesz użyć tego miejsca, aby uzyskać bardziej szczegółowe informacje na temat swojej firmy. Porozmawiaj o swoim zespole i świadczonych usługach. Opowiedz odwiedzającym historię tego, jak wpadłeś na pomysł swojej firmy i co odróżnia cię od konkurencji. Wyróżnij swoją firmę i pokaż odwiedzającym, kim jesteś.',
        de: 'Ich bin ein Paradeaph. Klicken Sie hier, um Ihren eigenen Text hinzuzufügen und mich zu bearbeiten. Es ist einfach. Klicken Sie einfach auf "Text bearbeiten" oder doppelklicken Sie auf mich, um Ihre eigenen Inhalte hinzuzufügen und Änderungen an der Schriftart vorzunehmen. Fühlen Sie sich frei, mich per Drag & Drop überall auf Ihrer Seite. Ich bin ein Ort, an dem Sie eine Geschichte erzählen und Ihre Benutzer ein wenig mehr über Sie wissen lassen können. <br/><br/>Hier können Sie einen langen Text über Ihr Unternehmen und Ihre Dienstleistungen schreiben. Sie können diesen Bereich nutzen, um ein wenig mehr über Ihr Unternehmen zu erfahren. Sprechen Sie über Ihr Team und welche Dienstleistungen Sie erbringen. Erzählen Sie Ihren Besuchern, wie Sie auf die Idee für Ihr Unternehmen gekommen sind und was Sie von Ihren Mitbewerbern unterscheidet. Heben Sie Ihr Unternehmen hervor und zeigen Sie Ihren Besuchern, wer Sie sind.'
    },

    'title project no.4': {
        ru: 'Проект №4',
        en: 'Project no.4',
        pl: 'Projekt nr.4',
        de: 'Projekt Nr.4'
    },
    'text project no.4': {
        ru: 'Я - абзац. Нажмите здесь, чтобы добавить свой собственный текст и отредактировать меня. Дайте своим пользователям узнать вас.',
        en: 'I am a paradeaph. Click here to add your own text and edit me. Let your users get to know you.',
        pl: 'Jestem paradą. Kliknij tutaj, aby dodać własny tekst i edytować mnie. Pozwól użytkownikom Cię poznać.',
        de: 'Ich bin ein Paradeaph. Klicken Sie hier, um Ihren eigenen Text hinzuzufügen und mich zu bearbeiten. Lassen Sie Ihre Benutzer Sie kennenlernen.'
    },

    'title project no.5': {
        ru: 'Проект №5',
        en: 'Project no.5',
        pl: 'Projekt nr.5',
        de: 'Projekt Nr.5'
    },
    'text project no.5': {
        ru: 'Я - абзац. Нажмите здесь, чтобы добавить свой собственный текст и отредактировать меня. Дайте своим пользователям узнать вас.',
        en: 'I am a paradeaph. Click here to add your own text and edit me. Let your users get to know you.',
        pl: 'Jestem paradą. Kliknij tutaj, aby dodać własny tekst i edytować mnie. Pozwól użytkownikom Cię poznać.',
        de: 'Ich bin ein Paradeaph. Klicken Sie hier, um Ihren eigenen Text hinzuzufügen und mich zu bearbeiten. Lassen Sie Ihre Benutzer Sie kennenlernen.'
    },

    'title contacts': {
        ru: 'Оставайтесь На Связи.',
        en: 'Stay In Touch.',
        pl: 'Pozostać W Kontakcie.',
        de: 'In Kontakt Zu Bleiben.'
    },

    'adress street': {
        ru: 'Ул.Тери Франсина 500<br/>Сан-Франциско, CA 94158',
        en: '500 Terry Francine Street<br/>San Francisco, CA 94158',
        pl: '500 Terry Francine Street<br/>San Francisco, CA 94158',
        de: '500 Terry Francine Street<br/>San Francisco, CA 94158'
    },

    'phone': {
        ru: 'Тел:',
        en: 'Tel:',
        pl: 'Tel:',
        de: 'Tel:'
    },

    'fax': {
        ru: 'Факс:',
        en: 'Fax:',
        pl: 'Faks',
        de: 'Fax:'
    },

    'back to top': {
        ru: 'Вернуться наверх',
        en: 'Back to top',
        pl: 'Powrót do góry',
        de: 'Zurück nach oben'
    },
}
/**
 * Обьект, содержащий обьекты с текстом для страницы: 
 * - О нас.
 */
export const textOurStory: Trasnslate = {
    'project-block-title': {
        ru: 'о нас',
        en: 'About us',
        pl: '',
        de: ''
    },
    'project-block-text': {
        ru: 'Я абзац. Нажмите здесь, чтобы добавить свой собственный текст и изменить меня. Это легко. Просто нажмите кнопку "Изменить текст" или дважды щелкните меня, чтобы добавить свой собственный контент и внести изменения в шрифт. Не стесняйтесь перетащить меня в любое место на вашей странице. Я - отличное место, чтобы рассказать историю и дать пользователям немного больше о вас. <br/><br/>Это отличное место для написания длинного текста о Вашей компании и Ваших услугах. Вы можете использовать это пространство, чтобы перейти к более подробной информации о вашей компании. Расскажите о вашей команде и о том, какие услуги вы предоставляете. Расскажите своим посетителям историю о том, как вы придумали идею для своего бизнеса и что отличает вас от ваших конкурентов. Выделите свою компанию и покажите посетителям, кто вы.',
        en: 'I am a paradeaph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a deeat place for you to tell a story and let your users know a little more about you.<br/><br/>This is a deeat space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.',
        pl: '',
        de: ''
    },
    'title': {
        ru: 'Наша Команда.',
        en: 'Our Team.',
        pl: '',
        de: ''
    },
    'back to top': {
        ru: 'Вернуться наверх',
        en: 'Back to top',
        pl: '',
        de: ''
    },
    'phone': {
        ru: 'Тел.',
        en: 'Tel.',
        pl: '',
        de: ''
    },
    'partner': {
        ru: 'Партнер',
        en: 'Partner',
        pl: '',
        de: ''
    },
    'architect': {
        ru: 'Архитектор',
        en: 'Architect',
        pl: '',
        de: ''
    },
}

