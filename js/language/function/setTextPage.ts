import { textMain, Trasnslate, TranslationObject} from "../translation/textIndex";
import { textOurStory } from "../translation/textOurStory";
import { textProjects } from "../translation/projects";
import { textProject1 } from "../translation/project-1";
import { textProject2 } from "../translation/project-2";
import { textProject3 } from "../translation/project-3";
import { textProject4 } from "../translation/project-4";
import { textProject5 } from "../translation/project-5";
import { textProject6 } from "../translation/project-6";
import { textProject7 } from "../translation/project-7";
import { contacts } from "../translation/contacts";


//= setTextPage 
/**
 * Изминение текста на странице
 * @param language Выбранный язык для перевода.
 */
const setTextPage = (language: string) => {
    const path: string | undefined = window.location.pathname;
    if(!path) return;

    const changeTranslation = (path: string) => {
        const translation: TranslationObject = {
            '/': textMain,
            '/our-story/': textOurStory,
            '/projects/': textProjects,
            '/project-1/': textProject1,
            '/project-2/': textProject2,
            '/project-3/': textProject3,
            '/project-4/': textProject4,
            '/project-5/': textProject5,
            '/project-6/': textProject6,
            '/project-7/': textProject7,
            '/contacts/': contacts
        }
        return translation[path];
    }

    let textForPage: Trasnslate = changeTranslation(path);

    const elementsText = document.querySelectorAll('[data-translation]') as NodeListOf<HTMLDivElement>;

    if(elementsText.length > 0) {
        elementsText.forEach(element => {
            if(element?.dataset?.translation) {
                const data: string = element.dataset.translation;

                if(textForPage?.[data]?.[language]) {
                    element.innerHTML = textForPage[data][language];
                }
            }
        })
    }
}

export default setTextPage;