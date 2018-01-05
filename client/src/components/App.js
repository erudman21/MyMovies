import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import MovieNew from "./movies/MovieNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/movies" component={Dashboard} />
          <Route path="/movies/new" component={MovieNew} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
