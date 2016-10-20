var React = require("react");
import {Link} from "react-router"
var Dispatcher = require("../dispatchers/appDispatcher.js");
var AppStore = require("../stores/appStore.js");
var browserHistory = require("react-router").browserHistory;


var Nav = React.createClass({

    getInitialState: function() {
      var key = localStorage.getItem('myFirstKey') ? true : false;
      return {
        key: key
      }
    },

    componentDidMount: function() {
      var self = this;
      AppStore.on("login", function() {
        self.setState({
          key: true
        })
      })
    },

    handleLogout: function(event) {
      event.preventDefault();
      localStorage.removeItem("myFirstKey");
      browserHistory.push("/login");
      this.forceUpdate();

    },

    render: function(){
      if (this.state.key) {
        var links = (
          <ul className="nav nav-pills">
            <li role="presentation"><a href="/usershomepage">Home</a></li>
            <li role="presentation" onClick={this.handleLogout}>Logout</li>
          </ul>
        )
      } else {
        var links = (
          <ul className="nav nav-pills">
            <li role="presentation"><a href="/register">Register</a></li>
            <li role="presentation"><a href="/login">Login</a></li>
          </ul>
        )
      }
        return(
            <div className="header">
                <nav className="navbar navbar-default blue-grey lighten-3">
                    {links}
                </nav>
            </div>
        )
    }

})


module.exports = Nav;
