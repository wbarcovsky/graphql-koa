const db = require('./db');
const Sequelize = require('sequelize');
const User = require('./user');

const Order = db.Sequelize.define('order', {
    id: {type: Sequelize.INTEGER, primaryKey: true},
    user_id: {type: Sequelize.INTEGER},
    time: {type: Sequelize.TIME},
    date: {type: Sequelize.TIME},
    on_created: {type: Sequelize.INTEGER},
}, db.defaultOptions);

module.exports = Order;
