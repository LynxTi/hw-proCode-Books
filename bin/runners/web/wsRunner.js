const WebSocketServer =  require('ws');
const sio = require('socket.io'); 
const findBook = require('../../../controlers/findBook')
// const dbMongoRunner = require ('./mongoDB');

 /**
  * Get port from environment and store in Express.
  */
 const run = (httpServer) => {
    const io = sio(httpServer);

    io.on('connection', (socket)=> {
        // let inform = null;
        socket.on('/findBooks', async (data) => {
            const { nameBook, authorBook, genreBook} = data;
            const books = await findBook(nameBook, authorBook, genreBook);
            console.log('вернулось ', books);
            // socket.emit('/returAllArticle', allartcile );
        });

        socket.on('disconnect', () => {
            // asd
        });
    });
}
module.exports = run;