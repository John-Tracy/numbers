// our mysql connection
var MYSQL_CONNECTIION = require('../../config/mysql.js');
var CommentsOrm = require('./tables/comments.js');
var NumbersOrm = require('./tables/numbers.js');
var HashTableOrm = require('./tables/hashTable.js');
var HashLookUpOrm = require('./hashLookUp.js');

// our table orm modules
var comments = new CommentsOrm(MYSQL_CONNECTIION);
var numbers = new NumbersOrm(MYSQL_CONNECTIION);
var hashTable = new HashTableOrm(MYSQL_CONNECTIION);
var hashLookUp = new HashLookUpOrm(MYSQL_CONNECTIION);

// preparing the global orm module.
var orm = {
	comments: comments,
	numbers: numbers,
	hashTable: hashTable,
	hashLookUp: hashLookUp
};

module.exports = orm;