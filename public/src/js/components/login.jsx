var React = require('react');


var Login= React.createClass({
  render() {
var msg = '';
    if(this.props.success_msg == 'You are registered and can now login'){
     msg = this.props.success_msg ? <div className="alert alert-success">{this.props.success_msg}</div> : '';
   }else if(this.props.error == 'Unknown User') {
     msg = this.props.error ? <div className="alert alert-danger">{this.props.error}</div> : '';
   }else {
     msg = this.props.error_msg ? <div className="alert alert-danger">{this.props.error_msg} </div> : '';
   }


    return (
<div>
        <div class="row">
              <div className="col-lg-12">

              </div>
          </div>

          <h2 className="page-header">Account Login</h2>
          <form method="post" action="/users/login">
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" name="username" placeholder="Username" required / >
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" name="password" placeholder="Password" required / >
            </div>
            <button type="submit" className="btn btn-default">Submit</button>

          </form>

  </div>
    );
  }
});

module.exports = Login;
