
const btn = document.querySelector("#addbtn");  // botão de adicionar tarefa
const list = document.querySelector("#list");   // lista <ul> onde as tarefas serão colocadas
const input = document.querySelector("#texto"); // campo de texto onde o usuário digita a tarefa


// ----- FUNÇÃO PRINCIPAL: ADICIONAR TAREFA -----
function adicionarTarefa() {

    const tarefa = input.value.trim(); 
    // .trim() remove espaços em branco do início e do fim da string. Isso evita que o usuário adicione tarefas vazias ou só com espaços.

    if (tarefa === "") return;  
    // Se a string estiver vazia (""), a função para aqui e nada é criado.


    // ----- CRIAR O <li> -----
    const li = document.createElement("li"); 
    // Cria um novo elemento <li> no DOM.
    
    li.textContent = tarefa;  
    // Insere o texto da tarefa dentro do <li>.


    // ----- MARCAR COMO COMPLETA QUANDO CLICAR NO <li> -----
    li.addEventListener("click", () => {
        li.classList.toggle("completed"); 
        // .toggle() adiciona a classe "completed" se ela não existir, e remove se já estiver no elemento.
    });


    // ----- CRIAR BOTÃO DE REMOVER -----
    const removebtn = document.createElement("button"); 
    // Cria um botão para remover a tarefa.

    removebtn.textContent = "X";    
    // Texto do botão.

    removebtn.classList.add("remove");  
    // Adiciona a classe CSS responsável pelo estilo do botão.

    removebtn.setAttribute("aria-label", "Remover tarefa");
    // Torna o botão mais acessível para leitores de tela.


    // ----- EVENTO PARA REMOVER A TAREFA -----
    removebtn.addEventListener("click", (e) => {
        e.stopPropagation(); 
        // Impede que o clique no botão também acione o clique do <li>. Sem isso, clicar no "X" marcaria a tarefa como completa antes de remover.

        li.remove(); 
        // Remove o <li> (a tarefa) completamente do DOM.
    });


    // ----- FINALIZAR INSERÇÃO -----
    li.appendChild(removebtn); 
    // Coloca o botão "X" dentro da <li>.

    list.appendChild(li); 
    // Coloca a <li> dentro da <ul> (lista).


    // ----- LIMPEZA -----
    input.value = "";  
    // Limpa o campo de texto.

    input.focus();      
    // Coloca o cursor de volta no input para digitar outra tarefa.
}



// ----- ADICIONAR TAREFA AO CLICAR NO BOTÃO -----
btn.addEventListener("click", adicionarTarefa);


// ----- ADICIONAR TAREFA AO PRESSIONAR ENTER -----
input.addEventListener("keypress", function(e){
    if (e.key === "Enter") {
        adicionarTarefa(); 
        // Chama a mesma função, mantendo o código organizado.
    }
});
