// str
import lazyLoading from "./lazyLoading";

type State = 'open' | 'close';

/**
 * Функция выподаюших фотографий при нажатии на титульную фотографию.
 * - Фотографии будут добавлены после элемента с class="projects-our-story"
 * @example
 * <div 
        class="projects-our-story" 
        data-click="project" 
        data-start="{...номер начального изображения}" 
        data-end="{...номер конечного изображения}" 
        data-path="{...путь к папке с изображениями}"
        data-state="{ open | close} ...состояние открыть изображения или закрыть"
    >
        <picture>
            <source srcset="{...путь к img.webp}" type="image/webp">
            <img class="projects-our-story__title-img" src="{...путь к img.jpg}" alt="my_alt">
        </picture>
        <div class="projects-our-story__title"><span>{...Имя проекта}</span></div>
    </div>
 */
const addedImgToProject = () => {
    try {
        /**
         * Массив элементов с атрибутом ( data-click="project" ).
         */
        const projectsElements = document.querySelectorAll('[data-click="project"]') as NodeListOf<HTMLInputElement>;
        /**
         * - Функция получает данные о начальном, конечном кадре и пути из дата атрибутов.
         * - Добавляет изображения после радительского элемента.
         * @param event Событие элемента на котором призошол клик.
         * @returns 
         */
        const addImg = (event: Event) => {
            /**
             * Дочерний элемент на котором произошел клик.
             */
            const children = event.target as HTMLDivElement;
            /**
             * Родительский элемент, в котором находится дочерний элемент, на котором произошло событие.
             */
            const parent = children.closest('[data-click="project"]') as HTMLDivElement;
            /**
             * Функция установки значения атрибута data-state.
             * @param state - Значение атрибута data-state.
             */
            const stateParent = (state: 'open' | 'close'): void => {
                parent.setAttribute('data-state', state);
            }

            if(!parent) return;
            /**
             * Стартовый номер изображения для добавления.
             * - В папке изображения должны быть пронумерованы цифрами от 1 и далее.
             */
            const start: number = Number( parent.getAttribute('data-start') );
            /**
             * Конечный номер изображения для добавления.
             * - В папке изображения пронумерованы цифрами от 1 и далее.
             */
            const end: number = Number( parent.getAttribute('data-end') );
            /**
             * Путь к папке с изображениями.
             */
            const path: string | null = parent.getAttribute('data-path');
            /**
             * Значение атрибута data-state, состояние родительского компанента, что необходимо сделать при нажатии.
             * - open - Показать изображения.
             * - close - Скрыть изображения.
             */
            const state: string | null = parent.getAttribute('data-state');

            // Если нет данных, то не добавляем изображения.
            if(!start && !end && !path && !state) return;

            if(state === 'open') {
                // open - Показать изображения.
                for(let i = end; i >= start; i--) {
                    parent.insertAdjacentHTML(
                        'afterend',
                        `
                        <picture data-id="${path}">
                            <source srcset="../../img/public/preloader.webp" data-srcset="${path}${i}.webp" type="image/webp">
                            <img class="lazy-img projects-our-story__img" src="../../img/public/preloader.webp" data-src="${path}${i}.jpg" alt="my_alt">
                        </picture>
                        `
                    );
                };
                stateParent('close');
                lazyLoading();
            } else {
                // close - Скрыть изображения.
                const pictures = document.querySelectorAll( `[data-id = "${path}"]` );
                pictures.forEach(pic => {
                    pic.remove();
                });
                parent.setAttribute('data-state', 'open');
                stateParent('open');
            }
        };
        
        // Проверка сушествования элементов projectsElements
        if(projectsElements) {
            // Установка слушателей событий.
            projectsElements.forEach(project => {
                project.addEventListener('click', addImg);
            });
        }

    }catch (error) {
        console.error('Error in Function addedImgToProject >>> ', error);
    }
}

export default addedImgToProject;

