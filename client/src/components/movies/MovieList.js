import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../../actions";
import { Image, Card, Container, Divider } from "semantic-ui-react";
import RenderRatings from "./RenderRatings";
import ReactStars from "react-stars";

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  renderMovies() {
    return this.props.movies.reverse().map(movie => {
      return (
        <Card fluid key={movie.title}>
          <Card.Content>
            <Image
              verticalAlign="middle"
              floated="left"
              size="small"
              src={movie.image}
              style={{ margin: "0 2% 0 0" }}
            />
            <Card.Header textAlign="center" size="huge">
              {movie.title}
            </Card.Header>
            <Card.Meta style={{ fontSize: "15px" }}>
              <div>Seen: {new Date(movie.dateSeen).toLocaleDateString()}</div>
              <Divider hidden style={{ margin: "1% 0" }} />
              Your Rating:
              <ReactStars
                count={10}
                value={movie.personalRating}
                edit={false}
                half
              />
              <Divider hidden style={{ margin: "1% 0" }} />
              Your Review:<br />
              <div style={{ overflow: "auto", maxHeight: "100px" }}>
                {movie.personalComments}
              </div>
            </Card.Meta>
          </Card.Content>
        </Card>
      );
    });
  }

  render() {
    return <Card.Group itemsPerRow={2}>{this.renderMovies()}</Card.Group>;
  }
}

function mapStateToProps({ fetchMovies }) {
  return { movies: fetchMovies };
}

export default connect(mapStateToProps, { fetchMovies })(MovieList);
