import { carregaTarefa } from "./carregaTarefa.js";
import BotaoConclui from "./concluirTarefa.js";
import BotaoDeleta from "./deletarTarefa.js";

export const handleNovoItem = (evento) => {

    //previnir de recarregar a página
    evento.preventDefault()

    //selecionar os elementos
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    const input = document.querySelector('[data-form-input]')
    const valor = input.value 

    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)
    const horario = data.format('HH:mm')

    const dataFormatada = data.format('DD/MM/YY')
    const concluida = false

    const dados = {valor, dataFormatada, horario, concluida}

    const tarefasAtualizadas = [...tarefas, dados]

    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))
    

    //corrigir valor do input
    input.value = ''

    //Carrega as tarefas
    carregaTarefa()
}

//função de criar tarefa
export const Tarefa = ({ valor, horario, concluida}, id) => {
    
    //criar o elemento
    const tarefa = document.createElement('li')
    
    const container = document.createElement('div')
    const conteudo = `<p class="content">${horario} - ${valor}</p>`
    
    if (concluida) {
        tarefa.classList.add('done')
    }

    tarefa.classList.add('task')
    
    tarefa.innerHTML = conteudo

    //adicionar funções e tarefa
    tarefa.appendChild(container)
    container.appendChild(BotaoConclui(carregaTarefa, id))
    container.appendChild(BotaoDeleta(carregaTarefa, id))
    
    return tarefa
}