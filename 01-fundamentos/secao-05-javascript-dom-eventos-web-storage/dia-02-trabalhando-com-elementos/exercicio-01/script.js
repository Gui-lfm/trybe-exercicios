// parte 1
const elemento = document.getElementById('elementoOndeVoceEsta')

// parte 2
const elementoPai = elemento.parentNode

elementoPai.style.backgroundColor = 'red';

// parte 3
const primeiroFilho = elemento.firstElementChild

primeiroFilho.innerHTML = 'teste teste teste'

// parte 4
const elementoFilho = elementoPai.firstElementChild

// parte 5
const irmaoAnterior = elemento.previousElementSibling

// parte 6
const textoSeguinte = elemento.nextSibling

// parte 7
const irmaoSeguinte = elemento.nextElementSibling

// parte 8
const terceiroFilho = elementoPai.lastElementChild.previousElementSibling
console.log(terceiroFilho);