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

//parte 1
const formatedBookNames = (book) =>
  `${book.name} - ${book.genre} - ${book.author.name}`;

const formatedList = books.map(formatedBookNames);

//parte 2
const nameAndAge = (book) => {
  const authorInfo = {};
  authorInfo.age = book.releaseYear - book.author.birthYear;
  authorInfo.name = book.author.name;
  return authorInfo;
};

const authorNameAge = books.map(nameAndAge).sort((a, b) => a.age - b.age);

// parte 3
const fantasyOrScienceFiction = (book) =>
  book.genre === 'Ficção Científica' || book.genre === 'Fantasia';

const filteredBooks = books.filter(fantasyOrScienceFiction);

//parte 4
const oldBooksOrdered = (book) => 2022 - book.releaseYear >= 60;

const oldBooks = books
  .filter(oldBooksOrdered)
  .sort((a, b) => a.releaseYear - b.releaseYear);

//parte 5
const fantasyOrScienceFictionAuthors = filteredBooks
  .map((book) => book.author.name)
  .sort();

//parte 6
const oldBooksNames = () => {
  const names = books.filter(oldBooksOrdered);
  return names.map((book) => book.name).sort();
};
console.log(oldBooksNames());