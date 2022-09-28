// parte 1
function MudaParagrafo(string) {
    let paragrafo = document.getElementsByTagName('p');
    paragrafo[1].innerText = string;
}

MudaParagrafo('em dois anos me vejo morando na praia')

// parte 2 e 3

function mudaBg(element, cor){
    let quadrado = document.getElementsByClassName(element);
   quadrado[0].style.backgroundColor = cor;
}

mudaBg('main-content','rgb(76,164,109)');
mudaBg('center-content', 'white')

// parte 4

function mudaTitulo(string){
    let title = document.getElementsByClassName('title')[0]
    title.innerText = string
}

mudaTitulo('Exercício - JavaScript')