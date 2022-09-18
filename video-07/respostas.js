let tagListaDePerguntas = document.querySelector("#listaDePerguntas")
tagListaDePerguntas.innerHTML = ""

let pergunta = {
    num_respostas: 0,
    num_visualizacoes: 0,
    criado_em: "01/01/2022",
    titulo: "t1",
    tags: "html, css",
    descricao: "d1",
    apelido: "a1"
}

criarHtmlDaPergunta(tagListaDePerguntas, pergunta)

let respostas = [
    {
        criado_em: "10/10/2022",
        descricao: "descricao da resposta",
        apelido: "marcos"
    },
    {
        criado_em: "03/03/2022",
        descricao: "descricao da resposta 2",
        apelido: "carlos"
    }
]

let tagListaDeRespostas = document.querySelector("#listaDeRespostas")
tagListaDeRespostas.innerHTML = ""

respostas.forEach(function(resposta) {
    criarHtmlDaResposta(tagListaDeRespostas, resposta)
})


function obtemTodasRespostas() {
    // fetch("https://62f69d13612c13062b5210ea.mockapi.io/api/perguntas")
    //     .then(function(response) {
    //         if (!response.ok) {
    //             throw "Requisição chegou no servidor, mas servidor retornou com erro: " + response.statusText
    //         }
    //         return response.json()
    //     })
    //     .then(function(perguntas) {
    //         console.log(perguntas)
    //         let tagListaDePerguntas = document.querySelector("#listaDePerguntas")
    //         tagListaDePerguntas.innerHTML = ""
    
    //         perguntas.forEach(function(pergunta) {
    //             criarHtmlDaPergunta(tagListaDePerguntas, pergunta)
    //         })
    //     })
    //     .catch(function(error) {
    //         console.log(error)
    //     })
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

    let tagDivPerfil = document.createElement("div")
    tagDivPerfil.classList.add("perfil")

    let tagImgPerfil = document.createElement("img")
    tagImgPerfil.src = "img/avatar.png"
    tagImgPerfil.alt = "Avatar do usuário"

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

    tagDivPerfil.appendChild(tagImgPerfil)
    tagDivPerfil.appendChild(tagSpanApelido)

    tagLi.appendChild(tagDivCardPergunta)

    tagListaDePerguntas.appendChild(tagLi)
}

function criarHtmlDaResposta(tagListaDeRespostas, pergunta) {
    let tagLi = document.createElement("li")
            
    let tagDivCardPergunta = document.createElement("div")
    tagDivCardPergunta.classList.add("cardResposta")
    
    let tagSpanCriadoEm = document.createElement("span")
    tagSpanCriadoEm.textContent = `${obterDataFormatada(new Date(pergunta.criado_em))}`
    
    let tagDivConteudo = document.createElement("div")
    tagDivConteudo.classList.add("conteudo")

    let tagPDescricao = document.createElement("p")
    tagPDescricao.classList.add("descricao")
    tagPDescricao.textContent = pergunta.descricao

    let tagDivPerfil = document.createElement("div")
    tagDivPerfil.classList.add("perfil")

    let tagImgPerfil = document.createElement("img")
    tagImgPerfil.src = "img/avatar.png"
    tagImgPerfil.alt = "Avatar do usuário"

    let tagSpanApelido = document.createElement("span")
    tagSpanApelido.textContent = pergunta.apelido

    tagDivCardPergunta.appendChild(tagDivConteudo)

    tagDivConteudo.appendChild(tagPDescricao)
    tagDivConteudo.appendChild(tagSpanCriadoEm)

    tagDivCardPergunta.appendChild(tagDivPerfil)

    tagDivPerfil.appendChild(tagImgPerfil)
    tagDivPerfil.appendChild(tagSpanApelido)

    tagLi.appendChild(tagDivCardPergunta)

    tagListaDeRespostas.appendChild(tagLi)
}

function criaHtmlTags(stringTags, tagUl) {    
    if (stringTags.indexOf("html") >= 0) {
        let tagLi = document.createElement("li")
        let tagSpan = document.createElement("span")
        tagSpan.textContent = "HTML"
        tagSpan.classList.add("html")
        tagLi.appendChild(tagSpan)
        tagUl.appendChild(tagLi)
    }
    if (stringTags.indexOf("javascript") >= 0) {
        let tagLi = document.createElement("li")
        let tagSpan = document.createElement("span")
        tagSpan.textContent = "JavaScript"
        tagSpan.classList.add("javascript")
        tagLi.appendChild(tagSpan)
        tagUl.appendChild(tagLi)
    }
    if (stringTags.indexOf("css") >= 0) {
        let tagLi = document.createElement("li")
        let tagSpan = document.createElement("span")
        tagSpan.textContent = "CSS"
        tagSpan.classList.add("css")
        tagLi.appendChild(tagSpan)
        tagUl.appendChild(tagLi)
    }
}

let tagFormularioResposta = document.querySelector("#formularioResposta")
tagFormularioResposta.addEventListener("submit", function(event) {
    event.preventDefault()

    let tagFormulario = event.target

    let tagDescricao = tagFormulario.descricao

    if (formularioEhValido(tagDescricao)) {

        // chamar API para gravar resposta
        // fetch("https://62f69d13612c13062b5210ea.mockapi.io/api/perguntas", {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         titulo: tagTitulo.value,
        //         descricao: tagDescricao.value,
        //         num_respostas: 0,
        //         num_visualizacoes: 0,
        //         criado_em: obterDataAtual(),
        //         apelido: tagApelido.value,
        //         tags: obtemTagsSelecionadas(tagHtml, tagCss, tagJavaScript)
        //     })
        // })
        // .then(function(response) {
        //     if (!response.ok) {
        //         throw "Requisição chegou no servidor, mas servidor retornou com erro: " + response.statusText
        //     }
        //     return response.json()
        // })
        // .then(function(pergunta) {
        //     console.log(pergunta)
        //     mensagem.style.display = "none"
        //     let tagFundoFormulario = document.querySelector("#fundoFormulario")
        //     tagFundoFormulario.classList.add("ocultarFormulario")
            
        //     obtemTodasPerguntas()

        // })
        // .catch(function(error) {
        //     console.log(error)
        //     let mensagem = document.querySelector("#mensagem")
        //     mensagem.textContent = "Ocorreu um erro: " + error
        //     mensagem.style.display = "block"
        // })


        // Caso API retorne sucesso
        let chamouApiComSucesso = true
        if (chamouApiComSucesso) {
            console.log(pergunta)
            mensagem.style.display = "none"
            let tagFundoFormulario = document.querySelector("#fundoFormulario")
            tagFundoFormulario.classList.add("ocultarFormulario")
            
            obtemTodasRespostas()
        } else {
            // Caso API retorne erro
            let error = "Ocorreu um erro na chamada da API"
            console.log(error)
            let mensagem = document.querySelector("#mensagem")
            mensagem.textContent = "Ocorreu um erro: " + error
            mensagem.style.display = "block"
        }
    } else {
        let mensagem = document.querySelector("#mensagem")
        mensagem.textContent = "Necessário preencher todos os campos obrigatórios"
        mensagem.style.display = "block"
    }
})

let tagBotaoResponder = document.querySelector("#botaoResponder")
botaoResponder.addEventListener("click", function() {
    let tagFundoFormulario = document.querySelector("#fundoFormulario")
    tagFundoFormulario.classList.remove("ocultarFormulario")
    tagFormularioResposta.reset()
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

function obterDataAtual() {
    let dataAtual = new Date()
    let dia = dataAtual.getDate()
    let mes = dataAtual.getMonth() + 1
    let ano = dataAtual.getFullYear()
    let hora = dataAtual.getHours()
    let minuto = dataAtual.getMinutes()
    let segundo = dataAtual.getSeconds()
    let dataAtualString = mes + "/" + dia + "/" + ano + " " + hora + ":" + minuto + ":" + segundo
    return dataAtualString
}

function obterDataFormatada(objetoDate) {
    let dia = objetoDate.getDate()
    let mes = objetoDate.getMonth() + 1
    let ano = objetoDate.getFullYear()
    let hora = objetoDate.getHours()
    let minuto = objetoDate.getMinutes()
    let segundo = objetoDate.getSeconds()
    let dateString = dia + "/" + mes + "/" + ano + " " + hora + ":" + minuto + ":" + segundo
    return dateString
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