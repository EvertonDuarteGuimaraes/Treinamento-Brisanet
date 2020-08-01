const addButton = document.querySelector('.addButton');
var inputValue = document.querySelector('.input');
const container = document.querySelector('.container');

class item{
    constructor(itemName){
        this.createDiv(itemName);
    }

    createDiv(itemName){
        let input = document.createElement('input');
        input.inputValue = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = documente.createElement('button');
        editButton.innerHTML = "EDITAR";
        editButton.classList.add('editButton');

        let removetButton = documente.createElement('button');
        removetButton.innerHTML = "REMOVER";
        removetButton.classList.add('removetButton');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removetButton);

        editButton.addEventListneer('click', () => this.edit(input));

        removetButton.addEventListneer('click', () => this.remove(itemBox));
    }

    edit(input){
        input.disabled = !input.disabled
    }

    remove(item){
        container.removeChild(item);
    }
}

function check(){
    if(input.value != ""){
        new item(input.value);
        input.value = "";
    }
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        check;
    }
})