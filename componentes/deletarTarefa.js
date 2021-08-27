//criar função para o botão
const deletarTarefa = (atualiza, id) => {

    const index = id
    const tarefaCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    tarefaCadastradas.splice(index, 1)

    localStorage.setItem('tarefas', JSON.stringify(tarefaCadastradas))

    atualiza()

}

//criar botão
const BotaoDeleta = (atualiza, id) => {

    const botaoDeleta = document.createElement('button')

    botaoDeleta.classList.add('delete-button')
    botaoDeleta.innerText = 'deletar'

    botaoDeleta.addEventListener('click', () => deletarTarefa(atualiza, id))

    return botaoDeleta

}

export default BotaoDeleta