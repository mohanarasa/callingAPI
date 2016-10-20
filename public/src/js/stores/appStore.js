var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var axios = require('axios');
var Dispatcher = require('../dispatchers/appDispatcher.js');

var register = false;
var login = false;
var search = [];


var AppStore = merge(EventEmitter.prototype, {
  getRegister : function(){
    return register;
  },
  getLogin : function(){
    return login;
  },
  getSearch: function() {
    return search;
  }
});

module.exports = AppStore;

Dispatcher.register(handleAction);

function handleAction(payload) {
  var self = this;

  if(payload.action === 'login'){

    axios.post('http://localhost:2020/api/login', {
      username: payload.data.username,
      password: payload.data.password
    })
    .then(function (response) {

     if(response.data === 'LOGIN'){
       AppStore.emit("login");
       console.log('user is logied in sucess');
     }

    })
    .catch(function (error) {
      console.log(error);
    });
  }else if(payload.action === 'register'){

    axios.post('http://localhost:2020/register', {
      username: payload.data.username,
      password: payload.data.password
    })
    .then(function (response) {
      // register = true
      AppStore.emit("register");
      console.log(response.data)

    })
    .catch(function (error) {
      console.log(error);
    });

  } else if(payload.action === 'github') {
    axios.post('http://localhost:2020/github', {
      data: {
        q: payload.q
      }
    })
    .then(function(response) {
      search = response.data.map(function(repo, i) {
        return {
          name: repo.name,
          user: repo.owner.login,
          avatar: repo.owner.avatar_url,
          description: repo.description
        }
      });
      AppStore.emit("github");
    })
    .catch(function(error) {
      console.log(error);
    })
  }

}
