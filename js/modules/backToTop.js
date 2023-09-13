const backToTop = () => {
    try{
        const body = document.querySelector('.back-to-top__body');
        const arrowMobile = document.querySelector('.back-to-top__img-mobile');
        body.addEventListener('click', top);
        arrowMobile.addEventListener('click', top);
        function top() {
            window.scrollTo({
                top: 0,
                top: 0,
                behavior: 'smooth'
                });
                
        }
    }catch(error){
        console.log('Error in function backToTop >>> ', error);
    }
}

export default backToTop;