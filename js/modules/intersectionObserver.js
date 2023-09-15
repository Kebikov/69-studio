// classBlock - отслеживаемый класс блока 
// classPlus - класс добавляемый к отслеживаемому блоку
// arrClassAlso - массив классов к которым так же добавится класс classPlussAlso
// classPlussAlso - класс который добавится к каждому классу в массиве

const intersectionObserver = (classBlock, classPlus, arrClassAlso, classPlussAlso) => {
    try {
        const block = document.querySelector(`.${classBlock}`);
        const divObserver = new IntersectionObserver((entryAll, observer) => {
            entryAll.forEach(item => {
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

function addAndRemoveArrayClass(arrClassAlso, classPlussAlso, isAddClass) {
    try{
        if(Array.isArray(arrClassAlso) && arrClassAlso.length > 0 && classPlussAlso) {
            arrClassAlso.forEach(item => {
                const element = document.querySelector(`.${item}`);
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


    