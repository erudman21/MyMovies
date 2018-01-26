import React, { Component } from "react";
import { connect } from "react-redux";
import MovieList from "./movies/MovieList";
import * as actions from "../actions";
import SiteHeader from "./SiteHeader";
import { Loader, Container } from "semantic-ui-react";
import SuggestionList from "./user/SuggestionList";
import ProfileDisplay from "./user/ProfileDisplay";
import MoviesNear from "./user/MoviesNear";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      location: { lat: "", long: "" }
    };
  }

  getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          location: {
            lat: position.coords.latitude,
            long: position.coords.longitude
          }
        });
      });
    }
  };

  // Delete whatever clicked is set to in state
  delClicked = movie => {
    const { deleteMovie, fetchMovies } = this.props;

    this.setState({ loading: true });
    deleteMovie({ movie }).then(() => {
      fetchMovies().then(() => {
        this.setState({ open: false, loading: false });
      });
    });
  };

  componentDidMount = () => {
    this.props.fetchUser();
    this.props.fetchMovies().then(() => {
      this.setState({ loading: false });
    });
    this.getLocation();
  };

  render() {
    const { movies, auth } = this.props;
    const { loading, location } = this.state;

    return (
      <div>
        <SiteHeader />
        <div
          style={{
            backgroundColor: "#f7f7f4",
            position: "absolute",
            margin: "0 auto",
            width: "100%",
            minHeight: "100%"
          }}
        >
          {loading ? (
            <Loader active inline="centered" style={{ marginTop: "20%" }} />
          ) : (
            <Container
              style={{
                marginTop: "15px",
                display: "grid",
                gridTemplateColumns:
                  "minmax(188px, 195px) minmax(300px, auto) minmax(130px, 195px)",
                gridTemplateRows: "120px auto",
                gridGap: "15px"
              }}
            >
              <div
                style={{
                  float: "right",
                  gridColumn: "1",
                  gridRow: "1"
                }}
              >
                <ProfileDisplay user={auth} />
              </div>
              <div style={{ float: "right", gridColumn: "1", gridRow: "2" }}>
                <SuggestionList movies={movies} />
              </div>
              <div style={{ gridColumn: "2" }}>
                <MovieList movies={movies} delClicked={this.delClicked} />
              </div>
              <div style={{ gridColumn: "3" }}>
                <MoviesNear location={location} />
              </div>
            </Container>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ fetchMovies, auth }) {
  return { movies: fetchMovies, auth };
}

export default connect(mapStateToProps, actions)(Dashboard);
