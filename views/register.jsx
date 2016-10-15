var React = require('react');

var Register = React.createClass({
  render: function() {
    return (<div>

    <h1>Register</h1>
      <form action="/register" method="post">
      username: <input type="text" name="username" /><br />
      password: <input type="password" name="password" /><br />
      <input type="submit" value="Submit" />
       </form>

     </div>);
  }
});

module.exports = Register;
