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
          <div class="col s12 m7">
            <div class="card">
              <div class="card-image">
                <img src={movie.image} />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
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
