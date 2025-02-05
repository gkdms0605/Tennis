const mariaDB = require('mysql');

const conn = mariaDB.createConnection(
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'Tennis'
    }
);

module.exports = conn;