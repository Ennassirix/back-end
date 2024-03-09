const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'Root',  // Assuming your MySQL username is 'root'
    database: 'finel_db',
    password: '123456'
});

pool.getConnection()
    .then(connection => {
        console.log('Connected to database!');
        connection.release();
    })
    .catch(error => {
        console.error('Error connecting to MySQL:', error.message);
    });

module.exports = pool;
