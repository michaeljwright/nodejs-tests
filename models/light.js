
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Light = sequelize.define('light', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    url: {
        type: Sequelize.STRING,
        allowNull: true
    },
    frequency: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Light;
