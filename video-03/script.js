let tagFormularioPergunta = document.querySelector("#formularioPergunta")
tagFormularioPergunta.addEventListener("submit", function(event) {
    event.preventDefault()

    let tagFormulario = event.target

    let tagTitulo = tagFormulario.titulo
    let tagDescricao = tagFormulario.descricao
    let tagHtml = tagFormulario.tagHtml
    let tagCss = tagFormulario.tagCss
    let tagJavaScript = tagFormulario.tagJavaScript

    if (formularioEhValido(tagTitulo, tagDescricao, tagHtml, tagCss, tagJavaScript)) {
        mensagem.style.display = "none"
        let tagFundoFormulario = document.querySelector("#fundoFormulario")
        tagFundoFormulario.classList.add("ocultarFormulario")

        // chamar API para gravar pergunta

    } else {
        let mensagem = document.querySelector("#mensagem")
        mensagem.textContent = "Necessário preencher todos os campos obrigatórios"
        mensagem.style.display = "block"
    }    
})

let tagBotaoPerguntar = document.querySelector("#botaoPerguntar")
tagBotaoPerguntar.addEventListener("click", function() {
    let tagFundoFormulario = document.querySelector("#fundoFormulario")
    tagFundoFormulario.classList.remove("ocultarFormulario")
    tagFormularioPergunta.reset()
})

function formularioEhValido(tagTitulo, tagDescricao, 
    tagHtml, tagCss, tagJavaScript) {
    
    let formularioEhValido = false
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
    if (tagHtml.checked == false && tagCss.checked == false && tagJavaScript.checked == false) {
        formularioEhValido = false        
        tagTags.classList.add("campoInvalido")
    } else {
        tagTags.classList.remove("campoInvalido")
    }
}