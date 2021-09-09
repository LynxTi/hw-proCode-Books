// const { socket } = require("socket.io");
const socket = io();

const form = document.querySelector('.filterBookForm');
const booksBlock = document.querySelector('.booksBlock');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const nameBook = formData.get('nameBook');
    const authorBook  = formData.get('authorBook');
    const genreBook  = formData.get('genreBook');
    console.log('1: ', nameBook);
    console.log('2: ', authorBook);
    console.log('3: ', genreBook);


        socket.emit('/findBooks', { nameBook: nameBook, authorBook: authorBook, genreBook: genreBook });

 
});

const renderArticleBlock = (booksArr) => {
    const articlesHtml = booksArr.reduce((htmlcode, book) => {
        htmlcode += `<div>${book.name}</div>`
        return htmlcode;
    }, '');

    articlesBlock.innerHTML = articlesHtml;

}

socket.on(`/returnBooks`, (data) => {
    renderArticleBlock(data)
});



