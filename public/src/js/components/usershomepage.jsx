var React = require("react");

var UsersHomePage = React.createClass({

  render: function(){
      return(
        <div>
        <div className="carousel carousel-slider center" data-indicators="true">
          <div className="carousel-fixed-item center">
            <a class="btn waves-effect white grey-text darken-text-2">button</a>
          </div>
          <div className="carousel-item red white-text" href="#one!">
            <h2>First Panel</h2>
            <p className="white-text">Welcome Back Ollie</p>
          </div>
          <div className="carousel-item amber white-text" href="#two!">
            <h2>Second Panel</h2>
            <p className="white-text">Favourits</p>
          </div>
          <div className="carousel-item green white-text" href="#three!">
            <h2>Third Panel</h2>
            <p className="white-text">Profile</p>
          </div>
        </div>
        </div>

      )

    }
  });

  // console.log(Register);

  module.exports = UsersHomePage;
