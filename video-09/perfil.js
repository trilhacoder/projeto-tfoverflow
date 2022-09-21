function criaTagDivPerfil(srcImg, altImg, apelido) {
    let tagDivPerfil = document.createElement("div")
    tagDivPerfil.classList.add("perfil")
    
    let tagImgPerfil = document.createElement("img")
    tagImgPerfil.src = srcImg
    tagImgPerfil.alt = altImg

    let tagSpanApelido = document.createElement("span")
    tagSpanApelido.textContent = apelido

    tagDivPerfil.appendChild(tagImgPerfil)
    tagDivPerfil.appendChild(tagSpanApelido)

    return tagDivPerfil
}