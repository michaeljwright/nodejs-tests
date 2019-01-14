
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    database: 'nodejs_tests',
    // port: '3306',
    password: ''
});

module.exports = pool.promise();
