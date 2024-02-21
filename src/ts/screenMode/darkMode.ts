import changeProjectImg from "./changeProjectImg";
import changeContactsImg from "./changeContactsImg";
import changeArrawBackImg from "./changeArrawBackImg";
import changeIconMode from "./changeIconMode";
export type TMode = 'dark' | 'light';

/**
 * Изминение темы сайта, светлая/темная.
 */
const darkMode = () => {
    /**
     * Адрес страницы.
     */
    const path: string = window.location.pathname;
    console.log(path);
    // const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
    // if(path === '/' && isDarkTheme) {}

    /**
     * Страницы на которых работает переключение режимов темы.
     */
    const links = ['/', '/about-us/', '/projects/', '/contacts/', '/project-1/', '/project-2/', '/project-3/', '/project-4/', '/project-5/', '/project-6/', '/project-7/', '/wnetrza/'];

    /**
     * div с иконкой переключения темы.
     */
    const moon = document.querySelector('.moon') as HTMLDivElement;
    if(!moon) return; 

    if( links.includes(path) ) {
        /**
         * Установленая тема на сайте в localStorage.
         */
        const isMode: TMode | null = localStorage.getItem('mode') as TMode;

        if(isMode === 'dark') onDark();
        if(isMode === 'light') onLight();

        moon.addEventListener('click', () => {
            const isMode: TMode | null = localStorage.getItem('mode') as TMode;
            
            if(isMode === null || isMode === 'dark') {
                localStorage.setItem('mode', 'light');
                onLight();
            } else {
                localStorage.setItem('mode', 'dark');
                onDark();
            }
        });
    } else {
        moon.style.display = 'none';
    }

}

/**
 * Включение темной темы на главной странице.
 */
function onDark() {
    document.body.setAttribute('dark', '');

    changeIconMode('dark');
    changeProjectImg('dark');
    changeArrawBackImg('dark');
}

/**
 * Включение светлой темы на главной странице.
 */
function onLight() {
    document.body.removeAttribute('dark');
    
    changeIconMode('light');
    changeProjectImg('light');
    changeArrawBackImg('light');
}


export default darkMode;