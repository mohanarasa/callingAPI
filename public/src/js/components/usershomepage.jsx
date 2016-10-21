var React = require("react");
import {Link} from "react-router"
var Dispatcher = require("../dispatchers/appDispatcher.js");
var AppStore = require("../stores/appStore.js");

var UsersHomePage = React.createClass({

  getInitialState: function() {
    return {
      search: ""
    }
  },

  componentDidMount: function() {
    var self = this;
    AppStore.on("github", function() {
      self.setState({
        search: AppStore.getSearch()
      })
    });
  },

  getSearchData: function(event) {
    this.setState({
      q: event.target.value
    });
  },

  search: function(e) {
    e.preventDefault();
    Dispatcher.dispatch({
      action: "github",
      q: this.state.q
    })
  },

  render: function(){

      if (this.state.search) {
        console.log(this.state.search);
        var repos = this.state.search.map(function(repo, i) {
          return (


                  <div className="col s12 m8 offset-m2 l6 offset-l3">
                    <div className="card-panel grey lighten-5 z-depth-1">
                      <div className="row valign-wrapper">
                        <div className="col s2">
                          <img src={repo.avatar}  alt className="circle responsive-img" />
                        </div>
                        <div className="col s10">
                          <span className="black-text">
                            {repo.name}
                              {repo.username}
                              {repo.description}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>




    )
        });
        var results = (
          <ul id="repoList">
            {repos}
          </ul>
        )
      } else {
        var results = "";
      }
      return(


        <div className="row">
          <form className="col s12" onSubmit={this.search}>
            <div class="row">


        <div className= "col s12">
          <div className="parallax-container">
            <div class="parallax"><img src="https://images.unsplash.com/photo-1468070454955-c5b6932bd08d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=098777638826d5753222a09116959b23" height="350px" width= "1500px"  /></div>
          </div>
          <div className="section white">
            <div className="row container">
              <h2 className="header">Search for your repo</h2>
              <p> GitHub is a web-based Git repository hosting service. It offers all of the distributed version control and source code management (SCM)
                functionality of Git as well as adding its own features. It provides access control and several collaboration features such as bug tracking,
                feature requests, task management, and wikis for every project.GitHub offers both plans for private repositories, and free accounts
                 which are commonly used to host open-source software projects. As of April 2016, GitHub reports having more than 14 million users and more than 35 million repositories,
                  making it the largest host of source code in the world.</p>

                  <div className="input-field col s6">
                    <i className="material-icons search">search</i>
                    <input id="search" class="materialize-input" onChange={this.getSearchData}></input>
                    <label for="search"></label>
                  </div>
            </div>
            {results}
          </div>

          </div>

        </div>
      </form>



    </div>


























  )
    }
  });

  module.exports = UsersHomePage;
