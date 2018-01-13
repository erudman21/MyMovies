import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../../actions";
import { Card, Header, Loader } from "semantic-ui-react";
import MovieCardContent from "./MovieCardContent";
import DeleteModal from "../modals/DeleteModal";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, open: false };
  }

  componentDidMount = () => {
    this.props.fetchMovies().then(() => {
      this.setState({ loading: false });
    });
  };

  openModal = () => this.setState({ open: true });
  closeModal = () => this.setState({ open: false });

  renderMovies() {
    return this.props.movies.map(movie => {
      return (
        <MovieCardContent
          key={movie.title}
          movie={movie}
          openModal={this.openModal}
        />
      );
    });
  }

  render() {
    const { loading, open } = this.state;
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
        <DeleteModal open={open} close={this.closeModal} />
        {this.renderMovies()}
      </Card.Group>
    );
  }
}

function mapStateToProps({ fetchMovies }) {
  return { movies: fetchMovies };
}

export default connect(mapStateToProps, { fetchMovies })(MovieList);
