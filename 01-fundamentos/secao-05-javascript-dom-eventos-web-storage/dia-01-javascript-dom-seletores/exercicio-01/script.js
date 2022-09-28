// parte 1
function MudaParagrafo(string) {
    let paragrafo = document.getElementsByTagName('p');
    paragrafo[1].innerText = string;
}

MudaParagrafo('em dois anos me vejo morando na praia')

// parte 2

function mudaBg(cor){
    let quadrado = document.getElementsByClassName('main-content');
   quadrado[0].style.backgroundColor = cor;
}

mudaBg('rgb(76,164,109)');