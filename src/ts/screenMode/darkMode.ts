const darkMode = () => {
    const path: string = window.location.pathname;
    const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;

    if(path === '/' && isDarkTheme) {

        document.body.setAttribute('dark', '');

        const arrows = document.querySelectorAll('.ar_128_32') as NodeListOf<HTMLImageElement>;
        const arrowUpDiv = document.querySelector('.back-to-top__img') as HTMLDivElement;
        const arrowUpImg = arrowUpDiv.querySelector('img') as HTMLImageElement;

        arrowUpImg.src = "../img/icon/arrow-up-white.png";

        arrows.forEach(item => {
            item.src = "../img/icon/arrow-white.png";
        }); 

        console.log('',);
    }
}

export default darkMode;