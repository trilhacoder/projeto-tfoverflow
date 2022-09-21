let idPergunta = obtemIdPerguntaDaUrl()
obtemPergunta(idPergunta)
obtemTodasRespostas(idPergunta)

function obtemPergunta(idPergunta) {
    fetch(`https://62f69d13612c13062b5210ea.mockapi.io/api/perguntas/${idPergunta}`)
        .then(function(response) {
            if (!response.ok) {
                throw "Requisição chegou no servidor, mas servidor retornou com erro: " + response.statusText
            }
            return response.json()
        })
        .then(function(pergunta) {
            console.log(pergunta)
            let tagListaDePerguntas = document.querySelector("#listaDePerguntas")
            tagListaDePerguntas.innerHTML = ""
            criarHtmlDaPergunta(tagListaDePerguntas, pergunta)
        })
        .catch(function(error) {
            console.log(error)
        })
}

function obtemTodasRespostas(idPergunta) {
    fetch(`https://62f69d13612c13062b5210ea.mockapi.io/api/perguntas/${idPergunta}/respostas`)
        .then(function(response) {
            if (!response.ok) {
                throw "Requisição chegou no servidor, mas servidor retornou com erro: " + response.statusText
            }
            return response.json()
        })
        .then(function(respostas) {
            console.log(respostas)
            let tagListaDeRespostas = document.querySelector("#listaDeRespostas")
            tagListaDeRespostas.innerHTML = ""
    
            respostas.forEach(function(resposta) {
                criarHtmlDaResposta(tagListaDeRespostas, resposta)
            })
        })
        .catch(function(error) {
            console.log(error)
        })
}

function criarHtmlDaPergunta(tagListaDePerguntas, pergunta) {
    let tagLi = document.createElement("li")
            
    let tagDivCardPergunta = document.createElement("div")
    tagDivCardPergunta.classList.add("cardPergunta")
    
    let tagDivInfo = document.createElement("div")
    tagDivInfo.classList.add("info")

    let tagSpanRespostas = document.createElement("span")
    tagSpanRespostas.textContent = `${pergunta.num_respostas} Respostas`

    let tagSpanVisualizacoes = document.createElement("span")
    tagSpanVisualizacoes.textContent = `${pergunta.num_visualizacoes} Visualizações`
    tagSpanVisualizacoes.classList.add("numeroDeVisualizacoes")
    
    let tagSpanCriadoEm = document.createElement("span")
    tagSpanCriadoEm.textContent = `${obterDataFormatada(new Date(pergunta.criado_em))}`
    
    let tagDivConteudo = document.createElement("div")
    tagDivConteudo.classList.add("conteudo")
    let tagH4Titulo = document.createElement("h4")
    tagH4Titulo.classList.add("titulo")
    tagH4Titulo.textContent = pergunta.titulo

    let tagPDescricao = document.createElement("p")
    tagPDescricao.classList.add("descricao")
    tagPDescricao.textContent = pergunta.descricao

    let tagUlTags = document.createElement("ul")
    tagUlTags.classList.add("tags")
    criaHtmlTags(pergunta.tags, tagUlTags)

    let tagDivPerfil = criaTagDivPerfil("img/avatar.png", "Avatar do usuário", pergunta.apelido)

    let tagSpanApelido = document.createElement("span")
    tagSpanApelido.textContent = pergunta.apelido

    tagDivCardPergunta.appendChild(tagDivInfo)

    tagDivInfo.appendChild(tagSpanRespostas)
    tagDivInfo.appendChild(tagSpanVisualizacoes)
    tagDivInfo.appendChild(tagSpanCriadoEm)

    tagDivCardPergunta.appendChild(tagDivConteudo)

    tagDivConteudo.appendChild(tagH4Titulo)
    tagDivConteudo.appendChild(tagPDescricao)    
    tagDivConteudo.appendChild(tagUlTags)

    tagDivCardPergunta.appendChild(tagDivPerfil)

    tagLi.appendChild(tagDivCardPergunta)

    tagListaDePerguntas.appendChild(tagLi)
}

function criarHtmlDaResposta(tagListaDeRespostas, resposta) {
    let tagLi = document.createElement("li")
            
    let tagDivCardResposta = document.createElement("div")
    tagDivCardResposta.classList.add("cardResposta")
    
    let tagSpanCriadoEm = document.createElement("span")
    tagSpanCriadoEm.textContent = `${obterDataFormatada(new Date(resposta.criado_em))}`
    
    let tagDivConteudo = document.createElement("div")
    tagDivConteudo.classList.add("conteudo")

    let tagPDescricao = document.createElement("p")
    tagPDescricao.classList.add("descricao")
    tagPDescricao.textContent = resposta.descricao

    let tagDivPerfil = criaTagDivPerfil("img/avatar.png", "Avatar do usuário", resposta.apelido)

    let tagSpanApelido = document.createElement("span")
    tagSpanApelido.textContent = resposta.apelido

    tagDivCardResposta.appendChild(tagDivConteudo)

    tagDivConteudo.appendChild(tagPDescricao)
    tagDivConteudo.appendChild(tagSpanCriadoEm)

    tagDivCardResposta.appendChild(tagDivPerfil)

    tagLi.appendChild(tagDivCardResposta)

    tagListaDeRespostas.appendChild(tagLi)
}

function obtemIdPerguntaDaUrl() {
    const searchParams = new URLSearchParams(window.location.search);
    let idPergunta = searchParams.get("idPergunta")
    return idPergunta
}

let tagBotaoResponder = document.querySelector("#botaoResponder")
botaoResponder.addEventListener("click", function() {
    let tagFundoFormulario = document.querySelector("#fundoFormulario")
    tagFundoFormulario.classList.remove("ocultarFormulario")
    tagFormularioResposta.reset()
})
