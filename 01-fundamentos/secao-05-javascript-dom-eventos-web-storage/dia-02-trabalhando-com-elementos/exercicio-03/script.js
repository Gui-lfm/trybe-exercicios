const pai = document.getElementById('paiDoPai');

const segundoPai = pai.firstElementChild;

let listaFilhos = segundoPai.children;
console.log(listaFilhos)
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta')

for (let i = listaFilhos.length - 1; i >= 0; i -= 1) {
    let itemAtual = listaFilhos[i];
    console.log(itemAtual);
    if (itemAtual.id !== elementoOndeVoceEsta.id) {
        itemAtual.remove();
    }
}

const lastChild = elementoOndeVoceEsta.lastElementChild
elementoOndeVoceEsta.removeChild(lastChild);