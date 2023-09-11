//= numberScroll
export const numberScroll = () => {
    try {
        const text69 = document.querySelector('.main-picture__text');
        if(text69){
            const text69Size = parseInt( window.getComputedStyle(text69).getPropertyValue('font-size') );
            window.addEventListener('scroll', scroll69);

            function scroll69() {
                console.log(text69Size);
                console.log(window.scrollY);
                text69.style.fontSize = `${text69Size - window.scrollY / 2}px`;
                console.log(`${text69Size - window.scrollY}px`);
            }
        }

    } catch (error) {
        console.log('Error in function numberScroll >>> ', error);
    }
};