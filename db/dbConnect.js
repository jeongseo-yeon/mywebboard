require('dotenv').config();
const mysql = require('mysql/promise');
const dbConfig = {
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWD,
    database: process.env.DATABASE,
    connectionLimit:5

};

const connPool = mysql.createPool(dbConfig);
module.exports = connPool(dbConfig);
