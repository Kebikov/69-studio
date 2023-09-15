
{/* <picture>
    <source data-srcset="../img/projects/1.webp" type="image/webp">
    <img class="lazy-img" data-src="../img/projects/1.jpg" alt="my_alt">
</picture> */}

const lazyLoading = () => {
    try{
        const imgObserver = new IntersectionObserver((entryAll, observer) => {

            entryAll.forEach((item) => {
                if(item.isIntersecting){
                    let itemTarget = item.target;
                    let parent = itemTarget.parentElement;
                    let sourceAll = parent.querySelectorAll('source');
                    sourceAll.forEach((item) => {item.srcset = item.dataset.srcset});
                    itemTarget.src = itemTarget.dataset.src;
                    itemTarget.setAttribute('src', itemTarget.dataset.src);
                    observer.unobserve(itemTarget);
                }
            });
        },{
            //тут пишем при необходимости опции
            //root:,
            rootMargin: '250px',
            threshold: 0,
        });

        const imgElAll = document.querySelectorAll('.lazy-img');
        imgElAll.forEach((item) => imgObserver.observe(item));
    }catch(error){
        console.log('Error in function lazyLoading >>> ', error);
    }
}

export default lazyLoading;