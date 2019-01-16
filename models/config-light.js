
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const ConfigLight = sequelize.define('configLight', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

module.exports = ConfigLight;
