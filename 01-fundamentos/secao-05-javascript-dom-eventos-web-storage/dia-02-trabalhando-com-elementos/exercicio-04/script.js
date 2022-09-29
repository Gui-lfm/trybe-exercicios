const body = document.querySelector("body");

// parte 1
const titulo = document.createElement('h1');
titulo.innerText = 'Exercício - JavaScript DOM';

body.appendChild(titulo);

// parte 2
const main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);

// parte 3
const section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);

// parte 4
const paragraph = document.createElement('p')
paragraph.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate leo a dignissim egestas. Vestibulum pretium, quam vel laoreet consectetur, augue odio elementum magna, ut semper mi massa in mauris. Donec dictum erat lacus, non consectetur ante dictum a. Praesent id justo vel nisi ullamcorper vehicula. Donec suscipit libero nec elementum finibus. Quisque vitae pharetra lacus, non fermentum arcu. Praesent aliquam, quam ut mollis iaculis, sapien neque vestibulum nulla, ac viverra mi nisi vitae nunc. Proin consequat congue rutrum. Etiam viverra erat tellus, quis pharetra tortor sollicitudin a.'
section.appendChild(paragraph)

// parte 5
const section2 = document.createElement('section');
section2.className = 'left-content';
main.appendChild(section2)

// parte 6
const section3 = document.createElement('section');
section3.className = 'right-content';
main.appendChild(section3)

//parte 7
const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image'
section2.appendChild(img)

//parte 8
const lista = document.createElement('ul');
const numeros = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']

for (let index = 0; index < numeros.length; index += 1) {
    let li = document.createElement('li');
    li.innerText = numeros[index];
    lista.appendChild(li);
}

section3.appendChild(lista)

// parte 9 e 11
for (let i = 0; i < 3; i += 1) {
    let subtitle = document.createElement('h3');
    subtitle.className = 'description'
    main.appendChild(subtitle)
}

// parte 10
titulo.className = 'title'

// parte 12
main.removeChild(section2)

// parte 13
section3.style.marginRight = 'auto'

// parte 14
main.style.backgroundColor = 'green'

// parte 15
for (let i = 0; i < 2; i+=1) {
    lista.lastChild.remove(); 
}
