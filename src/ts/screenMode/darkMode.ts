
/**
 * Изминение темы сайта, светлая/темная.
 */
const darkMode = () => {
    /**
     * Адрес страницы.
     */
    const path: string = window.location.pathname;
    // const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
    // if(path === '/' && isDarkTheme) {}

    
    if(path === '/') {
        /**
         * div с иконкой переключения темы.
         */
        const moon = document.querySelector('.moon') as HTMLDivElement;
        /**
         * Установленая тема на сайте.
         */
        const isMode: string | null = localStorage.getItem('mode');

        if(isMode === 'dark') onDark();
        if(isMode === 'light') onLight();

        moon?.addEventListener('click', () => {
            const isMode: string | null = localStorage.getItem('mode');
            
            if(isMode === null || isMode === 'dark') {
                localStorage.setItem('mode', 'light');
                onLight();
            } else {
                localStorage.setItem('mode', 'dark');
                onDark();
            }
        });
    } else {
        const moon = document.querySelector('.moon') as HTMLDivElement;
        moon.style.display = 'none';
    }

}

/**
 * Включение темной темы на главной странице.
 */
function onDark() {
    document.body.setAttribute('dark', '');

    const arrows = document.querySelectorAll('.ar_128_32') as NodeListOf<HTMLImageElement>;
    const arrowUpDiv = document.querySelector('.back-to-top__img') as HTMLDivElement;
    const arrowUpImg = arrowUpDiv.querySelector('img') as HTMLImageElement;
    const moonImg = document.querySelector('#moon') as HTMLImageElement;

    moonImg.src = "/img/icon/sun.png";
    arrowUpImg.src = "../img/icon/arrow-up-white.png";

    arrows.forEach(item => {
        item.src = "../img/icon/arrow-white.png";
    }); 
}

/**
 * Включение светлой темы на главной странице.
 */
function onLight() {
    document.body.removeAttribute('dark');

    const arrows = document.querySelectorAll('.ar_128_32') as NodeListOf<HTMLImageElement>;
    const arrowUpDiv = document.querySelector('.back-to-top__img') as HTMLDivElement;
    const arrowUpImg = arrowUpDiv.querySelector('img') as HTMLImageElement;
    const moonImg = document.querySelector('#moon') as HTMLImageElement;

    moonImg.src = "/img/icon/moon.png";
    arrowUpImg.src = "../img/icon/arrow-up.png";

    arrows.forEach(item => {
        item.src = "../img/icon/arrow.png";
    }); 
}

export default darkMode;