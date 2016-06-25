const Sequelize = require('sequelize');

module.exports.Sequelize = new Sequelize('postgres://woodman:1a2w3qZXC@localhost:5432/woodman');
module.exports.defaultOptions = {
    freezeTableName: true,
    timestamps: false
};