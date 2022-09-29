// parte 1
const elementoPai = document.getElementById('pai');
const elementoIrmao = document.createElement('section');
elementoPai.appendChild(elementoIrmao);

// parte 2
const elemento = document.getElementById('elementoOndeVoceEsta');
const filho = document.createElement('section');
elemento.appendChild(filho);

//parte 3
const primeiroFilho = elemento.firstElementChild;
const netinho = document.createElement('div')
primeiroFilho.appendChild(netinho)

//parte 4
netinho.parentElement.parentElement.nextElementSibling
