let tagFormularioResposta = document.querySelector("#formularioResposta")
tagFormularioResposta.addEventListener("submit", function(event) {
    event.preventDefault()

    let tagFormulario = event.target

    let tagDescricao = tagFormulario.descricao
    let tagApelido = tagFormulario.apelido

    if (formularioEhValido(tagDescricao)) {

        let idPergunta = obtemIdPerguntaDaUrl()

        // chamar API para gravar resposta
        fetch(`https://62f69d13612c13062b5210ea.mockapi.io/api/perguntas/${idPergunta}/respostas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                descricao: tagDescricao.value,
                criado_em: obterDataAtual(),
                apelido: tagApelido.value
            })
        })
        .then(function(response) {
            if (!response.ok) {
                throw "Requisição chegou no servidor, mas servidor retornou com erro: " + response.statusText
            }
            return response.json()
        })
        .then(function(resposta) {
            console.log(resposta)
            mensagem.style.display = "none"
            let tagFundoFormulario = document.querySelector("#fundoFormulario")
            tagFundoFormulario.classList.add("ocultarFormulario")
            
            obtemTodasRespostas(idPergunta)
        })
        .catch(function(error) {
            console.log(error)
            let mensagem = document.querySelector("#mensagem")
            mensagem.textContent = "Ocorreu um erro: " + error
            mensagem.style.display = "block"
        })
    } else {
        let mensagem = document.querySelector("#mensagem")
        mensagem.textContent = "Necessário preencher todos os campos obrigatórios"
        mensagem.style.display = "block"
    }
})

function formularioEhValido(tagDescricao) {
    
    let formularioEhValido = true
    
    if (tagDescricao.value == "") {
        tagDescricao.classList.add("campoInvalido")
        formularioEhValido = false
    } else {
        tagDescricao.classList.remove("campoInvalido")
    }

    return formularioEhValido
}