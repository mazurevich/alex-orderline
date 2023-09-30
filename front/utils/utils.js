import dataObject from '../dataObject.json';

export const renderString = (num) => {
    return (
        `<tr class="row row_${num + 2}">
            <td class="item item_1">${dataObject[num].id}</td>
            <td class="item item_2">${dataObject[num].description}</td>
            <td class="item item_3">${dataObject[num].series}</td>
            <td class="item item_4">${dataObject[num].count}</td>
            <td class="item item_5" id="${dataObject[num].serialization}"></td>
            <td class="item item_6" id="${dataObject[num].agregation}"></td>
            <td class="item item_7" id="${dataObject[num].sgtinReport}"></td>
            <td class="item item_8" id="${dataObject[num].agregationReport}"></td>
            <td class="item item_9" id="${dataObject[num].generalReport}"></td>
        </tr>`
    )
}

export const renderHead = () => {
    return (
        '<table border="1" class="table" id="table"><tr class="row row_1"><td class="item item_1">№</td><td class="item item_2">Наименование</td><td class="item item_3">Серия</td><td class="item item_4">Количество</td><td class="item item_5">Сериализация</td><td class="item item_6">Агрегация</td><td class="item item_7">Отчет SGtin 10319</td><td class="item item_8">Отчет группового агрегирования 915</td><td class="item item_9">Сводный отчет 361</td></tr></table>'
    )
}