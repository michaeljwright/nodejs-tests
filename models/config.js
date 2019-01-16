

const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Config = sequelize.define('config', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Config;
