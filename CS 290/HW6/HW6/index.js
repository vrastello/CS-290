const { response } = require('express')
const express = require('express')
const app = express()
const mysql = require('./dbcon')

app.use(express.static('public'))
app.use(express.json())
app.set('port', 4718)

//Queries
const tableName = "workouts"
const getAllQuery = `SELECT * FROM ${tableName}`
const insertQuery = `INSERT INTO ${tableName}`
const updateQuery = ``
const deleteQuery = `DELETE FROM ${tableName} WHERE id = `
const deleteTableQuery = `DROP TABLE IF EXISTS ${tableName}`
const createTableQuery = `CREATE TABLE ${tableName}(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    reps INT,
    weight INT,
    date DATE,
    lbs BOOLEAN
)`

app.get('/', (req, res, next) => {
  let context = {}
  mysql.pool.query(getAllQuery, (err, rows, fields) => {
      if (err){
        next(err);
        return;
      }
      context.results = JSON.stringify(rows);
      res.send(context.results);
  });
});


app.post('/', (req, res, next) => {
const insertList = [req.body.id, req.body.name, 
  req.body.reps, req.body.weight, 
  req.body.date, req.body.lbs];
      mysql.pool.query(insertQuery + "(`id`, `name`, `reps`, `weight`, `date`, `lbs`) VALUES (?,?,?,?,?,?)", insertList, (err, result) => {
        if (err){
          next(err);
          return;
        }
        res.send(result);
        console.log(result);
        res.status(200);
        res.end();
      })
});

app.delete('/', (req, res, next) => {
  mysql.pool.query(deleteQuery + req.body.remove, (err, result) => {
    if (err){
      next(err);
      return;
    }
    res.send(result);
    console.log(result);
    res.end();
  })
})

app.get('/reset-table', (req, res, next) => {
     mysql.pool.query(deleteTableQuery, (err) => {
         mysql.pool.query(createTableQuery, (err) => {
             res.send(`${tableName} table reset`);
             res.end()
         });
     });
});

app.use(function(req,res){
    res.status(404);
    res.send('404');
  });
  
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.send('500');
  });
  
app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
  });