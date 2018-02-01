import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from './movies/MovieList';
import * as actions from '../actions';
import SiteHeader from './SiteHeader';
import { Loader, Container } from 'semantic-ui-react';
import SuggestionList from './user/SuggestionList';
import ProfileDisplay from './user/ProfileDisplay';
import Links from './user/links/Links';
import CurrentMovies from './user/CurrentMovies';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

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
    const { fetchUser, fetchMovies } = this.props;

    fetchUser();
    fetchMovies().then(() => {
      this.setState({ loading: false });
    });
  };

  render() {
    const { movies, auth } = this.props;
    const { loading } = this.state;

    return (
      <div>
        <SiteHeader />
        <div
          style={{
            backgroundColor: '#f7f7f4',
            position: 'absolute',
            margin: '0 auto',
            width: '100%',
            minHeight: '100%'
          }}
        >
          {loading ? (
            <Loader active inline="centered" style={{ marginTop: '20%' }} />
          ) : (
            <Container
              style={{
                marginTop: '15px',
                display: 'grid',
                gridTemplateColumns:
                  'minmax(188px, 195px) minmax(300px, auto) minmax(164px, 195px)',
                gridGap: '15px'
              }}
            >
              <div style={{ gridColumn: '1' }}>
                <ProfileDisplay user={auth} />
                <SuggestionList movies={movies} />
              </div>
              <div style={{ gridColumn: '2' }}>
                <MovieList movies={movies} delClicked={this.delClicked} />
              </div>
              <div style={{ gridColumn: '3' }}>
                <Links />
                <CurrentMovies />
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
