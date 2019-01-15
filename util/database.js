
const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs_tests', 'root', null, {
    dialect: 'mysql',
    host: '127.0.0.1',
    operatorsAliases: false
});

module.exports = sequelize;
