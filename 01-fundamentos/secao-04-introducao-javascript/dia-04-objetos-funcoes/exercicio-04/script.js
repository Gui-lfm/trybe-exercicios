//objetos e for/in

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//parte 1
console.log(`Bem vinda, ${info.personagem}`)

//parte 2
info['recorrente'] = 'sim'

//parte 3
for (const key in info) {
    console.log(key)
}

//parte 4
for (const key in info) {
    console.log(info[key])
}

//parte 5
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'sim'
}

for (const key in info) {
    if (info[key] === info2[key]) {
        console.log(`ambos recorrentes`)
    } else {
        console.log(`${info[key]} e ${info2[key]}`)
    }

}

// leitura de objetos

let leitor = {
    nome: "Julia",
    sobrenome: "Pessoa",
    idade: 21,
    livrosFavoritos: [
        {
            titulo: "O Pior Dia de Todos",
            autor: "Daniela Kopsch",
            editora: "Tordesilhas",
        },
    ],
};

//parte 1
console.log(`o livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0].titulo}' `)

//parte 2

leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
})

//parte 3

console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`);