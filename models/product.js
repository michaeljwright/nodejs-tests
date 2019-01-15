
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: true
    },
});

module.exports = Product;
