function adicionarTarefa(){
    
    //Elementos html
    const inputElement= document.getElementById("nova_tarefa");
    const mensagemElement = document.getElementById("mensagem");
    const listaTarefas = document.getElementById('lista_tarefas');
    const contagemTarefas = document.getElementById('contador');

    // Váriaveis 
    let tarefa = inputElement.value;
    let mensagem, cor;



     if (tarefaValida(tarefa)) {
     let novaTarefa = document.createElement('li');
     novaTarefa.textContent = tarefa;
     listaTarefas.appendChild(novaTarefa);
     contagemTarefas.textContent = listaTarefas.children.length;
     document.getElementById('btnDeletar').style.display = 'block';

     mensagem = "Adicionado com sucesso";
     cor ='green';

     }else{ 

     mensagem = "Tarefa Invalida, redigite";
     cor ='red';
     
    }

     mensagemElement.textContent = mensagem;
     mensagemElement.style.color = cor;
  
    inputElement.value = '';
    inputElement.focus();

     function tarefaValida(tarefa) {
        return tarefa.trim().length >= 5;

     }
    
}
function excluirTarefa(){
    const listaTarefas = document.getElementById('lista_tarefas');
    const contagemTarefas = document.getElementById('contador');
    const mensagemElement = document.getElementById("mensagem");
    const btnDeletar = document.getElementById('btnDeletar');

    listaTarefas.innerHTML = '';
    contagemTarefas.textContent = 0;
    mensagemElement.textContent = 'Tarefas excluídas!';
    mensagemElement.style.color = 'red';
    btnDeletar.style.display = 'none';
}
    
