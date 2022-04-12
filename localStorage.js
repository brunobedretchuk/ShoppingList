//saves list variable to local storage
export function saveToLocal(list) {
    localStorage.setItem('list', JSON.stringify(list));
}

//loads list variable from local storage
export function loadFromLocal(list) {
    if (localStorage.list) {
        return JSON.parse(localStorage.list);
    } else { return [];}
}