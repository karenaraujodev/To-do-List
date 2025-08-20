const btn = document.querySelector("#addbtn");
const list = document.querySelector("#list");
const input = document.querySelector("#texto");

btn.addEventListener('click', function(){
    const tarefa = input.value.trim(); 
    //variavel tarefa reccebe o valor do input
    //.trim é um método do js que remove espaços em branco do começo e do fim de um texto 
    if (tarefa !== ""){ 
        //teste lógivo, se a variavel for diferente de "" (vazio)...
        const li = document.createElement("li") ;
        //variavel li recebe um elemento (li) criado no dom
        li.textContent = tarefa ;//acessa e altera o texto dentro do elemento li

        li.addEventListener("click", function(){
            li.classList.toggle("completed"); //classList é propriedade q representa classes css de um elemento. .toggle adiciona a classe ("completed") se o elemento nn tivere remove se tiver
        });

        const removebtn = document.createElement("button"); //variavel removebtn recebe elemento (button) criado no dom 
        removebtn.textContent = 'X' ; //colocando o texto "X" dentro do elemento que está armazenado na variável removebtn.
        removebtn.classList.add("remove");//.classLister representa classes. .add adiciona uma ou mais classes CSS ao elemento 
        removebtn.addEventListener("click", function (e){
           e.stopPropagation();//Interrompe a propagação do evento para elementos "pais" no DOM. o button é filho de li, se nn tiver isso aqui, o evento deli tbm seria acionado ao clicar no botão
           li.remove();//.remove() é um método do DOM que remove o elemento da árvore do documento.
        })

        li.appendChild(removebtn);//o botão de remover (removebtn) será colocado dentro do <li>
        list.appendChild(li);
        
        input.value = "";// limpa o campo do input
        input.focus(); // coloca o cursor de volta no input
    }
})