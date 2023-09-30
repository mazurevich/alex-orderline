const express = require('express');
const app = express();
const PORT = process.env.PORT || 8800;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false} ));
app.use(morgan('common')); // Логгирование
app.use((req, res, next) => { // Для кроссдоменных запросов.
	res.header('Access-Control-Allow-Origin', '*'); // Заголовок ответа
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); // Список разрешаемых методов
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

routes(app);

app.listen(PORT, (err) => {
    if (err) {
        console.error(`You have an error: ${err}`)
    } else {
        console.log(`The server has been started on port ${PORT}`);
    }
})