import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../../actions";

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  renderMovies() {
    return this.props.movies.reverse().map(movie => {
      return (
        <div class="row">
          <div class="col s12 m6">
            <div class="card">
              <div class="card-image">
                <img src={movie.image} alt="Oh no!" />
                <span class="card-title">{movie.title}</span>
                //<a class="btn-floating halfway-fab waves-effect waves-light red">
                  // <i class="material-icons">add</i>
                  //
                </a>
              </div>
              <div class="card-content">
                <p>{movie.personalReview}</p>
              </div>
              <div class="card-action">
                <a href={movie.imdbURL}>Link to IMDb page</a>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderMovies}</div>;
  }
}

function mapStateToProps({ movies }) {
  return { movies };
}

export default connect(mapStateToProps, { fetchMovies })(MovieList);
