const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// parte 1
function authorBornIn1947(info) {
  return info.author.birthYear === 1947;
}

// parte 2
function smallerName() {
  let nameBook;
  books.forEach((info) => {
    if (!nameBook) {
      nameBook = info.name;
    }
    if (nameBook.length > info.name.length) {
      nameBook = info.name;
    }
  });

  return nameBook;
}

// parte 3
const getNamedBook = (info) => info.name.length === 26;

// parte 4
const booksOrderedByReleaseYearDesc = (a, b) => b.releaseYear - a.releaseYear;

books.sort(booksOrderedByReleaseYearDesc);

// parte 5
const everyoneWasBornOnSecXX = (info) =>
  info.author.birthYear > 1901 && info.author.birthYear < 2001;

//parte 6
const someBookWasReleaseOnThe80s = (info) =>
  info.releaseYear >= 1980 && info.releaseYear < 1990;

// parte 7

function authorUnique() {
  return books.every((book)=>{
    const livroAtual = book.author.birthYear;
    books.some((book2)=>{
      const livroTeste = book2.author.birthYear;
      livroAtual === livroTeste && book.author.name !== book2.author.name;
    })
  })
}

console.log(authorUnique());
