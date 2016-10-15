var React = require('react');

var Login = React.createClass({
  render: function() {
    return (<div>

    <h1>Login</h1>
      <form action="/login" method="post">
      username: <input type="text" name="username" /><br />
      password: <input type="password" name="password" /><br />
      <input type="submit" value="Submit" />
       </form>

     </div>);
  }
});

module.exports = Login;
