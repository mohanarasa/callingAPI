var React = require("react");
var Dispatcher = require("../dispatchers/appDispatcher.js")
var AppStore = require("../stores/appStore.js");
import { Router, Route, IndexRoute, hashHistory,browserHistory } from "react-router";

var Login = React.createClass({
  getInitialState : function(){
    return {
      username : '',
      password : '',
      status   : AppStore.getRegister(),
    }
  },
  getUsernameData : function(e){
    console.log(e.target.value);
  this.setState({
    username : e.target.value
  });
  },
  getPasswordData : function(e){
    console.log(e.target.value);
  this.setState({
    password : e.target.value
  });
  },

  onClickLogin : function(e){
    e.preventDefault();
    Dispatcher.dispatch({
          data : {
            username : this.state.username,
            password : this.state.password
          },
          action : 'login'
        })

        AppStore.on("login", function() {
                  this.setState({
                    status: true
                  })
                }.bind(this))


  },
  render: function() {

    if(this.state.status){
      localStorage.setItem('myFirstKey', 'Hello world');
      browserHistory.push('/usersHomePage')
    }



      return (
<div>
      <div class="row">
        <form class="col s12">
          <div class="row">
            <input id="input_text" name="username" type="text" length="10" onChange={this.getUsernameData}  />
            <label for="input_text" >Username</label>
          </div>
        </form>
        </div>
        <div class="row">
          <form class="col s12">
            <div class="row">
              <input id="password" name="password" type="text" length="10" onChange={this.getPasswordData}  />
              <label for="input_text" >Password</label>
            </div>
          </form>
          <button  onClick={this.onClickLogin}>Login</button>
          </div>
</div>

      )
    }
})

module.exports = Login;


/****************



<div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="input_text" name="username" type="text" length="10">
          <label for="input_text" >Username</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea" onChange={this.getPasswordData}  length="10"></textarea>
          <input id="input_text" name="username" type="text" length="10">
          <label for="textarea1"  >Password</label>
        </div>
      </div>
    </form>
  </div>







***********/
