import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../../actions";

class MovieList extends Component {
  renderMovies() {
    return <div className="container">Movies!</div>;
  }

  render() {
    return <div>{this.renderMovies()}</div>;
  }
}

function mapStateToProps({ movies }) {
  return { movies };
}

export default connect(mapStateToProps, { fetchMovies })(MovieList);
