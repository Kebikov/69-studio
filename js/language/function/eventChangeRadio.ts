import setSelectActive from "./setSelectActive";
import setMenu from "./setMenu";
import setTextPage from "./setTextPage";


//= eventChangeRadio 
/**
 * Изминение состояния при изминении выбора языка.
 * @param radioButtons Элемены радио-кнопок, массив.
 * @param activeImg Активное изображеник.
 * @param activeText Активный текст.
 * @param body Тело.
 */
const eventChangeRadio = (radioButtons: NodeListOf<HTMLInputElement>, activeImg: HTMLImageElement, activeText: HTMLDivElement, body: HTMLDivElement) => {
    radioButtons.forEach(radio => {
        radio.addEventListener('change', (event) => {
            if (event.target instanceof HTMLInputElement) {
                if(event.target.checked) {
                    const value = event.target.value;
                    setSelectActive(activeImg, activeText, value);
                    localStorage.setItem('language', value);
                    if(value) {
                        setMenu(value);
                        setTextPage(value);
                    }
                }
            }
            body.classList.toggle('active');
        });
    });
}

export default eventChangeRadio;