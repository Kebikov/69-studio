/**
 * Функция для вставки изображений на страницу.
 * @example
 * <div 
 *      class="gallery__body" 
 *      data-path="../img/project-3/"
 *      data-end="10"
 * >
 *      {блоки изображений}
 * </div>
 */
const pushPictures = () => {
    try {
        /**
         * DivElement контейнер для импорта изображений.
         */
        const galleryBody = document.querySelector('.gallery__body') as HTMLDivElement;
        if(galleryBody) {
            /**
             * Путь к изображениям.
             */
            const path: string | null = galleryBody.getAttribute('data-path');
            /**
             * Номер последнего изображения, начинается всегда с 1 и заканчивается вставка изображений указанным номером.
             */
            const end: number | null = Number( galleryBody.getAttribute('data-end') );

            if(path && end) {
                for(let i = 1; i <= end; i++) {
                    galleryBody.insertAdjacentHTML(
                        'beforeend',
                        `
                        <div class="gallery__img">
                            <picture>
                                <source data-srcset="${path}${i}.webp" type="image/webp">
                                <img class="lazy-img" data-src="${path}${i}.jpg" alt="my_alt" height="500" width="500" >
                            </picture>
                            <div class="gallery__text"><span>I'am an image title</span></div>
                        </div>
                        `
                    );
                };
            };
        }

    }catch (error) {
        console.error('Error in Function  pushPictures >>> ', error);
    }
}

export default pushPictures;