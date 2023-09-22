const backToTop = () => {

    function top(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            });
    }
    
    try{
        const body = document.querySelector('.back-to-top__body') as HTMLDivElement;
        const arrowMobile = document.querySelector('.back-to-top__img-mobile') as HTMLDivElement;
        body.addEventListener('click', top);
        arrowMobile.addEventListener('click', top);
        
    }catch(error){
        console.log('Error in function backToTop >>> ', error);
    }
}

export default backToTop;