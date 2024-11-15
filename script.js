const lista = document.getElementById("lista");
const input = document.getElementById("input");

function addTarefa() {
    if (input !== "") {
        const tarefa = document.createElement("li");
        tarefa.innerHTML = `
            <span>${input.value}</span>
             <button class="editarBtn" onClick="editarTarefa(this)">Editar</button> 
             <button class="deleteBtn" onClick="deletarTarefa(this)">Deletar</button>
         `
         lista.appendChild(tarefa);
         input.value = "";
        
    }
}

function editarTarefa(button) {
    const tarefa = button.parentElement;
    const span = tarefa.querySelector("span");
    const novaTarefa = prompt("Editar tarefa: ", span.textContent); 
    if (novaTarefa !== "") { 
        span.textContent = novaTarefa.trim();
    }
}

function deletarTarefa(button) {
    const tarefa = button.parentElement;
    lista.removeChild(tarefa);
}