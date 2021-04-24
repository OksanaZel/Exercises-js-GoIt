/*
 * Создём и добавляем коллекцию
 */
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');
// const elements = colorPickerOptions.map((option) => {
//     const btnEl = document.createElement('button');
// btnEl.type = 'button';
// btnEl.classList.add('color-picker__option')
// btnEl.textContent = option.label;
//     btnEl.style.backgroundColor = option.color;
//     return btnEl;
// })
// colorPickerContainerEl.append(...elements);

const makeColorPickerOptions = (options) => {
    return options.map((option) => {
    const btnEl = document.createElement('button');
btnEl.type = 'button';
btnEl.classList.add('color-picker__option')
btnEl.textContent = option.label;
    btnEl.style.backgroundColor = option.color;
    return btnEl;
})
}

const elemenst = makeColorPickerOptions(colorPickerOptions);

colorPickerContainerEl.append(...elemenst);

