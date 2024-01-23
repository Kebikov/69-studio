/**
 * Изминения текста и изображения у активного блока выбора языка.
 * @param activeImg - Элемент изображения с флагом.
 * @param activeText - Элемент с текстом, отражаюшем выбраный язык.
 * @param value - Значение выбраного языка (ru, pl, de...).
 */
const setSelectActive = (activeImg: HTMLImageElement, activeText: HTMLDivElement, value: string) => {
    activeImg.src = `/img/flag/${value}.jpg`;

    switch (value) {
        case 'ru':
            activeText.textContent = 'Russia';
            break;
        case 'en':
            activeText.textContent = 'English';
            break;
        case 'pl':
            activeText.textContent = 'Polski';
            break;
        case 'de':
            activeText.textContent = 'Deutsch';
            break;
        default:
            activeText.textContent = '';
            break;
    }
}

export default setSelectActive;