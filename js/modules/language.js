const language = () => {
    console.log('browserLanguage');
    // en, ru, pl
    const browserLanguage = navigator.language.slice(0,2);
    const path = window.location.pathname;
    console.log(browserLanguage);
    console.log(path);
}

export default language;