var React = require("react");
var Dispatcher = require("../dispatchers/appDispatcher.js")
var AppStore = require("../stores/appStore.js");
import { Router, Route, IndexRoute, hashHistory,browserHistory } from "react-router";

var Logout = React.createClass({

  render: function() {

      localStorage.removeItem('myFirstKey');
      browserHistory.push('/Login')

      return (
    <h1>logout</h1>



      )
    }
})

module.exports = Logout;
