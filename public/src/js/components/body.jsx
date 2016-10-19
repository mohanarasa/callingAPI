var React = require("react");

var Body = React.createClass({

  render: function(){
      return(
        <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s2">
              <img src="https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-shadow-fill-circle-512.png" alt="" height="70px" width="70px" class="circle responsive-img"/>
            </div>
            <div className="col s10">
              <span className="black-text">
                "Computer system analysis is like child-rearing; you can do grievous damage, but you cannot ensure success."- Tom DeMarco
              </span>
            </div>
            <div className="col s2">
              <img src="https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-512.png" alt=""  height="70px" width="70px" class="circle responsive-img"/>
            </div>
            <div className="col s10">
              <span className="black-text">
                "Measuring programming progress by lines of code is like measuring aircraft building progress by weight."- Bill Gates
              </span>
            </div>

            <div className="col s2">
              <img src="http://www.ums.edu.my/hepav2/images/Staff/Perumahan/Girl%20Background.png" alt="" height="70px" width="70px" class="circle responsive-img"/>
            </div>
            <div className="col s10">
              <span className="black-text">
                “Most software today is very much like an Egyptian pyramid with millions of bricks piled on
                top of each other, with no structural integrity, but just done by brute force and thousands of slaves.”- Alan Kay
              </span>
            </div>





          </div>
        </div>
        </div>



            )

          }
        });

        // console.log(Register);

        module.exports = Body;
