const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function adicionaCLasse(event) {
    let techAtual = document.querySelector('.tech')
    techAtual.classList.remove('tech')
    event.target.classList.add('tech')
}

firstLi.addEventListener('click', adicionaCLasse);
secondLi.addEventListener('click', adicionaCLasse);
thirdLi.addEventListener('click', adicionaCLasse);

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function mudaTexto(event) {
    let texto = event.target.value;
    let tech = document.querySelector('.tech');
    tech.innerText = texto;
}

input.addEventListener('input', mudaTexto);

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?

function mudaPagina(){
    window.location.replace('https://gui-lfm.github.io/')
}

myWebpage.addEventListener('dblclick', mudaPagina)

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function colocaCor(event) {
    event.target.style.color = 'blue'
}

function removeCor(event) {
    event.target.style.color = 'white'
}

myWebpage.addEventListener('mouseenter', colocaCor)
myWebpage.addEventListener('mouseout', removeCor)
