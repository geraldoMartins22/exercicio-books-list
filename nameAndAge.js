const { books } = require('./data/library');

const nameAndAge = () =>
  books
    .map((book) => ({
      age: book.releaseYear - book.author.birthYear,
      author: book.author.name,
    }))
    .sort((a, b) => a.age - b.age);

module.exports = { nameAndAge };
