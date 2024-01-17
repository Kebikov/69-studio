//= numberScroll
/**
 * Функция по анимации цыфры 69 на главной странице.
 */
export const numberScroll = () => {

    try {
        const text69 = document.querySelector('.main-picture__text') as HTMLDivElement;
        const studio = document.querySelector('#studio') as HTMLDivElement;
        const dot = document.querySelector('#dot') as HTMLDivElement;

        if(text69 && studio && dot){

            const text69Size: number = parseInt( window.getComputedStyle(text69).getPropertyValue('font-size') );
            const studioSize: number = parseInt( window.getComputedStyle(studio).getPropertyValue('font-size') );
            const dotSize: number = parseInt( window.getComputedStyle(dot).getPropertyValue('font-size') );

            const scroll69 = () => {
                text69.style.fontSize = `${text69Size - window.scrollY / 2}px`;
                studio.style.fontSize = `${studioSize - window.scrollY / 2}px`;
                dot.style.fontSize = `${dotSize - window.scrollY / 2}px`;
            }
    
            

            window.addEventListener('scroll', scroll69);
        }

    } catch (error) {
        console.log('Error in function numberScroll >>> ', error);
    }
};