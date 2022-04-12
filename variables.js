const ul = document.querySelector('ul');
const addButton = document.querySelector('.addButton');
const delAllButton = document.querySelector('.delAllButton');
const delMarkedButton = document.querySelector('.delMarkedButton');
const input = document.querySelector('input');
const price = document.querySelector('.price');
const uniqueID = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}


export {ul , addButton , delAllButton , delMarkedButton , input , price , uniqueID};