let tagFormularioPergunta = document.querySelector("#formularioPergunta")
tagFormularioPergunta.addEventListener("submit", function(event) {
    event.preventDefault()

    let tagFormulario = event.target

    let tagTitulo = tagFormulario.titulo
    let tagDescricao = tagFormulario.descricao
    let tagApelido = tagFormulario.apelido
    let tagHtml = tagFormulario.tagHtml
    let tagCss = tagFormulario.tagCss
    let tagJavaScript = tagFormulario.tagJavaScript

    if (formularioEhValido(tagTitulo, tagDescricao, tagHtml, tagCss, tagJavaScript)) {

        // chamar API para gravar pergunta
        fetch("https://62f69d13612c13062b5210ea.mockapi.io/api/perguntas", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                titulo: tagTitulo.value,
                descricao: tagDescricao.value,
                num_respostas: 0,
                num_visualizacoes: 0,
                criado_em: obterDataAtual(),
                apelido: tagApelido.value,
                tags: obtemTagsSelecionadas(tagHtml, tagCss, tagJavaScript)
            })
        })
        .then(function(response) {
            if (!response.ok) {
                throw "Requisição chegou no servidor, mas servidor retornou com erro: " + response.statusText
            }
            return response.json()
        })
        .then(function(pergunta) {
            console.log(pergunta)
            mensagem.style.display = "none"
            let tagFundoFormulario = document.querySelector("#fundoFormulario")
            tagFundoFormulario.classList.add("ocultarFormulario")
            
            obtemTodasPerguntas()

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

function formularioEhValido(tagTitulo, tagDescricao, 
    tagHtml, tagCss, tagJavaScript) {
    
    let formularioEhValido = true
    if (tagTitulo.value == "") {
        formularioEhValido = false
        tagTitulo.classList.add("campoInvalido")
    } else {
        tagTitulo.classList.remove("campoInvalido")
    }
    if (tagDescricao.value == "") {
        tagDescricao.classList.add("campoInvalido")
        formularioEhValido = false
    } else {
        tagDescricao.classList.remove("campoInvalido")
    }
    let tagTags = document.querySelector("#tags")
    if (!tagHtml.checked && !tagCss.checked && !tagJavaScript.checked) {
        formularioEhValido = false        
        tagTags.classList.add("campoInvalido")
    } else {
        tagTags.classList.remove("campoInvalido")
    }

    return formularioEhValido
}

function obtemTagsSelecionadas(tagHtml, tagCss, tagJavaScript) {
    let tagsSelecionadas = ""
    if (tagHtml.checked == true) {
        tagsSelecionadas = tagsSelecionadas = tagsSelecionadas + "html,"
    }
    if (tagCss.checked == true) {
        tagsSelecionadas = tagsSelecionadas + "css,"
    }
    if (tagJavaScript.checked == true) {
        tagsSelecionadas = tagsSelecionadas + "javascript,"
    }
    return tagsSelecionadas
}