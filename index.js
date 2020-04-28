
const ulElement = document.querySelector('.lista');
const inputElement = document.querySelector('input[name=todo]');
// var buttonElement = document.createElement('button');
// var aText =  document.createTextNode('Excluir')

function addTodo() {
  var liElement = document.createElement('li');
  var inputValueElement = inputElement.value;
  var liTextElement = document.createTextNode(inputValueElement)

  liElement.appendChild(liTextElement);

  ulElement.appendChild(liElement);

}

function deleteTodo() {

  alert('Função excluir to-do aqui');

}