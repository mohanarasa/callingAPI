var React = require('react');

var Index = React.createClass( {
  render() {
    return (
      <div>
      <h1>Welcome user you have logged in</h1>
    <a href='/logout' >Logout</a>
      </div>
    );
  }

});

module.exports = Index;
