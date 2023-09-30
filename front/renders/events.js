import { renderBtnOld, renderBtnNew } from "./btns.js";
import { renderOld, renderNew, renderTableHeader } from "./renders.js";
import { hideNewBtn, hideOldBtn, hideTable } from "./cleaners.js";

export const eventOpenList = () => {
    const btn = document.getElementById('btn-list');

    btn.addEventListener('click', () => {
        renderOld();
        renderBtnOld();
        hideNewBtn();
        eventCloseList();
    })
}

export const eventCloseList = () => {
    const btn = document.getElementById('btn-hide-list');
    const table = document.getElementById('table').firstChild;

    btn.addEventListener('click', () => {
        hideOldBtn();
        hideTable();
        renderTableHeader();
        renderNew();
        renderBtnNew();
        eventOpenList();
    })
}