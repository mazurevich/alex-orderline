const fs = require('file-system')
const path = require('path')
const idGen = require('generate-unique-id')

const getOrdersFromDB = () => {
    const pathToOrder = path.join(__dirname, 'database', 'dataObject.json')

    return JSON.parse(fs.readFileSync(pathToOrder, 'utf8'));
}

const getOrders = () => {
    return getOrdersFromDB();
}

const getOrder = (req) => {
    const ordersList = getOrdersFromDB();
    const singleOrder = ordersList.find(order => order.id == req.params.id);

    return singleOrder;
}

const setOrdersToDB = (data) => {
    const pathToOrders = path.join(__dirname, 'database', 'dataObject.json')

    fs.writeFileSync(pathToOrders, JSON.stringify(data));
}

const setOrder = (req) => {
    const orderData = getOrdersFromDB();
    const newOrder = {};
    const { description, series, count } = req.body;

    newOrder.id = orderData[orderData.length - 1].id;
    newOrder.id++;
    newOrder.description = description;
    newOrder.series = series || 'Уточняется';
    newOrder.count = count || 'Уточняется';
    newOrder.age = 'new';
    newOrder.serialization = 'wait';
    newOrder.agregation = 'wait';
    newOrder.sgtinReport = 'wait';
    newOrder.agregationReport = 'wait';
    newOrder.generalReport = 'wait';

    orderData.push(newOrder);
    setOrdersToDB(orderData);
}

const editOrder = (req) => {
    const ordersData = getOrdersFromDB();
    const { description, series, count, age, serialization, agregation, sgtinReport, agregationReport, generalReport } = req.body;

    const orderId = ordersData.findIndex(order => order.id === req.params.id);
        // order = ordersData.find(order => order.id === req.params.id),
    const editedOrder = req.body;

    //TODO
    ordersData[orderId].description = editedOrder.description;
    ordersData[orderId].series = editedOrder.series;
    ordersData[orderId].count = editedOrder.count;
    ordersData[orderId].age = editedOrder.age;
    ordersData[orderId].serialization = editedOrder.serialization;
    ordersData[orderId].agregation = editedOrder.agregation;
    ordersData[orderId].sgtinReport = editedOrder.sgtinReport;
    ordersData[orderId].agregationReport = editedOrder.agregationReport;
    ordersData[orderId].generalReport = editedOrder.generalReport;

    setOrdersToDB(ordersData);
}

module.exports = [ getOrders, getOrder, setOrder, editOrder ]