
const ulElement = document.querySelector('#lista');
const inputElement = document.querySelector('input[name=todo]');
const buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodo() {
  ulElement.innerHTML = "" ;

  for (todo of todos) {
    var liElement = document.createElement('li');
    var liTextElement = document.createTextNode(todo);
    var linkElement = document.createElement('a');
    var linkTextElement = document.createTextNode('Excluir');
    var position = todos.indexOf(todo);

    linkElement.setAttribute('onclick', `deleteTodo(${position})`);
    linkElement.setAttribute('href', '#');

    liElement.appendChild(liTextElement);
    liElement.appendChild(linkElement);
    linkElement.appendChild(linkTextElement);
    ulElement.appendChild(liElement);
  }
}

renderTodo();

function addTodo() {
  var inputValueElement = inputElement.value;
  todos.push(inputValueElement);
  inputElement.value = "";
  renderTodo();
  saveLocalStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(position) {
  todos.splice(position, 1);
  renderTodo();
  saveLocalStorage();
}

function saveLocalStorage() {
  localStorage.setItem('todos', JSON.stringify(todos));
}
