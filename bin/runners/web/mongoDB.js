const mongoose = require('mongoose');
const bookModel = require('../../../models/book');
const url = 'mongodb://localhost:27017/bookTable';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}


const run = () => {
    mongoose.connect(url, options);
    const db = mongoose.connection;

    db.on('eror', (err) => {
        console.log('Db erore: ', err);
    });

    db.once('open', () => {
        console.log('Conected DB');
    console.log(12313231232312132312231);

    });

    db.once('close', () => {
        console.log('DB close');
    });
    const authrModel = require('../../../models/author');

    authrModel.create({name: 'Д.Кори'})
    authrModel.create({name: 'Б.Сандерсон'})
    authrModel.create({name: 'В.Пехов'})
    authrModel.create({name: 'Р.Вегнер'})
    authrModel.create({name: 'А.Сапковский'})
}

module.exports = run;
