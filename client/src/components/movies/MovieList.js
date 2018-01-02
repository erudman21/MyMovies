import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../../actions";

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  renderMovies() {
    return <div className="container">MovieList!</div>;
  }

  render() {
    return <div>{this.renderMovies()}</div>;
  }
}

function mapStateToProps({ movies }) {
  return { movies };
}

export default connect(mapStateToProps, { fetchMovies })(MovieList);
