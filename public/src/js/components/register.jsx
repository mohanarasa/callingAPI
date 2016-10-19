var React = require("react");
var Dispatcher = require("../dispatchers/appDispatcher.js");
var AppStore = require("../stores/appStore.js");
//import { Router, Route, IndexRoute, hashHistory,browserHistory } from "react-router";
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
var browserHistory = require('react-router').browserHistory;


var Register = React.createClass({
  getInitialState : function(){
    return {
      username : '',
      password : '',
      status   : AppStore.getRegister(),
    }
  },
  getUsernameData : function(e){
    this.setState({
      username : e.target.value
    });
    },
    getPasswordData : function(e){
    this.setState({
      password : e.target.value
    });
    },
    onClickRegister : function(e){
      Dispatcher.dispatch({
            data : {
              username : this.state.username,
              password : this.state.password
            },
            action : 'register'
          })

          AppStore.on("register", function() {
            console.log("register emit happening")
                    this.setState({
                      status: true
                    })
                  }.bind(this))

          e.preventDefault();



    },
    render: function() {


        return (
          <div>

            <form action="action_page.php">
              Username:<br/>
            <input type="text" name="username" onChange={this.getUsernameData}/>
              <br/>
              Password:<br/>
            <input type="password" name="password" onChange={this.getPasswordData}/>
              <br/><br/>
              <input type="submit" value="Submit" onClick={this.onClickRegister}/>
            </form>





          </div>
        )
      }


  })

  module.exports = Register;
