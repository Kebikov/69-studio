
{/* <picture>
    <source data-srcset="../img/projects/1.webp" type="image/webp">
    <img class="lazy-img" data-src="../img/projects/1.jpg" alt="my_alt">
</picture> */}

const lazyLoading = () => {

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
        rootMargin: '0px 0px 0px 50px',
        //threshold: [0, 0.25, 0.5, 0.75, 1],
    });

    const imgElAll = document.querySelectorAll('.lazy-img');
    imgElAll.forEach((item) => imgObserver.observe(item));
}

export default lazyLoading;