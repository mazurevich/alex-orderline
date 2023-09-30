export const hideNewBtn = () => {
    const btnOld = document.getElementsByClassName('btn-outer')[0];
    btnOld.remove();
}

export const hideOldBtn = () => {
    const btnNew = document.getElementsByClassName('btn-outer')[0];
    btnNew.remove();
}

export const hideTable = () => {
    const table = document.getElementById('table');
    table.remove();
}
