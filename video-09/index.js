obtemTodasPerguntas()

function obtemTodasPerguntas() {
    fetch("https://62f69d13612c13062b5210ea.mockapi.io/api/perguntas")
        .then(function(response) {
            if (!response.ok) {
                throw "Requisição chegou no servidor, mas servidor retornou com erro: " + response.statusText
            }
            return response.json()
        })
        .then(function(perguntas) {
            console.log(perguntas)
            let tagListaDePerguntas = document.querySelector("#listaDePerguntas")
            tagListaDePerguntas.innerHTML = ""
    
            perguntas.forEach(function(pergunta) {
                criarHtmlDaPergunta(tagListaDePerguntas, pergunta)
            })
        })
        .catch(function(error) {
            console.log(error)
        })
}

function criarHtmlDaPergunta(tagListaDePerguntas, pergunta) {
    let tagLi = document.createElement("li")
    
    let tagACardPergunta = document.createElement("a")
    tagACardPergunta.classList.add("linkPergunta")
    tagACardPergunta.href = `file:///C:/Users/f_r_a/projeto-tfoverflow/video-09/respostas.html?idPergunta=${pergunta.id}`

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

    let tagUlTags = document.createElement("ul")
    tagUlTags.classList.add("tags")
    criaHtmlTags(pergunta.tags, tagUlTags)

    let tagDivPerfil = criaTagDivPerfil("img/avatar.png", "Avatar do usuário", pergunta.apelido)

    tagDivCardPergunta.appendChild(tagDivInfo)

    tagDivInfo.appendChild(tagSpanRespostas)
    tagDivInfo.appendChild(tagSpanVisualizacoes)
    tagDivInfo.appendChild(tagSpanCriadoEm)

    tagDivCardPergunta.appendChild(tagDivConteudo)

    tagDivConteudo.appendChild(tagH4Titulo)
    tagDivConteudo.appendChild(tagUlTags)

    tagDivCardPergunta.appendChild(tagDivPerfil)

    tagACardPergunta.appendChild(tagDivCardPergunta)

    tagLi.appendChild(tagACardPergunta)

    tagListaDePerguntas.appendChild(tagLi)
}

let tagBotaoPerguntar = document.querySelector("#botaoPerguntar")
tagBotaoPerguntar.addEventListener("click", function() {
    let tagFundoFormulario = document.querySelector("#fundoFormulario")
    tagFundoFormulario.classList.remove("ocultarFormulario")
    tagFormularioPergunta.reset()
})