import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../../actions";
import { Image, Card, Divider, Header, Loader } from "semantic-ui-react";
import RenderRatings from "./RenderRatings";
import ReactStars from "react-stars";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount = () => {
    this.props.fetchMovies().then(() => {
      this.setState({ loading: false });
    });
  };

  renderMovies() {
    return this.props.movies.reverse().map(movie => {
      return (
        <Card fluid key={movie.title}>
          <Card.Content>
            <Image
              floated="left"
              size="small"
              src={movie.image}
              style={{ margin: "auto 2% auto 0" }}
            />
            <Card.Header textAlign="center" style={{ fontSize: "200%" }}>
              {movie.title}
            </Card.Header>
            <Divider hidden style={{ margin: ".5% 0" }} />
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
              <div style={{ overflow: "auto", maxHeight: "93px" }}>
                {movie.personalComments}
              </div>
            </Card.Meta>
          </Card.Content>
        </Card>
      );
    });
  }

  render() {
    const { loading } = this.state;
    const { movies: { length } } = this.props;

    if (loading)
      return <Loader active inline="centered" style={{ marginTop: "20%" }} />;

    if (length === 0) {
      const header = "Oh no, you don't have any movies!";
      return (
        <Header
          disabled
          textAlign="center"
          style={{
            fontSize: "250%",
            marginTop: "20%"
          }}
        >
          {header}
          <br />
          <p>Use the search bar to look for movies to add to our journal!</p>
        </Header>
      );
    }

    return (
      <Card.Group itemsPerRow={2} style={{ margin: "auto -8%" }}>
        {this.renderMovies()}
      </Card.Group>
    );
  }
}

function mapStateToProps({ fetchMovies }) {
  return { movies: fetchMovies };
}

export default connect(mapStateToProps, { fetchMovies })(MovieList);
