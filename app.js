var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongojs = require('mongojs');

var db = mongojs('gymdb', ['users']);
var app = express();

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// View Engine Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set Static path
app.use(express.static(path.join(__dirname,'/public')));


// Routes
app.get('/', function(req, res){
  db.users.find(function(err,docs){
    res.render('index', {
      title:'Customers',
      users: docs
    });
  })
});

app.listen(3000, function(){
  console.log('server started on port 3000');
});
