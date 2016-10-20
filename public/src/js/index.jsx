var React = require("react");
var ReactDOM = require("react-dom");
//var Counter = require("./components/ting.jsx");
var Login = require("./components/login.jsx");
var Register = require("./components/register.jsx");
var Nav = require("./components/nav.jsx");
var Home = require("./components/home.jsx");
var Body = require("./components/body.jsx");
var Footer = require ("./components/footer.jsx");
var Loading = require ("./components/load.jsx");
var UsersHomePage = require ("./components/usershomepage.jsx");


var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link
var browserHistory = require('react-router').browserHistory;
// var hashHistory = require('react-router').hashHistory;

//var AppStore = require("./stores/appStore.js");



var App = React.createClass({
  render: function() {
    return (
      <div className="content">
        <Nav />
        <Router history={browserHistory}>
          <Route path="/" component={Home}/>
          <Route path="/login" component={Login} />
          <Route path ="/register" component={Register} />
          <Route path ="/usersHomePage" component={UsersHomePage} />
        </Router>
        
          <Footer />

      </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
