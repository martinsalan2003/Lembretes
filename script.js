const btn = document.querySelector(".btn-add-task");
const txtUser = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-tasks");

let minhaListaDeItens = [];

function adcionarNovaTarefa() {
  minhaListaDeItens.push({
    tarefa: txtUser.value,
    concluida: false,
  });

  txtUser.value = "";
  mostrarTarefas();
}

function mostrarTarefas() {
  let novaLi = "";

  minhaListaDeItens.forEach((item, posicao) => {
    novaLi =
      novaLi +
      ` 
         <li class="task ${item.concluida && "done"}">
            <img src="./assets/verificar.png" alt="Marcado" / onclick="concluirTarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="./assets/excluir.png" alt="Excluir tarefas" / onclick="deletarItem(${posicao})">
        </li>`;

    listaCompleta.innerHTML = novaLi;

    localStorage.setItem("lista", JSON.stringify(minhaListaDeItens));
  });
}

function concluirTarefa(posicao) {
  minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida;

  mostrarTarefas();
}

function deletarItem(posicao) {
  minhaListaDeItens.splice(posicao, 1);
  console.log(posicao);

  mostrarTarefas();
}

function recarregarTarefas() {
  const tarefasDoLocalstorange = localStorage.getItem("lista");

  if (tarefasDoLocalstorange) {
    minhaListaDeItens = JSON.parse(tarefasDoLocalstorange);
  }

  mostrarTarefas();
}

recarregarTarefas();

btn.addEventListener("click", adcionarNovaTarefa);
