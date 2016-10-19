var React = require("react");

var Home = React.createClass({

  getInitialState: function() {
    return {
      images: [
        "https://hd.unsplash.com/photo-1461749280684-dccba630e2f6",
        "https://hd.unsplash.com/photo-1472437774355-71ab6752b434",
        "https://hd.unsplash.com/photo-1429051883746-afd9d56fbdaf",
        "https://hd.unsplash.com/photo-1461632830798-3adb3034e4c8"
      ]
    }
  },

  render: function(){
      return(
        <div className="slider">
  <ul className="slides">
    <li>
      <img src="/src/assert/image1.jpeg" />
      <div className="caption center-align">
        <h3>Programming!</h3>
        <h5 className="grey darken-3 text-lighten-3">"A programming language is low
          level when its programs require attention to the irrelevant." - Alan J. Perlis.
</h5>
      </div>
    </li>
    <li>
      <img src="/src/assert/image2.jpeg" />
      <div className="caption left-align">
        <h3>Share your Code</h3>
        <h5 className="light grey-text text-lighten-3" />
      </div>
    </li>
    <li>
      <img src="/src/assert/image3.jpeg" />
      <div className="caption right-align">
        <h3>Coding</h3>
        <h5 className="light grey-text text-lighten-3">Share your code with us</h5>
      </div>
    </li>
    <li>
      <img src="/src/assert/image4.jpeg" />
      <div className="caption center-align">
        <h3>Solve and answer question</h3>
        <h5 className="grey darken-3 text-lighten-3">"Good design adds value faster than it adds cost."
- Thomas C. Gale</h5>
      </div>
    </li>
  </ul>
</div>

    )
  }
})
module.exports = Home;
