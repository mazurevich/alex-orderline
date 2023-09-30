const [ getOrders, getOrder, setOrder, editOrder ] = require('./utils.js')

const router = (app) => {
    app.get('/', (req, res) => {
        res.send({ Orders_DB: 'MDLP & FORTIVA MED', developer: 'Aliaksei Skakun', email: 'skaliaksei@gmail.com' })
    });

    app.get('/orders', (req, res) => {
        res.send(getOrders())
    });

    app.get('/order/:id', (req, res) => {
        res.send(getOrder(req))
    });

    app.post('/orders', (req, res) => {
        const newOrder = setOrder(req);
        res.send(newOrder);
    });

    app.put('/order/:id', (req, res) => {
        const updatedOrder = editOrder(req)
	    res.sendStatus(204);
    });

    app.delete('/task/:id', (req, res) => {
        const tasksArray = getTasksFromDB();
        const findItem = req.params.id;
        const indexOfRemovingElement = tasksArray.findIndex(item => item.id == findItem);

        console.log(indexOfRemovingElement)

        if (indexOfRemovingElement > 0) {
            tasksArray.splice(indexOfRemovingElement, 1);
            setTasksToDB(tasksArray);

            res.sendStatus(204);
        } else
            res.sendStatus(404);
    })
}

function getUsers() {
    const pathToUsers = path.join(__dirname, 'database', 'users.json')

    return JSON.parse(fs.readFileSync(pathToUsers, 'utf8'));
}

function getBooks() {
    const pathToBooks = path.join(__dirname, 'database', 'books.json')

    return JSON.parse(fs.readFileSync(pathToBooks, 'utf8'));
}

function getTasksFromDB() {
    const pathToTasks = path.join(__dirname, 'database', 'mytasks.json')

    return JSON.parse(fs.readFileSync(pathToTasks, 'utf8'));
}

function setTasksToDB(data) {
    const pathToTasks = path.join(__dirname, 'database', 'mytasks.json')

    fs.writeFileSync(pathToTasks, JSON.stringify(data));
}

// Export the router
module.exports = router