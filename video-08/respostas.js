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

    let tagDivPerfil = document.createElement("div")
    tagDivPerfil.classList.add("perfil")

    let tagImgPerfil = document.createElement("img")
    tagImgPerfil.src = "img/avatar.png"
    tagImgPerfil.alt = "Avatar do usuário"

    let tagSpanApelido = document.createElement("span")
    tagSpanApelido.textContent = resposta.apelido

    tagDivCardResposta.appendChild(tagDivConteudo)

    tagDivConteudo.appendChild(tagPDescricao)
    tagDivConteudo.appendChild(tagSpanCriadoEm)

    tagDivCardResposta.appendChild(tagDivPerfil)

    tagDivPerfil.appendChild(tagImgPerfil)
    tagDivPerfil.appendChild(tagSpanApelido)

    tagLi.appendChild(tagDivCardResposta)

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

function obtemIdPerguntaDaUrl() {
    const searchParams = new URLSearchParams(window.location.search);
    let idPergunta = searchParams.get("idPergunta")
    return idPergunta
}

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
                apelido: tagApelido.value,
                criado_em: obterDataAtual()
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


        // Caso API retorne sucesso
        // let chamouApiComSucesso = true
        // if (chamouApiComSucesso) {
        //     console.log(pergunta)
        //     mensagem.style.display = "none"
        //     let tagFundoFormulario = document.querySelector("#fundoFormulario")
        //     tagFundoFormulario.classList.add("ocultarFormulario")
            
        //     obtemTodasRespostas()
        // } else {
        //     // Caso API retorne erro
        //     let error = "Ocorreu um erro na chamada da API"
        //     console.log(error)
        //     let mensagem = document.querySelector("#mensagem")
        //     mensagem.textContent = "Ocorreu um erro: " + error
        //     mensagem.style.display = "block"
        // }
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