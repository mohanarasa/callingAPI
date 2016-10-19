var React = require("react");
import {Link} from "react-router"
var Dispatcher = require("../dispatchers/appDispatcher.js")


var Nav = React.createClass({

    render: function(){
        return(
            <div className="header">
                <nav className="navbar navbar-default blue-grey lighten-3">
                <ul className="nav nav-pills">
                  <li><Link className= "GillSans, handwriten, Trebuchet, sans-serif role= presentation"  to="/" >Home</Link></li>
                 <li role="presentation"><a href="/register">Register</a></li>
                 <li role="presentation"><a href="/login">Login</a></li>
                </ul>
                </nav>
            </div>
        )
    }
})


module.exports = Nav;
