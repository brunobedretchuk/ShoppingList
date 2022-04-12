// Variables that will constitute DOM elements
import {ul , addButton , delAllButton , delMarkedButton , input , price , uniqueID} from './variables.js'
import {saveToLocal , loadFromLocal} from './localStorage.js'

// Value that will be the sum of all item's prices / List that will hold objects for each item
var totalValue = 0;
var list = loadFromLocal();

// Updates screen everytime the list is modified
function showList() {
    eraseList();
    totalValue = 0;
    
    for (let i = 0; i < list.length; i++) {
        if (list.length != 0) {

            let li = document.createElement('li');
            let button = document.createElement('button');
            let check = document.createElement('input');
            check.type = 'checkbox';
            check.title = 'check this box when you buy your item, then add its price to your total'
            button.title = 'click to remove this item from your list '
            
            if (list[i].isBought) {
                li.classList.add('isBought');
                check.disabled = true;
                check.checked = true;
            } 

            li.innerHTML = list[i].name;
            button.innerHTML = '&#10008;';
            button.classList.add('x', 'itemButton');
            check.classList.add('form-check-input');

            li.append(check);
            li.append(button);
            button.addEventListener('click', function () { eraseItem(list[i].id) });
            check.addEventListener('click', function () { markItem(list[i]) })
            ul.append(li);
            totalValue += list[i].price;
        }
    }
   
    price.innerHTML = totalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
    saveToLocal(list);
}
//erases list before reloading it so the same elements wont be added multiple times
function eraseList() {
    var allLi = document.querySelectorAll('li');
    for (let j = 0; j < allLi.length; j++) {
        ul.removeChild(allLi[j]);
    }
}
//adds a new item to the list and updates it
function addToList() {
    let x = checkRepetido();
    if (x == true) {
        alert(`${input.value} is already on your list!`);
        input.value = "";
    }
    else if (input.value) {
        list.push({
            id: uniqueID(),
            name: input.value,
            price: 0,
            isBought: false
        });
        input.value = "";
        showList();
    }

}
//checks if new entry was already added to the list
function checkRepetido() {
    const x = list.filter(z => z.name == input.value);
    if (x.length == 0) {
        return false;
    } else { return true }
}
//erases selected item, relative to the button clicked
function eraseItem(id) {
    let novaLista = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i].id !== id) {
            novaLista.push(list[i]);
        }
    }
    list = novaLista;
    showList();
}
//deletes all items from the list
function eraseAllItems() {
    if (window.confirm('Are you sure? This will delete all items on your list!')) {
        list = [];
        totalValue = 0
        showList();
    }

}
//determines what happens when an item is checked
function markItem(item) {
    item.price = (prompt("Insert Item's price: "));

    if (item.price === null) { return showList(); }

    else if (item.price != null) {

        while (isNaN(parseFloat(item.price)) === true) {
            item.price = (prompt("Please insert a valid price!"));

            if (item.price === null) { return showList(); }
        }
        item.price = parseFloat(item.price);
        item.isBought = true;
        showList();
    }


}
//deletes all items marked as checked
function eraseAllMarked() {
    let novaLista = [];

    if (window.confirm('Are you sure? This will delete all marked items!')) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].isBought === false) {
                novaLista.push(list[i]);
            }
        }
        list = novaLista;
        showList();
    }



}

//executes addToList when "Add" button is pressed 
addButton.addEventListener('click', addToList);

//executes addToList when pressing the enter key, while input is focused
input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addToList();
    }
})

//executes eraseAllItems when "Delete All" button is pressed 
delAllButton.addEventListener('click', eraseAllItems);
//executes eraseAllMarked when "Delete Marked" button is pressed 
delMarkedButton.addEventListener('click', eraseAllMarked);

showList();