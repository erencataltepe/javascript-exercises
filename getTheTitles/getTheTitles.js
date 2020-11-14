const getTheTitles = function(books) {
  const bookTitle = [];

  books.forEach((book) => {
    bookTitle.push(book.title);
  })

  return bookTitle;
}

module.exports = getTheTitles;
