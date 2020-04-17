var listElement = document.querySelector("#app ul");
var inputElement= document.querySelector("#app input");
var buttonElement= document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem('list_items')) || []; //array of strings built from local storage or an empty array

function renderTodos(){
listElement.innerHTML = '';

    for(todo of todos){
        var pos = todos.indexOf(todo);

        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        todoElement.appendChild(todoText);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);
        linkElement.setAttribute('href','#');
        linkElement.setAttribute('onclick','deleteTodo('+pos+')');

        
        listElement.appendChild(todoElement);
        listElement.appendChild(linkElement);

    }
}

renderTodos();

function addTodo(){

    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){

    todos.splice(pos,1); //remove 1 item at the position "pos" of the array

    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_items',JSON.stringify(todos));
}