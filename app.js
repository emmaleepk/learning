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
    if(err){
      res.send(err);
    }
    res.render('index', {
      users: docs
    });
  })
});

//Special ID
app.get('/:id', function(req, res){
  db.users.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err,doc){
    if(err){
      res.send(err);
    }
    res.render('index', {
      user: doc
    });
  })
});

app.listen(3000, function(){
  console.log('server started on port 3000');
});
