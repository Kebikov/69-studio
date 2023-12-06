

/**
 * Функция слежения за элементом
 * @param classBlock - отслеживаемый класс блока
 * @param classPlus - класс добавляемый к отслеживаемому блоку
 * @param arrClassAlso - массив классов к которым так же добавится класс classPlussAlso
 * @param classPlussAlso - класс который добавится к каждому классу в массиве
 */
const intersectionObserver = (classBlock: string, classPlus: string, arrClassAlso: Array<string>, classPlussAlso: string) => {

    try {
        const block = document.querySelector(`.${classBlock}`) as HTMLDivElement;

        const divObserver = new IntersectionObserver((entryAll) => {
            entryAll.forEach((item: IntersectionObserverEntry ) => {
                
                if(item.isIntersecting) {
                    item.target.classList.add(`${classPlus}`);
                    
                    addAndRemoveArrayClass(arrClassAlso, classPlussAlso, true);

                }else{
                    item.target.classList.remove(`${classPlus}`);
                    addAndRemoveArrayClass(arrClassAlso, classPlussAlso, false);
                }
            });
        },{
            rootMargin: '0px 0px 150px 0px'
        });

        divObserver.observe(block);

    } catch (error) {
        console.log('Error in function intersectionObserver >>> ', error);
    }
    
}

function addAndRemoveArrayClass(arrClassAlso: Array<string>, classPlussAlso: string, isAddClass: boolean) {
    try{
        if(Array.isArray(arrClassAlso) && arrClassAlso.length > 0 && classPlussAlso) {
            arrClassAlso.forEach(item => {
                const element = document.querySelector(`.${item}`) as HTMLDivElement;
                if(!element) return;
                if(isAddClass) {
                    element.classList.add(`${classPlussAlso}`);
                }else{
                    element.classList.remove(`${classPlussAlso}`);
                }
            });
        }
    }catch(error){
        console.log('Error in function addAndRemoveArrayClass >>> ', error);
    }
}

export default intersectionObserver;


    