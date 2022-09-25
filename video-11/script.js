function criaHtmlTags(stringTags, tagUl) {    
    if (stringTags.includes("html")) {
        let tagLi = document.createElement("li")
        let tagSpan = document.createElement("span")
        tagSpan.textContent = "HTML"
        tagSpan.classList.add("html")
        tagLi.appendChild(tagSpan)
        tagUl.appendChild(tagLi)
    }
    if (stringTags.includes("javascript")) {
        let tagLi = document.createElement("li")
        let tagSpan = document.createElement("span")
        tagSpan.textContent = "JavaScript"
        tagSpan.classList.add("javascript")
        tagLi.appendChild(tagSpan)
        tagUl.appendChild(tagLi)
    }
    if (stringTags.includes("css")) {
        let tagLi = document.createElement("li")
        let tagSpan = document.createElement("span")
        tagSpan.textContent = "CSS"
        tagSpan.classList.add("css")
        tagLi.appendChild(tagSpan)
        tagUl.appendChild(tagLi)
    }
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