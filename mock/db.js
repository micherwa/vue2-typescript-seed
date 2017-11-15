const user = require('./user');
const product = require('./product');

const userList = user.list;
const productList = product.list;

module.exports = {
    userList,
    productList
};
