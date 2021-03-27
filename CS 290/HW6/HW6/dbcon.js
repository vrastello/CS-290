var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs290_rastellv',
  password        : 'festiveonion206',
  database        : 'cs290_rastellv',
  dateStrings     : true
});

module.exports.pool = pool;
