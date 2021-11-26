var listElement = document.querySelector('#app ul');

var input = document.querySelector('#app input');

var button = document.querySelector('#app #add');

var todos = JSON.parse(localStorage.getItem('lista_todos')) || [];



function renderTodos(){

    listElement.innerHTML = ''

    for(todo of todos){
        
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var posicao = todos.indexOf(todo);

        linkElement.setAttribute('onclick', 'deletarTodo('+ posicao + ')');

        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);

        

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
        
    }
}

renderTodos();

function adicionarTodo(){
    if(input.value == ''){
        alert('Digite alguma tarefa');
        return False;
    }else{
        var todoText = input.value;
        todos.push(todoText);
        input.value = '';
        renderTodos();
        salvarDados();
    }
}


function deletarTodo(posicao){
    todos.splice(posicao, 1);
    renderTodos();
    salvarDados();
}

function salvarDados(){
    localStorage.setItem('lista_todos', JSON.stringify(todos));
}