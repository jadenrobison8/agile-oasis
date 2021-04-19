const mysql = require('mysql2');

//connect server to MYSQL
const db = mysql.createConnection(
    {
        host: 'localhost',
        //username,
        user: 'root',
        //password
        password: 'F67h3Yp4578jK3',
        database: 'business'
    },
    console.log('Connected to the business database')
);

module.exports = db;