
/**
 * Функция отложенной загрузки изображений.
 * - Найдет все изображения с классом "lazy-img".
 * - Установит слушатель появления во viewport.
 * - При появлении во viewport установит атрибуты с путем к изображению.
 * @example
 * <picture>
 *     <source data-srcset="../img/projects/1.webp" type="image/webp">
 *     <img class="lazy-img" data-src="../img/projects/1.jpg" alt="my_alt">
 * </picture>
 */
const lazyLoading = () => {

    try{
        const imgObserver = new IntersectionObserver((entryAll, observer) => {

            entryAll.forEach((item) => {
                if(item.isIntersecting){
                    let itemTarget = item.target as HTMLImageElement;
                    let parent = itemTarget.parentElement as HTMLDivElement;
                    let sourceAll = parent.querySelectorAll('source') as NodeListOf<HTMLSourceElement>;
                    sourceAll.forEach((item: HTMLSourceElement) => {item.dataset.srcset ? item.srcset = item.dataset.srcset : null});

                    if(itemTarget.dataset.src) {
                        itemTarget.src = itemTarget.dataset.src;
                        itemTarget.setAttribute('src', itemTarget.dataset.src);
                    }
                    
                    observer.unobserve(itemTarget);
                }
            });
        },{
            //тут пишем при необходимости опции
            //root:,
            rootMargin: '100px',
            threshold: 0,
        });

        const imgElAll = document.querySelectorAll('.lazy-img');
     
        if(imgElAll.length > 0) {
            imgElAll.forEach((item) => imgObserver.observe(item));
        }
        
    }catch(error){
        console.error('Error in function lazyLoading >>> ', error);
    }
}

export default lazyLoading;