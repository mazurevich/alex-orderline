const content = document.getElementsByClassName('content')[0];

export const renderBtnNew = () => {
    // Button
    content.insertAdjacentHTML('beforeend', '<div class="btn-outer"><button class="btn closed" id="btn-list">Предыдущие серии</button></div>')
}

export const renderBtnOld = () => {
    // Button
    content.insertAdjacentHTML('beforeend', '<div class="btn-outer"><button class="btn closed" id="btn-hide-list">Скрыть предыдущие</button></div>')
}