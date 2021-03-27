var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 4711);

app.get('/',function(req,res){
    var getQParams = [];
    for (var p in req.query){
      getQParams.push({'name':p,'value':req.query[p]})
    }
    var context = {};
    console.log(getQParams)
    context.getQList = getQParams;
    res.render('get', context);
});


app.post('/', function(req,res){
  var postBodyParams = [];
  for (var p in req.body){
      postBodyParams.push({'name':p,'value':req.body[p]})
  }
  console.log(postBodyParams);
  console.log(req.body);
  var context = {};
  context.postBodyList = postBodyParams;
 
  var postQParams = [];
  for (var p in req.query){
    postQParams.push({'name':p,'value':req.query[p]})
  }
  context.postQList = postQParams;
  res.render('post', context);
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});
  
app.listen(app.get('port'), function(){
  console.log('Express started on http://flip1.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
});
  