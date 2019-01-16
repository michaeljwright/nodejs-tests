
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Log = sequelize.define('log', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
});

module.exports = Log;
