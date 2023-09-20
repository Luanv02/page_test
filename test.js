const button = document.querySelector("nav div ul button li")
const modal = document.querySelector("#ss")
const buttonClose = document.querySelector("dialog button")
const buttonClose2 = document.querySelector("#fechar")

button.onclick = function() {
    modal.showModal()
}

buttonClose.onclick = function() {
    modal.close()
}

buttonClose2.onclick = function() {
    modal.close()
}

const imagem = document.querySelector("nav div button img")
const full = document.querySelector("#ava")

imagem.onclick = function() {
    full.showModal()
}

full.onclick = function() {
    full.close()
}



