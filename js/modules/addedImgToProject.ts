/**
 * @example
 * <div 
        class="projects-our-story" 
        data-click="project" 
        data-start="1" 
        data-end="18" 
        data-path="../img/portfolio/HIGH5 office building complex/"
    >
        <picture>
            <source srcset="../img/portfolio/HIGH5 office building complex/4.webp" type="image/webp">
            <img class="projects-our-story__title-img" src="../img/portfolio/HIGH5 office building complex/4.jpg" alt="my_alt">
        </picture>
        <div class="projects-our-story__title"><span>,,HIGH5" office building complex</span></div>
    </div>
 */
const addedImgToProject = () => {
    try {
        const projectsElements = document.querySelectorAll('[data-click="project"]') as NodeListOf<HTMLInputElement>;
        const addImg = (event: Event) => {
            const children = event.target as HTMLDivElement;
            const parent = children.closest('[data-click="project"]') as HTMLDivElement;

            if(!parent) return;

            const start: number = Number( parent.getAttribute('data-start') );
            const end: number = Number( parent.getAttribute('data-end') );
            const path: string | null = parent.getAttribute('data-path');

            if(!start && !end && !path) return;

            for(let i = end; i >= start; i--) {
                parent.insertAdjacentHTML(
                    'afterend',
                    `
                    <picture>
                        <source srcset="${path}${i}.webp" type="image/webp">
                        <img class="projects-our-story__img" src="${path}${i}.jpg" alt="my_alt">
                    </picture>
                    `
                );
            };

        }
        if(projectsElements) {
            projectsElements.forEach(project => {
                project.addEventListener('click', addImg);
            });
        }
    }catch (error) {
        console.log('Error in Function addedImgToProject >>> ', error);
    }
}

export default addedImgToProject;