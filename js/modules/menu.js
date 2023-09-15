import intersectionObserver from "./intersectionObserver";

//= menu 
export const menu = () => {
    try {
        // отслеживание появления футера, для появления стрелки вверх
        intersectionObserver('footer', 'active', ['back-to-top__img-mobile'], 'active');
        
        const burger = document.querySelector('.burger');
        const  burgerSpan = document.querySelector('.burger__span');
        const  menuList = document.querySelector('.menu__list');
        burger.addEventListener('click', () => {
            burgerSpan.classList.toggle('active-burger');
            menuList.classList.toggle('active-menu');
            burger.classList.toggle('active-burger');
        });
    }catch(error) {
        console.log('Error in function menu >>> ', error);
    } 
};

//= menuFill 
export const menuFill = () => {
    try{
        changeHight();
        
        window.addEventListener('resize', changeHight);

        function changeHight() {
            const menu = document.querySelector('.menu');
            const menuFill = document.querySelector('.menu-fill');
    
            const menuHeight = menu.offsetHeight;
            menuFill.style.paddingTop = `${menuHeight - 1}px`;
        }
    }catch(error){
        console.log('Error in function menuFill >>> ', error);
    }
}


