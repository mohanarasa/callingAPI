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
          return (<li className="repo">{repo.name}</li>)
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
              <div className="input-field col s6">
                <i className="material-icons search">search</i>
                <input id="search" class="materialize-input" onChange={this.getSearchData}></input>
                <label for="search"></label>
              </div>
            </div>
          </form>
          {results}
        </div>
      )

    }
  });

  module.exports = UsersHomePage;
