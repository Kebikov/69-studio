//= numberScroll
export const numberScroll = () => {

    function scroll69(text69: HTMLDivElement, text69Size: number) {
        text69.style.fontSize = `${text69Size - window.scrollY / 2}px`;
    }

    try {
        const text69 = document.querySelector('.main-picture__text') as HTMLDivElement;
        if(text69){
            const text69Size: number = parseInt( window.getComputedStyle(text69).getPropertyValue('font-size') );
            window.addEventListener('scroll', () => scroll69(text69, text69Size));
        }

    } catch (error) {
        console.log('Error in function numberScroll >>> ', error);
    }
};