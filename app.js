var express = require('express');
var app = express();
var path = require ('path');
var cookieParser= require ('cookie-parser');
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');
var session= require ('express-session');
var User = require ('./models/users');
var axios = require("axios")

var app= express();

// var username = "mohanarasa";
// var password = "sumangalya1993";

var username = process.env.USERNAME;
var password = process.env.PASSWORD;
var db = process.env.MONGODB_URI || 'mongodb://localhost/jwtproject_2';

mongoose.connect(db, function() {
  console.log("database connected");
});

app.use (bodyParser.urlencoded({extender: false}));
app.use (bodyParser.json());
app.use (cookieParser());


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))



app.use('/', express.static(__dirname + '/public'));

app.get('/*', function(req, res) {
res.sendFile(__dirname + '/public/index.html');
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
})


app.post('/register', function(req, res) {
  var newUser = new User({
              username : req.body.username,
              password : req.body.password
          });

      User.createUser(newUser,function(err,user){
        if(err) throw err;
        console.log(user);
      });

      res.status(200).send('ok');
})

app.post('/api/login',function(req,res){

User.getUserByUsername(req.body.username, function(err, user){
         if(err) throw err;
         if(!user){
             return 'error';
         }else{

      User.comparePassword(req.body.password, user.password, function(err, isMatch){
                if(err) throw err;
                 if(isMatch){
              res.status(200).send('LOGIN');
                       return true;
                    } else {
              res.status(403).send('NOTLOGIIN');
                       return false;
                   }
             });
        }
    })
});

app.post('/github', function(req, res){
  axios.get('https://api.github.com/search/repositories?q='+req.body.data.q, {
    headers: {
        'Host': 'api.github.com',
        'Authorization': 'Basic ' + new Buffer(username + ':' + password).toString('base64')
    }
  })
  .then(function (response) {
    console.log(response.data.items);
    res.jsonp(response.data.items);
  })
  .catch(function (error) {
    console.log(error);
    res.send(error);
  });
});

app.listen(2020,function(){
  console.log('port listing at port 2020');
});


module.exports = app;
