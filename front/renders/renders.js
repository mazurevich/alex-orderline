import { renderString, renderHead } from "../utils/utils.js"
import dataObject from '../dataObject.json'

// console.log(dataObject);

const content = document.getElementsByClassName('content')[0];

export const renderTableHeader = () => {
    content.insertAdjacentHTML('beforeend', renderHead())
}

export const renderNew = () => {
    const table = document.getElementById('table').firstChild;

    for (let i = dataObject.length; i > 0; i--) {
        if (dataObject[i - 1].age === 'new')
            table.insertAdjacentHTML('beforeend', renderString(i - 1));
    }
}

export const renderOld = () => {
    const table = document.getElementById('table').firstChild;

    for (let i = dataObject.length; i > 0; i--) {
        if (dataObject[i - 1].age === 'old')
            table.insertAdjacentHTML('beforeend', renderString(i - 1));
    }
}