//! Selectors
let mainInput = document.querySelector('.input');
let addButton = document.querySelector('.boton-agregar');
let container = document.querySelector('.container');


//! Class
class Item {
    constructor(newTask) {
        this.crearDiv(newTask)
    }

    crearDiv(newTask){

        //?   Creat input
        let inputItem = document.createElement('input');
        inputItem.type = 'text';
        inputItem.disabled = true;
        inputItem.classList.add('item-input'); //* Agrega clase css
        inputItem.value = newTask; 

    
        //?   Creat div
        let divItem = document.createElement('div');
        divItem.classList.add('item');
    
        //?  Edit Button
        let botonEditar = document.createElement('button');
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
        botonEditar.classList.add('boton-editar');
    
        //?  Remove Button
        let botonRemover = document.createElement('button');
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
        botonRemover.classList.add('boton-remover');
    
        //?  Add Items
        container.appendChild(divItem)
        divItem.appendChild(inputItem);
        divItem.appendChild(botonEditar);
        divItem.appendChild(botonRemover)

        //?   Edit Task
        botonEditar.addEventListener('click', function(){
            if(inputItem.disabled){
                inputItem.disabled = false
                botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>"
            } else {
                inputItem.disabled = true
                
                botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
            }
        })

        //? Delet Task
        botonRemover.addEventListener('click', function() {
            inputItem.remove()
            botonEditar.remove()
            botonRemover.remove()
        })
    }
}


function chequearInput() {
    if(mainInput.value !== ''){
        new Item(mainInput.value)
        mainInput.value = ''
    }
    
}

addButton.addEventListener('click', function(){
    chequearInput()
})
