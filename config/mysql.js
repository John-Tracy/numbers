var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'numba_test_db'
});

var MYSQL_CONNECTIION = connection.connect();

module.exports = MYSQL_CONNECTIION;