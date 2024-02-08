const darkMode = () => {
    const path: string = window.location.pathname;
    // const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
    // if(path === '/' && isDarkTheme) {}

    
    if(path === '/') {
        const moon = document.querySelector('.moon');

        const isMode = localStorage.getItem('mode');
        console.log('',isMode);
        if(isMode === 'dark') onDark();
        if(isMode === 'light') onLight();

        moon?.addEventListener('click', () => {
            const isMode = localStorage.getItem('mode');
            
            if(isMode === null || isMode === 'dark') {
                localStorage.setItem('mode', 'light');
                onLight();
            } else {
                localStorage.setItem('mode', 'dark');
                onDark();
            }
        });
    }

}


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

function onLight() {
    console.log('work light');
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