const db = require('./db');
const Sequelize = require('sequelize');
const Order = require('./order');
const _ = require('lodash');

const User = db.Sequelize.define('user', {
    id: {type: Sequelize.INTEGER, primaryKey: true},
    name: {type: Sequelize.STRING(128)},
    phone: {type: Sequelize.STRING(128)},
    on_created: {type: Sequelize.INTEGER},
}, db.defaultOptions);

User.hasMany(Order, {
    foreignKey: {name: 'user_id'},
    "as": "orders",
});

module.exports = User;
