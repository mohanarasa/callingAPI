var express         = require('express');
var axios           = require("axios");
var router          = express.Router();


app.post('/git', function(req, res){
  axios.get('https://api.github.com/search/repositories?q='+req.body.data.q, {
    headers: {
        'Host': 'api.github.com',
        'Authorization': 'Basic ' + new Buffer(username + ':' + password).toString('base64')
    }
  })
    .then(function (response) {
      console.log(response);
    res.send(response);
  })
  .catch(function (error) {
    console.log(error);
    res.send(error);
  });
});

function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {

        res.redirect('/usershomepage');
    }
}

module.exports = router;
