const lista = document.getElementById("lista");
const input = document.getElementById("input");

function addTarefa() {
    if (input.value.trim() !== "") {
        const tarefa = document.createElement("li");
        tarefa.innerHTML = `
            <span>${input.value}</span>
            <button class="checkBtn" onClick="checkTarefa(this)">✔</button>
            <button class="editarBtn" onClick="editarTarefa(this)">✎</button> 
            <button class="deleteBtn" onClick="deletarTarefa(this)">✘</button>
         `
         lista.appendChild(tarefa);
         input.value = "";
        
    }
}

function checkTarefa(button) {
    const tarefa = button.parentElement; //get li
    tarefa.classList.toggle("concluida"); //acrescenta a classe pra modificar estilo
    button.classList.toggle("active"); //permite refazer a tarefa
    lista.appendChild(tarefa); //leva a tarefa ao final da lista, mas ela fica lá...
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